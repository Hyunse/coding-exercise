<template>
  <div id="app" class="flex flex-wrap flex-col content-center">
    <HelloWorld msg="Test Project with Tailwind" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>

