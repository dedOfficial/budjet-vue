<template>
  <ElDialog
    title="Delete item"
    :visible.sync="dialogVisible"
    :before-close="handleClose"
  >
    <span>Are you sure delete this item?</span>
    <span slot="footer" class="dialog-footer">
      <ElButton @click="handleClose(false)">Cancel</ElButton>
      <ElButton type="primary" @click="handleClose(true)">Confirm</ElButton>
    </span>
  </ElDialog>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Dialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isConfirm: false,
  }),
  methods: {
    handleClose(confirm: boolean) {
      this.isConfirm = confirm;
      this.$emit('closeDialog', this.isConfirm);
    },
  },
});
</script>
