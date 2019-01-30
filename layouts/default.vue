<template>
  <div class="main-container">
    <Hero/>
    <div class="page-container">
      <nuxt ref="page" class="page"/>
    </div>
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
<style>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
