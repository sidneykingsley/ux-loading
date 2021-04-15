<template>
  <div class="welcome">
    <div class="mobile-welcome">
      <h1>Hello!</h1>
      <div class="welcome-content">
        <div class="welcome-text">
          <p>This is a small UX experiment for my final year project.</p>
          <p>It shouldn't take more than <strong>5 minutes</strong>.</p>
          <p>Thank you for participating!</p>
        </div>
        <button @click="startTest">Start experiment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Welcome',
  components: {},
  setup() {
    const router = useRouter()
    const startTest = () => {
      router.push({ name: 'Experiment' })
    }
    return { startTest }
  },
}
</script>

<style scoped>
.welcome {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-content {
  max-width: 600px;
  background: #222;
  padding: 40px;
  border-radius: 10px;
}

.welcome h1 {
  line-height: 20px;
  padding-bottom: 10px;
}
.welcome p {
  line-height: 10px;
}

.welcome button {
  background: #09a8d0;
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

@media only screen and (max-width: 500px) {
  body {
    margin: 0;
    padding: 0;
  }
  .welcome {
    background: #09a8d0;
    display: block;
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .mobile-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    height: 100%;
    /* padding: 20px; */
  }

  .welcome-content {
    background: none;
    background: #222;
    margin: 0px 20px 30px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .welcome-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .welcome h1 {
    padding: 0px;
    margin: 30px;
    line-height: inherit;
    color: #222;
    /* border-bottom: solid #222 3px; */
  }
  .welcome p {
    line-height: 30px;
  }
  .welcome button {
    color: #111;
  }
}
</style>
