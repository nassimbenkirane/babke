<template>
<nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="~/assets/babke-logo.png" height="52" class="logo-img">
    </a>

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
    <a href="#home" class="navbar-item has-text-weight-bold">
      Accueil
    </a>
    <a href="#informations" class="navbar-item has-text-weight-bold">
      Le concept
    </a>
    <a href="#le-local" class="navbar-item has-text-weight-bold">
      Le local
    </a>
    <a href="#le-menu" class="navbar-item has-text-weight-bold">
      Le Menu
    </a>
    <a href="#contact" class="navbar-item has-text-weight-bold">
      Contact
    </a>
  </div>

  <div class="navbar-end">
    <!-- <div class="navbar-item">
      <div class="buttons">
        <a class="button is-primary">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light">
          Log in
        </a>
      </div>
    </div> -->
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
.logo-img {
  height: 52px;
  max-height: 52px !important;
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
