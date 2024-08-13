<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Test /> -->
  </div>
</template>

<script>
import HelloWorld from './views/HelloWorld.vue'
// import Test from './components/test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
    // Test
  }
}
</script>

<style>
</style>
