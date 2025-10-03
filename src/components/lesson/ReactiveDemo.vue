<template>
  <div class="demo-card">
    <div class="demo-header">
      <h3 class="demo-title">
        <span class="icon">⚡</span>
        2. 响应式基础 (Reactive Data)
      </h3>
      <span class="badge">基础</span>
    </div>

    <div class="demo-description">
      使用 <code>ref()</code> 创建响应式数据，当数据变化时，视图会自动更新。
    </div>

    <div class="demo-content">
      <div class="preview-box">
        <div class="user-card">
          <div class="avatar">{{ user.name.charAt(0) }}</div>
          <div class="user-info">
            <h4>{{ user.name }}</h4>
            <p>{{ user.age }} 岁</p>
            <p>{{ user.email }}</p>
          </div>
        </div>

        <div class="stats">
          <div class="stat-item">
            <span class="stat-label">点击次数</span>
            <span class="stat-value">{{ clickCount }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">状态</span>
            <span class="stat-value">{{ isActive ? '激活' : '未激活' }}</span>
          </div>
        </div>
      </div>

      <div class="controls">
        <button @click="clickCount++" class="btn-primary">点击我</button>
        <button @click="isActive = !isActive" class="btn-secondary">
          切换状态
        </button>
        <button @click="updateUser" class="btn-reset">更新用户</button>
      </div>
    </div>

    <div class="code-block">
      <pre><code>&lt;script setup&gt;
import { ref, reactive } from 'vue';

// 使用 ref 创建基本类型的响应式数据
const clickCount = ref(0);
const isActive = ref(true);

// 使用 reactive 创建对象的响应式数据
const user = reactive({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
});

// 修改响应式数据
clickCount.value++;  // ref 需要 .value
user.name = '李四';   // reactive 直接修改
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const clickCount = ref(0);
const isActive = ref(true);

const user = reactive({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com',
});

const updateUser = () => {
  const names = ['李四', '王五', '赵六', '孙七'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  user.name = randomName;
  user.age = Math.floor(Math.random() * 30) + 20;
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
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
  background: rgba(245, 87, 108, 0.2);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #fda4af;
}

.preview-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.user-info h4 {
  margin: 0 0 0.25rem 0;
  color: #fff;
  font-size: 1.25rem;
}

.user-info p {
  margin: 0.25rem 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
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
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(240, 147, 251, 0.4);
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
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.btn-reset:hover {
  background: rgba(59, 130, 246, 0.3);
}

.code-block {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}
</style>
