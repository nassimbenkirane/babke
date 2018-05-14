<template>
  <section class="hero is-primary">
    <div class="hero-body has-text-centered">
      <div class="container">
        <router-link tag="h1" class="is-size-2 is-cursive" to="/">
            <img src="~assets/babke-logo.png" alt="logo" class="logo"/>
        </router-link>
      </div>
    </div>
    <main-navbar/>
  </section>
</template>

<script>
import MainNavbar from '~/components/MainNavbar.vue'

export default {
  data: () => {
    return {

    }
  },
  components: {
    MainNavbar
  },
  mounted () {
    console.log(this.$refs.page)
  }
}
</script>

<style lang="scss" scoped>
.hero-body {
  padding: 10px;
}
img.logo {
  height: 80px;
}
</style>
