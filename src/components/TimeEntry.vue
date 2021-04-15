<template>
  <div class="time-wrapper">
    <div class="form-wrapper">
      <h2>
        How long do you think you waited for this page to load?
      </h2>
      <form @submit.prevent="handleResults">
        <div class="mobile-form">
          <label>Time waited</label>
          <input type="range" min="1" max="30" required v-model="time" />
          <div class="value">
            <p>{{ time }}</p>
            <p v-if="time <= 1">&nbsp;second</p>
            <p v-if="time > 1">&nbsp;seconds</p>
          </div>
          <p v-if="hint" class="hint">
            HINT: Drag the slider above to the right for however many seconds
            you felt you waited
          </p>
        </div>
        <div class="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default {
  props: ['userId'],
  setup(props) {
    const time = ref(1)
    const hint = ref(false)
    const router = useRouter()

    onMounted(() => {
      setTimeout(() => {
        hint.value = true
      }, 5000)
    })

    const handleResults = async () => {
      console.log('handling results')
      try {
        const res = await projectFirestore
          .collection('participants')
          .doc(props.userId)
          .update({ time: time.value })
      } catch (err) {
        console.log('Error: ', err.message)
      }
      router.push('/results')
    }
    return { time, hint, handleResults }
  },
}
</script>

<style scoped>
.value {
  display: flex;
  justify-content: center;
}
.time-wrapper {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  background: #222;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  display: inline-block;
  margin: 25px 0 15px;
  color: #ccc;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.time-wrapper input {
  display: block;
  background: none;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: #eee;
}
.submit {
  text-align: center;
}

.hint {
  color: #aaa;
  text-align: center;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  max-width: 400px;
}

button {
  background: #e2856e;
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.time-wrapper h2 {
  text-align: center;
}

.time-wrapper input:focus {
  outline: none;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type='range'] {
    overflow: hidden;
    width: 400px;
    -webkit-appearance: none;
    background-color: #111;
    border-radius: 20px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #13bba4;
    margin-top: -1px;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 10px;
    cursor: ew-resize;
    background: #222;
    box-shadow: -193px 0 0 200px #e2856e;
  }
}

@media only screen and (min-width: 1024px) {
  .time-wrapper h2 {
    width: 400px;
    text-align: center;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  form {
    width: 400px;
  }
  .form h2 {
    margin: 0 20px;
  }
}
@media only screen and (max-width: 500px) {
  body {
    background: #333;
    margin: 0;
    padding: 0;
  }

  .time-wrapper {
    background: #e2856e;
    display: block;
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .form-wrapper {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    height: 100%;
    padding: 0 20px;
  }

  form {
    background: #222;
    text-align: left;
    border-radius: 10px;
    margin: 0px 0px 30px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    width: 100%;
  }

  .mobile-form {
    padding: 40px;
  }

  .submit {
    padding: 40px;
  }

  .form-wrapper h2 {
    padding: 0;
    margin: 40px 20px 40px 20px;
    text-align: left;
    color: #222;
  }

  .form-wrapper button {
    width: 100%;
    background: #e2856e;
    color: #111;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type='range'] {
      overflow: hidden;
      width: 100%;
      -webkit-appearance: none;
      background-color: #111;
      border-radius: 20px;
    }

    input[type='range']::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: #e2856e;
      margin-top: -1px;
    }

    input[type='range']::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      border-radius: 10px;
      cursor: ew-resize;
      background: #222;
      box-shadow: -193px 0 0 200px #e2856e;
    }
  }

  .time-wrapper input:focus {
    outline: none;
  }
}
</style>
