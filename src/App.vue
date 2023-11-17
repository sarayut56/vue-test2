<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <nav class="nav justify-content-center">
      <router-link to="/">Login</router-link> |
      <router-link to="/about">search</router-link> |
      <router-link to="/com">Com</router-link> |
      <router-link to="/go">Go</router-link> |
      <!-- <router-link to="/out">Out</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>

import { encode, decode } from "js-base64";
export default {
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  },
  methods: {
    hashPwd(q) {
      let encoded = encode(q + process.env.VUE_APP_API_SALT);
      return encoded;
    },
    dePwd(q) {
      let decoded = decode(q.slice(0, -7));
      return decoded.slice(0, -4);
    },
    hashToken(q) {
      let pop = q.split(".");
      let lastToken = this.hashPwd(pop.pop());
      let middleToken = this.hashPwd(pop.pop());
      let firstToken = this.hashPwd(pop.pop());
      return ['ey' + firstToken, 'ey' + middleToken, lastToken].join('.');
    },
    deToken(q) {
      let pop = q.split(".");
      let lastToken = atob(pop.pop());
      let middleToken = atob(pop.pop().slice(2));
      let firstToken = atob(pop.pop().slice(2));
      return [firstToken.slice(0, -10), middleToken.slice(0, -10), lastToken.slice(0, -10)].join('.');
    },
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
