<template>
  <div class="list-item">
    <i class="type-icon" :class="typeIcon"></i>
    <span class="budget-comment">{{ comment }}</span>
    <span class="budget-value">{{ value }}</span>
    <ElButton type="danger" size="mini" @click="deleteItem(id)"
      >Delete</ElButton
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BudgetListItem',
  props: {
    comment: {
      type: String,
      default: 'Some expenses',
    },
    value: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteItem(id: number | string) {
      this.$emit('deleteItem', id);
    },
  },
  computed: {
    typeIcon() {
      const { value } = this.$props;
      if (value > 0) return 'el-icon-top';
      else return 'el-icon-bottom';
    },
  },
});
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.type-icon {
  margin-right: 10px;
}

.type-icon.el-icon-top {
  color: green;
}
.type-icon.el-icon-bottom {
  color: red;
}
</style>
