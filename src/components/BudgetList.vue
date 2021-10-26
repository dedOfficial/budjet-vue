<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="(item, prop) in list"
          :key="prop"
          :comment="item.comment"
          :value="item.value"
          :id="item.id"
          @deleteItem="deleteItem"
        />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BudgetListItem from './BudgetListItem.vue';

export default Vue.extend({
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Budget',
    emptyTitle: 'Empty list',
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.$props.list).length;
    },
  },
  methods: {
    deleteItem(id: number | string) {
      this.$emit('deleteItem', id);
    },
  },
});
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
