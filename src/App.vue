<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" width="200px" />
    <Dialog :dialogVisible="dialogVisible" @closeDialog="closeDialog" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BudgetList from './components/BudgetList.vue';
import TotalBalance from './components/TotalBalance.vue';
import Form from './components/Form.vue';
import Dialog from './components/Dialog.vue';

export default Vue.extend({
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
    Dialog,
  },
  data: () => ({
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
    dialogVisible: false,
    listItemId: '',
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc: number, item: { value: number; [k: string]: number }) =>
          acc + item.value,
        0
      );
    },
  },
  methods: {
    onDeleteItem(id: number | string) {
      this.dialogVisible = true;
      this.listItemId = id;
    },
    onFormSubmit(data) {
      if (data?.value !== 0) {
        const newObj = {
          ...data,
          id: String(Math.random()),
        };
        this.$set(this.list, newObj.id, newObj);
      }
    },
    closeDialog(isConfirm: boolean) {
      this.dialogVisible = false;
      if (isConfirm) {
        this.$delete(this.list, this.listItemId);
      }
    },
  },
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
