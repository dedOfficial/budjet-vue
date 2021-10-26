<template>
  <div class="total-value" :class="totalColor">Balance: {{ total }}</div>
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
  computed: {
    totalColor() {
      const { total } = this.$props;
      if (total > 0) return 'positive';
      else if (total < 0) return 'negative';
      else return 'default';
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

.positive {
  color: green;
}
.negative {
  color: red;
}
.default {
  color: black;
}
</style>
