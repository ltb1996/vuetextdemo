<!--
  Vue3 金融教学系统 - 主应用容器
  包含左侧导航栏和右侧内容区域
-->
<script setup>
import LessonNavigation from "./components/common/LessonNavigation.vue";
</script>

<template>
  <div class="app-container">
    <!-- 左侧课程导航 -->
    <LessonNavigation />

    <!-- 右侧内容区域 -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  background: #f5f7fa;
}

/* 应用容器 */
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* 主内容区域 */
.main-content {
  flex: 1;
  overflow-y: auto;
  background: #ffffff;
}

/* 滚动条样式 */
.main-content::-webkit-scrollbar {
  width: 8px;
}

.main-content::-webkit-scrollbar-track {
  background: #f1f3f5;
}

.main-content::-webkit-scrollbar-thumb {
  background: #adb5bd;
  border-radius: 4px;
}

.main-content::-webkit-scrollbar-thumb:hover {
  background: #868e96;
}

/* 代码块样式 */
code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 14px;
  color: #e83e8c;
}

/* 演示区域通用样式 */
.demo-area {
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  margin: 20px 0;
  border: 2px dashed #dee2e6;
}

/* 按钮通用样式 */
button {
  font-family: "Microsoft YaHei", sans-serif;
}
</style>
