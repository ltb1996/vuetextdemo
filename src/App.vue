<template>
  <div id="app" class="app-container">
    <BackgroundEffect />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import BackgroundEffect from './components/BackgroundEffect.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #fff;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #000;
}

.content {
  position: relative;
  z-index: 10;
}
</style>
