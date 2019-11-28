export const state = () => ({
  Posts: []
})

export const mutations = {
  updatePosts: (state, payload) => {
    state.Posts = payload
  }
}

export const actions = {
  async getPosts({ state, commit }) {
    if (state.getPosts) return

    try {
      let Posts = await fetch(
        `https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20`
      ).then(res => res.json())

      Posts = Posts.filter(el => el.status == "publish").map(
        ({ id, slug, title, excerpt, date, tags }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags
        })
      )

      commit("updatePosts", Posts)
    } catch (err) {
      console.log(err)
    }
  }
}
