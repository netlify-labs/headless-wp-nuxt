<template>
  <main class="post">
    <h1>{{ post.title.rendered }}</h1>
    <section v-html="post.content.rendered"></section>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.$store.dispatch("getPosts");
    setTimeout(() => {
      console.log(`posts: ${JSON.stringify(this.posts, null, 2)}`);
      console.log(`post: ${JSON.stringify(this.post, null, 2)}`);
      console.log(`slug: ${this.slug}`);
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
main.post {
  margin: 30px auto 50px;
  max-width: 800px;
  padding-bottom: 70px;
}

h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}
</style>