<template>
  <div id="app">
    <Naviation />
    <HelloWorld msg="Test Project with Tailwind" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Naviation from './components/Navigation.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    Naviation
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>

