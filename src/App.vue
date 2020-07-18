<template>
  <div id="app">
    <Navegacion />
    <HeroSection />
    <router-view />
  </div>
</template>

<script>
import Navegacion from "./components/Global/Navegacion";
import HeroSection from "./components/Global/HeroSection";


export default {
  data() {
    return {};
  },
  components: {
    Navegacion,
    HeroSection,
 
  },
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
