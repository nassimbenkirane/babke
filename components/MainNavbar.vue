<template>
  <nav class="navbar is-cream" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <button class="button navbar-burger is-transparent is-primary"
        @click="toggleNavbar"
        v-bind:class="{ 'is-active': navbarActive }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu has-text-centered"
      v-bind:class="{ 'is-active': navbarActive }">
      <router-link to="/" class="navbar-item has-text-weight-bold">
        Accueil
      </router-link>
      <router-link to="/informations" class="navbar-item has-text-weight-bold">
        Le concept
      </router-link>
      <router-link to="/le-local" class="navbar-item has-text-weight-bold">
        Le local
      </router-link>
      <router-link to="/contact" class="navbar-item has-text-weight-bold">
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navbarActive: false
  }),
  methods: {
    toggleNavbar () {
      this.navbarActive = !this.navbarActive
      console.log(this.navbarActive)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  justify-content: center;
  margin: auto;
}
.navbar-item {
  font-size: 12px;
  text-transform: uppercase;
}
@media (max-width: 1024px) {
  .navbar-brand {
    width: 100vw;
    justify-content: flex-end;
  }
}
.navbar-menu.is-active {
  width: 100vw;
}
</style>
