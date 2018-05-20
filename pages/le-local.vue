<template>
  <section class="section has-text-centered">
    <div class="container is-size-6">
      <h1 class="is-size-3 has-text-weight-bold">
        Le local
      </h1>

      <section class="section small-section">
        <p>
          L'esprit du local est d'inspiration jeux vidéo et éléments vintage.
        </p>
        <p>
          L'ambition est de vous faire passer un moment agréable autour d'un Kebab de fine qualité, en évoquant l'univers retro et coloré des années 90.
        </p>
        <p>
          <img src="~assets/gameboy.png" alt="gameboy" class="gameboy-image" />
          <img src="~assets/boombox.png" alt="boombox" class="boombox-image" />
        </p>
        <p>
          <img src="~assets/tag.png" alt="tag" class="tag-image" />
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
    title: 'BABKÉ Kebab Gourmet | Le local',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Le local'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.babke.fr/le-local' }
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
.gameboy-image{
  margin-top: 40px;
  height: 200px;
}
.boombox-image {
  position: relative;
  top: -10px;
  height: 200px;
}
.tag-image {
  margin-top: 50px;
}
</style>
