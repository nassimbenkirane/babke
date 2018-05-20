<template>
  <section class="section has-text-centered">
    <div class="container is-size-6">
      <h1 class="is-size-3 has-text-weight-bold">
        Informations / Contact
      </h1>

      <section class="section small-section">
        <p>
          Le restaurant est situé au <br/>
          53 rue de Bagnolet - 75020 Paris
        </p>
        <iframe
          class="embeded_map"
          frameborder="0" style="border:0"
          :src="`https://www.google.com/maps/embed/v1/place?key=${
            google_api_key
          }&q=53+rue+de+bagnolet,75020+Paris`" allowfullscreen>
        </iframe>
      </section>
      <section class="section small-section">
        <p>
          Pour toute question, ou si vous voulez travailler pour Babké,
          <br/>
          n'hesitez pas à nous contacter à l'adresse e-mail qui suit :
          <br/>
          <a href="mailto:babkesarl@gmail.com">babkesarl@gmail.com</a>
        </p>
      </section>

    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import config from '../config'

export default {
  components: {
    Logo
  },
  data: () => ({
    google_api_key: config.google_api_key
  }),
  transition: 'page',
  head: {
    title: 'BABKÉ Kebab Gourmet | Contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Pour toute question, ou si vous voulez travailler pour Babké, voici la page contact'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.babke.fr/contact' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.section.small-section {
  width: 600px;
  max-width: 100vw;
  margin: auto;
}
</style>
