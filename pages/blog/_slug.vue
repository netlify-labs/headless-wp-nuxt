<template>
  <main>
    <h1>{{ post.title.rendered }}</h1>
    <section>{{ post.content }}</section>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["posts"]),
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      id: this.$route.params.slug
    };
  }
};
</script>

<style lang="scss" scoped>
</style>