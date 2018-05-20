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
        <no-ssr>
          <div class="carousel-container">
            <carousel :perPage="1" :navigationEnabled="true" :autoplay="false">
              <slide>
                <div class="flex-center">
                  <img src="~assets/gameboy.png" alt="gameboy" class="gameboy-image" />
                </div>
              </slide>
              <slide>
                <div class="flex-center">
                  <img src="~assets/boombox.png" alt="boombox" class="boombox-image" />
                </div>
              </slide>
              <slide>
                <div class="flex-center">
                  <img src="~assets/tag.png" alt="tag" class="tag-image" />
                </div>
              </slide>
            </carousel>
          </div>
        </no-ssr>
      </section>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Logo,
    Carousel,
    Slide
  },

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
img {
  margin-top: 50px;
}
.gameboy-image{
  height: 200px;
}
.boombox-image {
  height: 200px;
}
.tag-image {
  height: 275px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 325px;
}
.carousel-container {
  display: inline-block;
}
</style>
