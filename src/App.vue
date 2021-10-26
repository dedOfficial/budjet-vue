<template>
  <div id="app"> <BudgetList :list="list" /> </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BudgetList from './components/BudgetList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    BudgetList,
  },
  data: () => ({
    l: [1, 2],
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some comment 2',
        id: 2,
      },
    },
  }),
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
