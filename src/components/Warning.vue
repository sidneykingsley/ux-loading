<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h3>
        Please stay on the next page <br />
        while it loads.
      </h3>
      <button @click="closeModal">Okay</button>
    </div>
  </div>
</template>
<script>
export default {
  emits: ['close'],
  setup(_, { emit }) {
    const closeModal = () => {
      emit('close')
    }
    return { closeModal }
  },
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #222;
  color: #eee;
  border-radius: 10px;
  margin-top: -50px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(50, 50, 50, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal button {
  background: #33c5a3;
  color: #111;
  font-size: 0.65em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  border: 0;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 20px;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: white;
}

.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal .actions a {
  color: white;
}
@media only screen and (max-width: 500px) {
  .modal {
    margin: 0 20px;
  }
  .modal button {
    background: #33c5a3;
  }
}
</style>
