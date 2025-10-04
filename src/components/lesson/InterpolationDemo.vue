<template>
  <div class="demo-card">
    <div class="demo-header">
      <h3 class="demo-title">
        <span class="icon">📝</span>
        1. 文本插值 (Text Interpolation)
      </h3>
      <span class="badge">基础</span>
    </div>

    <div class="demo-description">
      使用双大括号 <code>{{ }}</code> 将数据插入到 HTML 中，Vue 会自动更新视图。
    </div>

    <div class="demo-content">
      <div class="preview-box">
        <div class="result">
          <p>{{ message }}</p>
          <p>当前计数: {{ count }}</p>
          <p>双倍计数: {{ count * 2 }}</p>
          <p>{{ count > 5 ? '计数大于5' : '计数小于等于5' }}</p>
        </div>
      </div>

      <div class="controls">
        <button @click="count++" class="btn-primary">增加</button>
        <button @click="count--" class="btn-secondary">减少</button>
        <button @click="resetCount" class="btn-reset">重置</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue 3! 这是文本插值示例');
const count = ref(0);

const resetCount = () => {
  count.value = 0;
};
</script>

<style scoped>
.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.demo-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}

.icon {
  font-size: 1.75rem;
}

.badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.demo-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.demo-description code {
  background: rgba(139, 92, 246, 0.2);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #a78bfa;
}

.demo-content {
  margin-bottom: 1.5rem;
}

.preview-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.result p {
  color: #fff;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.controls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary,
.btn-reset {
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

.btn-reset {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.btn-reset:hover {
  background: rgba(239, 68, 68, 0.3);
}
</style>
