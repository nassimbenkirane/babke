<template>
  <section class="section has-text-centered">
    <div class="container is-size-6">
      <h1 class="is-size-3 has-text-weight-bold">
        Le concept BABKÉ
      </h1>

      <section class="section small-section">
        <p>
          Babke est un concept de restauration rapide qui réunit les valeurs les plus essentielles de plaisir et de bien-vivre.
        </p>
        <p>
          L'objectif est de vous faire profiter d'un des meilleurs kebabs de Paris, dans un lieu à la fois résolument moderne et inscrit dans l'ambiance vintage des années 90.
        </p>
      </section>

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
    title: 'BABKÉ Kebab Gourmet | Informations',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Informations sur le concept de Babké'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.babke.fr/informations' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.section.small-section {
  max-width: 600px;
  margin: auto;
}
</style>
