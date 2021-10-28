<script>
export default {
  computed: {
    userId() {
      return localStorage.getItem('userId');
    },
  },

  mounted() {
    this.generateUserId();
    this.$analytics.page();
    this.$analytics.identify(this.userId);
  },

  methods: {
    generateUserId() {
      if (!localStorage.getItem('userId')) {
        const userId = Math.random().toString(36).substring(2);
        localStorage.setItem('userId', userId);
      }
    },
  },
};
</script>

<template>
  <Nuxt />
</template>

<style>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
