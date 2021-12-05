<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid teal;
  color: teal;
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.btn:active {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
