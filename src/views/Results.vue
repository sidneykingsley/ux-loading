<template>
  <div class="results">
    <div class="results-title">
      <h1>Experiment Results</h1>
      <p>Actual loading time: 17 seconds</p>
    </div>
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="participants.length">
      <div v-for="participant in filteredParticipants" :key="participant.id">
        <SingleParticipant :participant="participant" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import FilterNav from '../components/FilterNav.vue'
import SingleParticipant from '../components/SingleParticipant.vue'
import { projectFirestore } from '../firebase/config'

export default {
  name: 'Results',
  components: { FilterNav, SingleParticipant },
  setup() {
    const participants = ref([])
    const current = ref('all')
    onMounted(async () => {
      try {
        const res = await projectFirestore
          .collection('participants')
          .orderBy('createdAt', 'desc')
          .get()

        participants.value = res.docs.map((doc) => {
          // console.log(doc.data())
          return { ...doc.data(), id: doc.id }
        })
      } catch (err) {
        console.log('Error: ', err.message)
      }
    })

    const filteredParticipants = computed(() => {
      if (current.value === 'spinner') {
        return participants.value.filter(
          (participants) => participants.test == 'Spinner'
        )
      }
      if (current.value === 'bar') {
        return participants.value.filter(
          (participants) => participants.test == 'Bar'
        )
      }
      return participants.value
    })

    console.log('P: ', participants.value)
    console.log('FP: ', filteredParticipants.value)

    return { participants, current, filteredParticipants }
  },
}
</script>

<style scoped>
.results-title h1 {
  padding-top: 30px;
  margin-bottom: 0;
}
.results-title p {
  padding-bottom: 20px;
  margin-top: 5px;
  color: #aaa;
}

@media only screen and (max-width: 500px) {
  .results-title h1 {
    margin-bottom: 0;
    padding: inherit 20px;
    padding-top: 10px;
  }
  .results-title p {
    padding: inherit 20px;
    padding-bottom: 10px;
    margin-top: 5px;
    color: #aaa;
  }
}
</style>
