<template>
  <div>
    <h3>Список заголовков</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import PostItem from './PostItem';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
