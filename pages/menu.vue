<template>
  <section class=" section has-text-centered">
    <h1 class="is-size-3 has-text-weight-bold">
      Le menu
    </h1>
    <p>Pour les étudiants : -1€ sur toutes les formules  !</p>
    <div class="container is-fluid is-size-6">
      <div class="white-content has-text-left">
        <h4 class="is-size-5 title">Le Parisien</h4>
        <div class="columns">
          <div class="column is-three-quarters has-text-left">
            <p class="is-size-8 has-text-weight-normal">
              Viande à la broche - Salade Iceberg - Tomates - Oignons rouges
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
        <h4 class="is-size-5 title">Le Berlinois</h4>
        <div class="columns">
          <div class="column is-three-quarters has-text-left">
            <p class="is-size-8 has-text-weight-normal">
              Viande à la broche - Concombres rapés - Chou rouge - Chou blanc - Oignons rouges
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
        <h4 class="is-size-5 title">Le Kebab Deluxe</h4>
        <div class="columns">
          <div class="column is-three-quarters has-text-left">
            <p class="is-size-8 has-text-weight-normal">
              Viande à la broche - Salade Iceberg - Tomates - Oignons rouges - Poivrons rouge/jaune/vert - Champignons - Oignons confits
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
        <h4 class="is-size-5 title">Le Vegétarien</h4>
        <div class="columns">
          <div class="column is-three-quarters has-text-left">
            <p class="is-size-8 has-text-weight-normal">
              Steak d'aubergine mariné à l'huile d'olive - Sauce moutarde et miel - Salade iceberg - Tomates - Poivrons rouge/jaune/vert - Champignons - Oignons rouges
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
        <h4 class="is-size-5 title">En supplément</h4>
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
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  transition: 'page',
  head: {
    title: 'BABKÉ Kebab Gourmet | Le menu',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Le local'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.babke.fr/menu' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.section.small-section {
  max-width: 600px;
  margin: auto;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 325px;
}
.white-content {
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  padding: 20px;
  max-width: 550px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style>
