<template>
  <div class="navbar">
    <h1 @click="$router.push('/')">Vue 3</h1>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 20px">Хранилище</my-button>
      <my-button @click="$router.push('/composition')" style="margin-left: 20px">Композиция</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightblue;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 8px 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
