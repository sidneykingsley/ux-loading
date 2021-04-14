<template>
  <Form v-if="dataEntry" @submitFinal="handleData" />
  <Warning v-if="warning" @close="warningClosed" />
  <SpinnerTest
    v-if="testing && testType == 'Spinner'"
    :delay="delay"
    @end="endTest"
  />
  <BarTest v-if="testing && testType == 'Bar'" :delay="delay" @end="endTest" />
  <TimeEntry v-if="collect" :userId="userId" />
</template>

<script>
import { ref } from '@vue/reactivity'
import Form from '../components/Form.vue'
import Warning from '../components/Warning.vue'
import SpinnerTest from '../components/SpinnerTest.vue'
import BarTest from '../components/BarTest.vue'
import TimeEntry from '../components/TimeEntry.vue'

export default {
  name: 'Experiment',
  components: { Form, Warning, SpinnerTest, BarTest, TimeEntry },
  setup() {
    const dataEntry = ref(true)
    const warning = ref(false)
    const testing = ref(false)
    const collect = ref(false)
    const testType = ref('')
    const delay = ref(17000)
    const userId = ref(null)

    const handleData = (test, id) => {
      warning.value = true
      testType.value = test
      userId.value = id
    }

    const warningClosed = () => {
      dataEntry.value = false
      warning.value = false
      testing.value = true
    }

    const endTest = () => {
      testing.value = false
      collect.value = true
    }

    return {
      dataEntry,
      warning,
      testing,
      collect,
      testType,
      delay,
      userId,
      handleData,
      warningClosed,
      endTest,
    }
  },
}
</script>
