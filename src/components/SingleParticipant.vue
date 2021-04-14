<template>
  <div
    class="par"
    :class="{
      'green-timer': participant.time <= 10,
      'yellow-timer': participant.time > 10 && participant.time <= 20,
      'red-timer': participant.time > 20,
    }"
  >
    <div class="par-details">
      <h3>Participant ID: {{ participant.id }}</h3>
      <p>Test type: {{ participant.test }}</p>
    </div>
    <div class="par-time-wrapper">
      <p class="par-time">
        {{ participant.time }}
      </p>
      <p v-if="participant.time <= 1" class="par-time-value">&nbsp;sec</p>
      <p v-if="participant.time > 1" class="par-time-value">&nbsp;secs</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['participant'],
}
</script>

<style scoped>
.par {
  max-width: 600px;
  margin: 20px auto;
  background: #222;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0;
}

.par-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -3px;
}
.par-time-wrapper {
  display: flex;
  align-items: baseline;
  align-self: center;
}
.par-time {
  font-size: 50px;
  font-weight: 500;
  padding-right: 5px;
}
.par-time-value {
  align-self: baseline;
}

.green-timer {
  /* color: #65f390; */
  border-left: solid 5px #65f390;
}
.yellow-timer {
  /* color: #f3c365; */
  border-left: solid 5px #f3c365;
}
.red-timer {
  /* color: #f36565; */
  border-left: solid 5px #f36565;
}

@media only screen and (min-width: 500px) and (max-width: 650px) {
  .par {
    margin: 20px;
  }
}

@media only screen and (max-width: 500px) {
  body {
    background: #333;
    margin: 0;
    padding: 0;
  }
  .par {
    max-width: 600px;
    margin: 20px;
    padding: 10px 20px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;
  }

  .par-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -3px;
  }

  .par-details h3 {
    font-size: 17px;
    line-height: 30px;
    padding-right: 30px;
    margin: 0;
    word-break: break-all;
  }

  .par-time-wrapper {
    display: flex;
    align-items: baseline;
    align-self: center;
  }
  .par-time {
    font-size: 40px;
    font-weight: 500;
    padding-right: 5px;
  }
  .par-time-value {
    align-self: baseline;
  }
}
</style>
