<template>
  <div class="total-value">Balance: {{ total }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 26px;
  text-align: center;
}
</style>
