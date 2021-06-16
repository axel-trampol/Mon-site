<template>

  <div id="app">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    
    
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade" mode="out-in">
      
      <router-view></router-view>
    </transition>
  </div>
</template>

<script src="path/to/vue-awesome/dist/vue-awesome.js"></script>
<script>

export default {
  name: 'App',
    
}


 import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

console.log("Site réalisé avec amour par Axel Trampol")

</script>

<style>

#app {
  height : 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

h1, h2 {
  margin: 0;
}

.fade-enter, fade-leave-to {
  opacity: 0.5;
  transform: translateX(2em);
}

.fade-enter-active, fade-leave-active {
  transition: all .3s ease;
}
</style>
