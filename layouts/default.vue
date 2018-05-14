<template>
  <div class="main-container">
    <Hero/>
    <nuxt ref="page" class="page"/>
    <MainFooter/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import MainFooter from '~/components/MainFooter.vue'

export default {
  components: {
    Hero,
    MainFooter
  }
}
</script>
