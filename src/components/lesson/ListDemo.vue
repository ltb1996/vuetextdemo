<template>
  <div class="demo-card">
    <div class="demo-header">
      <h3 class="demo-title">
        <span class="icon">📋</span>
        5. 列表渲染 (List Rendering)
      </h3>
      <span class="badge">基础</span>
    </div>

    <div class="demo-description">
      使用 <code>v-for</code> 指令基于数组或对象渲染列表，配合
      <code>:key</code> 提升性能。
    </div>

    <div class="demo-content">
      <div class="preview-box">
        <div class="todo-container">
          <div class="input-group">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新任务..." class="text-input" />
            <button @click="addTodo" class="btn-add">添加</button>
          </div>

          <div class="todo-list">
            <div v-for="todo in todos" :key="todo.id" class="todo-item" :class="{ completed: todo.completed }">
              <input type="checkbox" v-model="todo.completed" class="checkbox" />
              <span class="todo-text">{{ todo.text }}</span>
              <button @click="removeTodo(todo.id)" class="btn-remove">
                删除
              </button>
            </div>

            <div v-if="todos.length === 0" class="empty-state">
              暂无任务，添加一个试试！
            </div>
          </div>

          <div class="stats-bar">
            <span>总共: {{ todos.length }}</span>
            <span>已完成: {{ completedCount }}</span>
            <span>未完成: {{ todos.length - completedCount }}</span>
          </div>
        </div>
      </div>

      <div class="controls">
        <button @click="clearCompleted" class="btn-clear">清除已完成</button>
        <button @click="clearAll" class="btn-reset">清除全部</button>
      </div>
    </div>

    <div class="code-block">
      <pre><code>&lt;template&gt;
  &lt;!-- 遍历数组 --&gt;
  &lt;div v-for="item in items" :key="item.id"&gt;
    &#123;&#123; item.text &#125;&#125;
  &lt;/div&gt;

  &lt;!-- 获取索引 --&gt;
  &lt;div v-for="(item, index) in items" :key="item.id"&gt;
    &#123;&#123; index &#125;&#125;: &#123;&#123; item.text &#125;&#125;
  &lt;/div&gt;

  &lt;!-- 遍历对象 --&gt;
  &lt;div v-for="(value, key) in object" :key="key"&gt;
    &#123;&#123; key &#125;&#125;: &#123;&#123; value &#125;&#125;
  &lt;/div&gt;

  &lt;!-- 遍历数字 --&gt;
  &lt;span v-for="n in 10" :key="n"&gt;&#123;&#123; n &#125;&#125;&lt;/span&gt;
&lt;/template&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const newTodo = ref('');
const todos = ref([
  { id: 1, text: '学习 Vue3 基础', completed: true },
  { id: 2, text: '完成练习项目', completed: false },
  { id: 3, text: '阅读官方文档', completed: false },
]);

let nextId = 4;

const completedCount = computed(() => {
  return todos.value.filter((todo) => todo.completed).length;
});

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: nextId++,
      text: newTodo.value,
      completed: false,
    });
    newTodo.value = '';
  }
};

const removeTodo = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index > -1) {
    todos.value.splice(index, 1);
  }
};

const clearCompleted = () => {
  todos.value = todos.value.filter((todo) => !todo.completed);
};

const clearAll = () => {
  todos.value = [];
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
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
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
  background: rgba(168, 237, 234, 0.2);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #99f6e4;
}

.preview-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.todo-container {
  max-width: 600px;
  margin: 0 auto;
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
  border-color: #a8edea;
}

.btn-add {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 237, 234, 0.4);
}

.todo-list {
  margin-bottom: 1rem;
  max-height: 300px;
  overflow-y: auto;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
}

.todo-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.todo-item.completed {
  opacity: 0.6;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  color: white;
  font-size: 0.875rem;
}

.btn-remove {
  padding: 0.375rem 0.75rem;
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-remove:hover {
  background: rgba(239, 68, 68, 0.3);
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.stats-bar span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.controls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-clear,
.btn-reset {
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}

.btn-clear {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-clear:hover {
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
