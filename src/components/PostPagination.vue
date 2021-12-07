<template>
  <div class="page__wrapper">
    <div
      class="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      :key="pageNumber"
      v-for="pageNumber in totalPages"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Array,
    },
    page: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid #000;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}
</style>
