<script>
export default {
  computed: {
    userId() {
      return localStorage.getItem('userId');
    },
  },
};
</script>

<template>
  <div class="user">
    <p>{{ userId }}</p>
  </div>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: sans-serif;
}
</style>
