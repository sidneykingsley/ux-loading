<template>
  <div class="form-wrapper">
    <div class="mobile-form">
      <h2>First, please enter some basic details:</h2>
      <form @submit.prevent="handleSubmit" class="details-form">
        <div>
          <label>Full name</label>
          <input type="text" required v-model="name" />
          <label>Age</label>
          <input type="number" required v-model="age" />
        </div>
        <div class="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore, timestamp } from '../firebase/config'

export default {
  emits: 'submitFinal',
  setup(_, { emit }) {
    const name = ref('')
    const age = ref(null)
    let id = ''

    const handleSubmit = async () => {
      let participant = {
        name: name.value,
        age: parseFloat(age.value),
        test: Math.random() < 0.5 ? 'Spinner' : 'Bar',
        time: null,
        createdAt: timestamp(),
      }
      try {
        const res = await projectFirestore
          .collection('participants')
          .add(participant)
          .then(function(docRef) {
            id = docRef.id
          })
          .catch(function(error) {
            console.error('Error adding document: ', error)
          })
      } catch (err) {
        console.log('Error', err.message)
      }
      emit('submitFinal', participant.test, id)
    }

    return { name, age, handleSubmit }
  },
}
</script>

<style scoped>
.form-wrapper {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.details-form {
  background: #222;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

form button {
  background: #33c5a3;
  color: #111;
  font-size: 0.65em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  border: 0;
  padding: 10px 20px;
  margin-top: 40px;
  border-radius: 20px;
}

label {
  color: #ccc;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.form-wrapper input {
  display: block;
  background: none;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #eee;
}

.submit {
  text-align: center;
}

input:focus {
  outline: none;
  border-bottom-color: #33c5a3;
  border-width: 2px;
}

@media only screen and (min-width: 1024px) {
  form {
    width: 400px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  form {
    margin: 0 20px;
  }
  .form h2 {
    margin: 0 20px;
  }
}
/* @media only screen and (max-width: 767px) {
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
  }
  form {
    margin: 0 20px;
  }
  .form h2 {
    margin: 0 20px;
  }
} */

@media only screen and (max-width: 500px) {
  body {
    margin: 0;
    padding: 0;
  }

  .form-wrapper {
    /* background: #09d095; */
    background: #33c5a3;
    display: block;
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .mobile-form {
    margin: 0;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    height: 100%;
  }

  .details-form {
    background: #222;
    text-align: left;
    border-radius: 10px;
    margin: 0px 20px 30px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .form-wrapper h2 {
    padding: 0;
    margin: 40px;
    text-align: left;
    color: #111;
  }

  .form-wrapper input {
    margin-bottom: 30px;
  }

  input:focus {
    border-bottom-color: #33c5a3;
  }

  .form-wrapper button {
    width: 100%;
    background: #33c5a3;
    color: #111;
  }
}
</style>
