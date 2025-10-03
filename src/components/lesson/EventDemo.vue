<template>
  <div class="demo-card">
    <div class="demo-header">
      <h3 class="demo-title">
        <span class="icon">🎯</span>
        3. 事件处理 (Event Handling)
      </h3>
      <span class="badge">基础</span>
    </div>

    <div class="demo-description">
      使用 <code>@click</code> 或 <code>v-on:click</code> 监听 DOM 事件，并执行对应的方法。
    </div>

    <div class="demo-content">
      <div class="preview-box">
        <div class="message-box">
          <p class="message">{{ displayMessage }}</p>
        </div>

        <div class="input-group">
          <input v-model="inputText" @keyup.enter="addMessage" placeholder="输入消息后按 Enter" class="text-input" />
          <button @click="addMessage" class="btn-send">发送</button>
        </div>

        <div class="message-list">
          <div v-for="(msg, index) in messages" :key="index" class="message-item" @click="selectMessage(msg)">
            <span class="message-time">{{ msg.time }}</span>
            <span class="message-text">{{ msg.text }}</span>
          </div>
        </div>
      </div>

      <div class="controls">
        <button @click="clearMessages" class="btn-reset">清空消息</button>
        <button @click.prevent="handlePrevent" class="btn-secondary">
          阻止默认行为
        </button>
      </div>
    </div>

    <div class="code-block">
      <pre><code>&lt;template&gt;
  &lt;!-- 基础事件监听 --&gt;
  &lt;button @click="handleClick"&gt;点击&lt;/button&gt;

  &lt;!-- 传递参数 --&gt;
  &lt;button @click="greet('Hello')"&gt;打招呼&lt;/button&gt;

  &lt;!-- 访问原生事件 --&gt;
  &lt;button @click="handleEvent($event)"&gt;事件对象&lt;/button&gt;

  &lt;!-- 事件修饰符 --&gt;
  &lt;button @click.prevent="submit"&gt;阻止默认&lt;/button&gt;
  &lt;input @keyup.enter="onEnter" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleClick = () => {
  console.log('按钮被点击了');
};
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const displayMessage = ref('点击按钮或输入消息试试！');
const inputText = ref('');
const messages = ref([
  { text: '欢迎来到 Vue3 学习', time: '10:00' },
  { text: '这是事件处理示例', time: '10:01' },
]);

const addMessage = () => {
  if (inputText.value.trim()) {
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    messages.value.push({
      text: inputText.value,
      time: time,
    });
    displayMessage.value = `已添加: ${inputText.value}`;
    inputText.value = '';
  }
};

const selectMessage = (msg) => {
  displayMessage.value = `你选择了: ${msg.text}`;
};

const clearMessages = () => {
  messages.value = [];
  displayMessage.value = '消息已清空';
};

const handlePrevent = () => {
  displayMessage.value = '使用了 .prevent 修饰符！';
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
  background: rgba(0, 242, 254, 0.2);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #67e8f9;
}

.preview-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.message-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.message {
  color: white;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.text-input {
  flex: 1;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.875rem;
}

.text-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.text-input:focus {
  outline: none;
  border-color: #4facfe;
}

.btn-send {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-send:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.4);
}

.message-list {
  max-height: 200px;
  overflow-y: auto;
}

.message-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.message-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.message-time {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  min-width: 45px;
}

.message-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
}

.controls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-reset,
.btn-secondary {
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-reset {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.btn-reset:hover {
  background: rgba(239, 68, 68, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
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
