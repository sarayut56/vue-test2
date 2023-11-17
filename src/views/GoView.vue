<template>
    <div class="home">
     
      <HelloWorld msg="Welcome to MnDra"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/GoWorld.vue'
  
  export default {
    name: 'ComView',
    components: {
      HelloWorld
    }
  }
  </script>
  