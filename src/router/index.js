import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Experiment from '../views/Experiment.vue'
import Results from '../views/Results.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/experiment',
    name: 'Experiment',
    component: Experiment,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
