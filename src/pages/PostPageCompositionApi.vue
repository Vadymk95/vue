<template>
  <div>
    <div>{{ likes }}</div>
  </div>
</template>

<script>
import PostPagination from '@/components/PostPagination';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import { ref } from '@vue/reactivity';
export default {
  components: {
    PostForm,
    PostList,
    PostPagination,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],
    };
  },
  setup(props) {
    const likes = ref(0);
    return {
      likes,
    };
  },
};
</script>

<style scoped></style>
