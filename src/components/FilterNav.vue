<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      View all
    </button>
    <button
      @click="updateFilter('spinner')"
      :class="{ active: current === 'spinner' }"
    >
      Spinner
    </button>
    <button @click="updateFilter('bar')" :class="{ active: current === 'bar' }">
      Bar
    </button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by)
    },
  },
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 30px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: white;
  border-bottom: solid white 1px;
  padding-bottom: 5px;
}
</style>
