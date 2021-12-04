<template>
  <div class="post">
    <p><strong>Название:</strong> {{ post.title }}</p>
    <p><strong>Описание:</strong> {{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
