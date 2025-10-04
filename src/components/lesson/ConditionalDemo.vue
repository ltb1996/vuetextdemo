<template>
  <div class="demo-card">
    <div class="demo-header">
      <h3 class="demo-title">
        <span class="icon">🔀</span>
        4. 条件渲染 (Conditional Rendering)
      </h3>
      <span class="badge">基础</span>
    </div>

    <div class="demo-description">
      使用 <code>v-if</code>, <code>v-else-if</code>, <code>v-else</code> 和
      <code>v-show</code> 来条件性地渲染内容。
    </div>

    <div class="demo-content">
      <div class="preview-box">
        <div class="status-display">
          <div v-if="status === 'success'" class="status-card success">
            <span class="status-icon">✓</span>
            <div>
              <h4>成功</h4>
              <p>操作已成功完成</p>
            </div>
          </div>

          <div v-else-if="status === 'error'" class="status-card error">
            <span class="status-icon">✗</span>
            <div>
              <h4>错误</h4>
              <p>操作失败，请重试</p>
            </div>
          </div>

          <div v-else-if="status === 'warning'" class="status-card warning">
            <span class="status-icon">⚠</span>
            <div>
              <h4>警告</h4>
              <p>请注意检查</p>
            </div>
          </div>

          <div v-else class="status-card info">
            <span class="status-icon">ℹ</span>
            <div>
              <h4>信息</h4>
              <p>这是一条普通信息</p>
            </div>
          </div>
        </div>

        <div class="toggle-demo">
          <p v-show="isVisible" class="toggle-text">
            这段文字使用 v-show 控制 (CSS display 属性)
          </p>
          <p v-if="isVisible" class="toggle-text">
            这段文字使用 v-if 控制 (DOM 添加/移除)
          </p>
        </div>
      </div>

      <div class="controls">
        <button @click="status = 'success'" class="btn-success">成功</button>
        <button @click="status = 'error'" class="btn-error">错误</button>
        <button @click="status = 'warning'" class="btn-warning">警告</button>
        <button @click="status = 'info'" class="btn-info">信息</button>
        <button @click="isVisible = !isVisible" class="btn-toggle">
          {{ isVisible ? '隐藏' : '显示' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const status = ref('success');
const isVisible = ref(true);
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
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
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
  background: rgba(254, 225, 64, 0.2);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #fde047;
}

.preview-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.status-display {
  margin-bottom: 1.5rem;
}

.status-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.status-card.success {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-card.error {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.status-card.warning {
  background: rgba(251, 146, 60, 0.2);
  border: 1px solid rgba(251, 146, 60, 0.3);
}

.status-card.info {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.status-icon {
  font-size: 2rem;
  min-width: 2.5rem;
  text-align: center;
}

.status-card h4 {
  margin: 0 0 0.25rem 0;
  color: white;
  font-size: 1.125rem;
}

.status-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.toggle-demo {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.toggle-text {
  margin: 0.5rem 0;
  color: white;
  padding: 0.5rem;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 4px;
}

.controls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-success,
.btn-error,
.btn-warning,
.btn-info,
.btn-toggle {
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}

.btn-success {
  background: rgba(34, 197, 94, 0.3);
  border: 1px solid rgba(34, 197, 94, 0.5);
}

.btn-success:hover {
  background: rgba(34, 197, 94, 0.4);
}

.btn-error {
  background: rgba(239, 68, 68, 0.3);
  border: 1px solid rgba(239, 68, 68, 0.5);
}

.btn-error:hover {
  background: rgba(239, 68, 68, 0.4);
}

.btn-warning {
  background: rgba(251, 146, 60, 0.3);
  border: 1px solid rgba(251, 146, 60, 0.5);
}

.btn-warning:hover {
  background: rgba(251, 146, 60, 0.4);
}

.btn-info {
  background: rgba(59, 130, 246, 0.3);
  border: 1px solid rgba(59, 130, 246, 0.5);
}

.btn-info:hover {
  background: rgba(59, 130, 246, 0.4);
}

.btn-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>
