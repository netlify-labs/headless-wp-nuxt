export const state = () => ({
  posts: [],
  tags: []
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status == "publish")
        .map(({ id, slug, title, excerpt, date, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }))

      commit("updatePosts", posts)
      dispatch("getTags", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getTags({ state, posts }) {
    if (state.tags.length) return
    const allTags = posts.map(el => el.tags)

    try {
      let tags = await fetch(
        `https://css-tricks.com/wp-json/wp/v2/tags?include=1,19,3`
      ).then(res => res.json())

      // tags = tags
      //   .map(({ tag }) => ({
      //     tag
      //   }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  }
}
