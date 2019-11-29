<template>
  <div class="posts">
    <main>
      <h2>Posts</h2>
      <div class="post" v-for="post in sortedPosts" :key="post.id">
        <h3>
          <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
        </h3>
        <div v-html="post.excerpt.rendered"></div>
        <a :href="`blog/${post.slug}`" class="readmore">Read more ⟶</a>
      </div>
    </main>
    <aside>
      <h2>Categories</h2>
      <div class="tags-list">
        <ul>
          <li 
            @click="updateTag(tag)" 
            v-for="tag in tags" 
            :key="tag.id" 
            :class="[tag.id === selectedTag ? activeClass : '']">
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTag: null,
      activeClass: 'active'
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts
      return this.posts.filter(el => el.tags.includes(this.selectedTag))
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    }
  },
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  margin: 3em auto;
  max-width: 80vw;
}

main {
  grid-area: 1 / 1 / 2 / 2;
}

aside {
  grid-area: 1 / 2 / 2 / 3;
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}

a.readmore {
  color: #741910;
  padding-top: 20px;
  display: block;
  text-align: right;
}

.post,
.tags-list {
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2em;
  padding: 2em;

  h3 {
    margin-bottom: 1em;
  }
}

.tags-list ul {
  padding-left: 0;
}

.tags-list li {
  display: inline-block;
  padding: 4px 9px;
  margin: 6px;
  border-radius: 6px;
  background-color: #fff2cc;
  span {
    color: #d44119;
    cursor: pointer;
  }
}

.tags-list li a {
  color: #d44119;
  cursor: pointer;
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}
</style>
