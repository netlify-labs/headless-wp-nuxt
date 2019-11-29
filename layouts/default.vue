<template>
  <div>
    <app-nav />
    <nuxt />
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue"

export default {
  components: {
    AppNav
  }
}
</script>

<style>
html {
  font-family: "IBM Plex Serif", serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #d33a2c;
}

h1,
h2,
h3 {
  font-family: "IBM Plex Serif", serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
