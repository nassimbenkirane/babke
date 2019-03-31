<template>
  <div>
    <section class="section has-text-centered index-page-section" id="home">
      <div class="container is-size-5">
        <logo/>
        <h2 class="title is-size-5">
          Bienvenue chez Babké, fast-food gourmet et raffiné
        </h2>
        <h3 class="title is-size-6">
          53, rue de Bagnolet - 75020 Paris
        </h3>
      </div>
    </section>
    <section class="section has-text-centered has-background-white" id="informations">
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
    <section class="section has-text-centered has-background-tag has-text-white" id="le-local">
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
                    <img src="~assets/gameboy.png" alt="gameboy" class="slider-img gameboy-image" />
                  </div>
                </slide>
                <slide>
                  <div class="flex-center">
                    <img src="~assets/boombox.png" alt="boombox" class="slider-img boombox-image" />
                  </div>
                </slide>
                <slide>
                  <div class="flex-center">
                    <img src="~assets/tag_babke.jpg" alt="tag" class="slider-img tag-image" />
                  </div>
                </slide>
                <slide>
                  <div class="flex-center">
                    <img src="~assets/mario.png" alt="tag" class="slider-img tag-image" />
                  </div>
                </slide>
                <slide>
                  <div class="flex-center">
                    <img src="~assets/razmoket.jpg" alt="tag" class="slider-img tag-image" />
                  </div>
                </slide>
                <slide>
                  <div class="flex-center">
                    <img src="~assets/tag.png" alt="tag" class="slider-img tag-image" />
                  </div>
                </slide>
              </carousel>
            </div>
          </no-ssr>
        </section>
      </div>
    </section>
    <section class="section has-text-centered has-background-white" id="le-menu">
      <h1 class="is-size-3 has-text-weight-bold">
        Le menu
      </h1>
      <p>Pour les étudiants : -1€ sur toutes les formules  !</p>
      <div class="container is-fluid is-size-6">
        <div class="white-content has-text-left">
          <h4 class="is-size-5 title title-menu">Le Parisien</h4>
          <div class="columns">
            <div class="column is-three-quarters has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Viande à la broche • Salade Iceberg • Tomates • Oignons rouges
              </p>
              <p class="is-size-8 has-text-weight-normal">Menu avec Frites maison et boisson</p>
            </div>
            <div class="column is-one-quarter has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-normal">
                Menu à <b>8€</b> <br>
                Sandwich seul <b>6.5€</b>
              </p>
            </div>
          </div>
          <hr/>
          <h4 class="is-size-5 title title-menu">Le Berlinois</h4>
          <div class="columns">
            <div class="column is-three-quarters has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Viande à la broche • Concombres rapés • Chou rouge • Chou blanc • Oignons rouges
              </p>
              <p class="is-size-8 has-text-weight-normal">Menu avec Frites maison et boisson</p>
            </div>
            <div class="column is-one-quarter has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-normal">
                Menu à <b>9.5€</b> <br>
                Sandwich seul <b>8€</b>
              </p>
            </div>
          </div>
          <hr/>
          <h4 class="is-size-5 title title-menu">Le Kebab Deluxe</h4>
          <div class="columns">
            <div class="column is-three-quarters has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Viande à la broche • Salade Iceberg • Tomates • Oignons rouges • Poivrons rouge/jaune/vert • Champignons • Oignons confits
              </p>
              <p class="is-size-8 has-text-weight-normal">Menu avec Frites maison et boisson</p>
            </div>
            <div class="column is-one-quarter has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-normal">
                Menu à <b>12€</b> <br>
                Sandwich seul <b>9.5€</b>
              </p>
            </div>
          </div>
          <hr/>
          <h4 class="is-size-5 title title-menu">Le Vegétarien</h4>
          <div class="columns">
            <div class="column is-three-quarters has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Steak d'aubergine mariné à l'huile d'olive • Sauce moutarde et miel • Salade iceberg • Tomates • Poivrons rouge/jaune/vert • Champignons • Oignons rouges
              </p>
              <p class="is-size-8 has-text-weight-normal">Menu avec Frites maison et boisson</p>
            </div>
            <div class="column is-one-quarter has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-normal">
                Menu à <b>10.5€</b> <br>
                Sandwich seul <b>8.5€</b>
              </p>
            </div>
          </div>
          <hr/>
          <h4 class="is-size-5 title title-menu">En supplément</h4>
          <div class="columns">
            <div class="column is-two-thirds has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Frites de patates douces
              </p>
            </div>
            <div class="column is-one-third has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-bold">+ 1€</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-two-thirds has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Boissons 50cl
              </p>
            </div>
            <div class="column is-one-third has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-bold">+ 0.5€</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-two-thirds has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Limonaid et Charitea
              </p>
            </div>
            <div class="column is-one-third has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-bold">+ 1.5€</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-two-thirds has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Cidre et bière BAP BAP
              </p>
            </div>
            <div class="column is-one-third has-text-right has-text-weight-normal">
              <p class="is-size-8 has-text-weight-bold">+ 2€</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-two-thirds has-text-left">
              <p class="is-size-8 has-text-weight-normal">
                Frites seules
              </p>
            </div>
            <div class="column is-one-third has-text-right has-text-weight-normal">
              <p class="is-size-8">frites maison <b>3€</b></p>
              <p class="is-size-8">patate douces <b>4€</b></p>
            </div>
          </div>
          <hr/>
          <p class="is-size-8 has-text-weight-normal">
            Pain au choix : Pita, Pita complet ou Pain libanais
          </p>
        </div>
      </div>
    </section>
    <section class="section has-text-centered" id="contact">
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
  </div>
</template>
<script>
import config from '../config'
import Logo from '~/components/Logo.vue'
import { Carousel, Slide } from 'vue-carousel'
import $ from 'jquery'

export default {

  data: () => ({
    google_api_key: config.google_api_key
  }),
  mounted () {
    setTimeout(() => {
      $('.carousel-container').click()
    }, 100)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        let element = document.querySelector(this.getAttribute('href'))
        if (element) {
          let count = element.offsetTop - window.scrollY - 60
          console.log(count, element.offsetTop, window.scrollTop)
          window.scrollBy({top: count, left: 0, behavior: 'smooth'})
        }
      })
    })
  },
  components: {
    Logo,
    Carousel,
    Slide
  },
  layout: 'spa',
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

.has-background-tag {
  position: relative;
  background: #333;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(~assets/tag_babke.jpg);
    background-size: 200%;
    background-position: center;
    background-attachment: fixed;
    filter: blur(5px) brightness(50%);
  }
}
.index-page-section {
  background-color: $babke-primary;
  .title {
    margin-top: 40px;
  }
}
.home-page .logo {
  opacity: 0;
}
section.small-section {
  max-width: 600px;
  margin: auto;
}
.slider-img {
  margin-top: 50px;
}
.gameboy-image {
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
