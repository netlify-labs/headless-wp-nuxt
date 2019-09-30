<template>
<div class="posts">
  <main>
    <h2>Posts</h2>
    <div class="post" v-for="post in Posts" v-bind:key="post.id">
      <h3><a :href="post.slug">{{ post.title.rendered }}</a></h3>
      {{ post.excerpt.rendered }}
    </div>
  </main>
  <aside>
    <h2>Categories</h2>
    <ul class="categories-list" v-for="category in Categories" v-bind:key="category.id">
      <li><a :href="category.slug">{{ category.name.rendered }}</a></li>
    </ul>
  </aside>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['Posts'])
  },
  mounted() {
    this.$store.dispatch('getPosts');
  }
}
</script>

<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: 3;
  grid-auto-rows: 3;
  grid-gap: 3em;
  margin: 3em auto;
  max-width: 80vw;
}

main {
  grid-column: 1 / 3;
  grid-row: 1
}

aside {
  grid-column: 3 / 4;
  grid-row: 1;
}

h2 {
  margin-bottom: 2em;
}

.post,
.categories-list {
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .25);
  margin-bottom: 2em;
  padding: 2em;

  h3 {
    margin-bottom: 1em;
  }
}
</style>
