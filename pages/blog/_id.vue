<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["Posts"]),
    product() {
      return this.Posts.find(el => el.id === this.id);
    }
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style lang="scss" scoped>
</style>