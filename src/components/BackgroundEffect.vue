<template>
  <div class="background-wrapper">
    <!-- UnicornStudio 动态背景 -->
    <div class="aura-background-component">
      <div
        data-us-project="BqS5vTHVEpn6NiF0g8iJ"
        class="unicorn-container"
      ></div>
    </div>

    <!-- CSS 渐变背景层 -->
    <div class="gradient-overlay">
      <div class="gradient-inner"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // 确保 UnicornStudio 已加载并初始化
  if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
    window.UnicornStudio.init();
    window.UnicornStudio.isInitialized = true;
  }
});
</script>

<style scoped>
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  pointer-events: none;
}

.aura-background-component {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1100px;
  z-index: -10;
}

.unicorn-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -10;
}

.gradient-overlay {
  position: fixed;
  inset: 0;
  z-index: -10;
}

.gradient-inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(88, 28, 135, 0.2) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
