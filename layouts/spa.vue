<template>
  <div>
    <sticky-navbar />
    <div class="main-container">
      <div class="page-container">
        <nuxt ref="page" class="page"/>
      </div>
      <MainFooter/>
    </div>
  </div>
</template>

<script>
import MainFooter from '~/components/MainFooter.vue'
import StickyNavbar from '~/components/StickyNavbar'
export default {
  components: {
    StickyNavbar,
    MainFooter
  },
  head () {
    return {
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
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



