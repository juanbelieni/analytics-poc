<script>
export default {
  computed: {
    userId() {
      if (process.browser) return localStorage.getItem('userId');
      return null;
    },
  },

  mounted() {
    this.$analytics.page({
      title: 'User',
      url: window.location.href,
      path: '/user',
    });
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
