<template>
  <section class="section has-text-centered index-page-section">
    <div class="container is-size-5">
      <logo/>
      <h2 class="title is-size-5">
        Bienvenue chez Babké, fast-food gourmet et raffiné
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  transition: 'page',
  head: {
    title: 'BABKE Kebab Gourmet | Accueil',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Bienvenue chez Babké, fast-food gourmet et raffiné'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.babke.fr' }
    ],
    bodyAttrs: {
      class: 'home-page'
    }
  }
}
</script>

<style lang="scss">
$babke-primary: #f7b518;

.index-page-section {
  background-color: $babke-primary;
  .title {
    margin-top: 40px;
  }
}
.home-page .logo {
  opacity: 0;
}
</style>
