<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to MnDra" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Login.vue";
import axios from 'axios';

export default {
  name: "LoginView",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(this.$axios)
    axios
      .get("")
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log("Can't get this api,", err);
      });
  },
};
</script>
