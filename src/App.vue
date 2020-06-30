<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" style="background-color: #78C0B6">
        <b-navbar-brand href="#"><img src="./assets/logo.png" width="30" height="30" alt="logo"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
                <router-link to="/" class="nav-link">Overview</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/rationale" class="nav-link">Rationale</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/roles" class="nav-link">Roles</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/stages" class="nav-link">Stages</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/practices" class="nav-link">Practices</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/artifacts" class="nav-link">Artifacts</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view :key="$route.fullPath" style="margin-top:40px"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&display=swap');

body {
  font-family: 'Roboto Slab', serif !important; 
  font-weight: 300;
}

h1{
  font-weight: 500;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
