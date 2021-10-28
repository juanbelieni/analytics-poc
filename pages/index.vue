<script>
export default {
  mounted() {
    this.$analytics.page({
      title: 'Home',
      url: window.location.href,
      path: '/',
    });
  },
};
</script>

<template>
  <Tutorial />
</template>
