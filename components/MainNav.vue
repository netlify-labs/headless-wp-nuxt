<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link exact to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  background: #000;
  color: #fff;
  padding: 1em;

  a {
    color: #fff;
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100vw;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
