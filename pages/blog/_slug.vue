<template>
  <main>
    <h1>Hi</h1>
    <!-- <h1>{{ post.title.rendered }}</h1>
    <section v-html="post.content"></section>-->
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
      slug: this.$route.params.slug
    };
  }
};
</script>

<style lang="scss" scoped>
</style>