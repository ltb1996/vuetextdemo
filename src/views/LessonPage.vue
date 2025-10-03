<template>
  <div class="lesson-page">
    <div class="lesson-container">
      <!-- 导航栏 -->
      <nav class="lesson-nav">
        <button @click="goBack" class="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          返回首页
        </button>

        <div class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">首页</router-link>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ pageTitle }}</span>
        </div>
      </nav>

      <!-- 动态加载的教学组件 -->
      <div class="lesson-content">
        <component :is="currentComponent" v-if="currentComponent" />
      </div>

      <!-- 底部导航 -->
      <div class="lesson-footer">
        <button
          v-if="prevLesson"
          @click="navigateToLesson(prevLesson.path)"
          class="nav-btn prev-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <div>
            <span class="nav-label">上一课</span>
            <span class="nav-title">{{ prevLesson.title }}</span>
          </div>
        </button>

        <div v-else></div>

        <button
          v-if="nextLesson"
          @click="navigateToLesson(nextLesson.path)"
          class="nav-btn next-btn"
        >
          <div>
            <span class="nav-label">下一课</span>
            <span class="nav-title">{{ nextLesson.title }}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import InterpolationDemo from '../components/lesson/InterpolationDemo.vue';
import ReactiveDemo from '../components/lesson/ReactiveDemo.vue';
import EventDemo from '../components/lesson/EventDemo.vue';
import ConditionalDemo from '../components/lesson/ConditionalDemo.vue';
import ListDemo from '../components/lesson/ListDemo.vue';

const route = useRoute();
const router = useRouter();

const componentMap = {
  InterpolationDemo,
  ReactiveDemo,
  EventDemo,
  ConditionalDemo,
  ListDemo,
};

const lessons = [
  { path: '/lesson/interpolation', title: '文本插值', component: 'InterpolationDemo' },
  { path: '/lesson/reactive', title: '响应式基础', component: 'ReactiveDemo' },
  { path: '/lesson/event', title: '事件处理', component: 'EventDemo' },
  { path: '/lesson/conditional', title: '条件渲染', component: 'ConditionalDemo' },
  { path: '/lesson/list', title: '列表渲染', component: 'ListDemo' },
];

const pageTitle = computed(() => route.meta.title || '教学页面');
const currentComponent = computed(() => {
  const componentName = route.meta.component;
  return componentMap[componentName] || null;
});

const currentIndex = computed(() => {
  return lessons.findIndex((lesson) => lesson.path === route.path);
});

const prevLesson = computed(() => {
  return currentIndex.value > 0 ? lessons[currentIndex.value - 1] : null;
});

const nextLesson = computed(() => {
  return currentIndex.value < lessons.length - 1
    ? lessons[currentIndex.value + 1]
    : null;
});

const goBack = () => {
  router.push('/');
};

const navigateToLesson = (path) => {
  router.push(path);
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.lesson-page {
  min-height: 100vh;
  padding: 2rem;
}

.lesson-container {
  max-width: 1280px;
  margin: 0 auto;
}

.lesson-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #42b883;
}

.back-button svg {
  transition: transform 0.3s;
}

.back-button:hover svg {
  transform: translateX(-4px);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #42b883;
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.3);
}

.breadcrumb-current {
  color: white;
  font-weight: 600;
}

.lesson-content {
  margin-bottom: 3rem;
}

.lesson-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 200px;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #42b883;
  transform: translateY(-2px);
}

.nav-btn > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.next-btn > div {
  align-items: flex-end;
}

.nav-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-title {
  font-size: 0.875rem;
  font-weight: 600;
}

.prev-btn svg {
  transition: transform 0.3s;
}

.prev-btn:hover svg {
  transform: translateX(-4px);
}

.next-btn svg {
  transition: transform 0.3s;
}

.next-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .lesson-page {
    padding: 1rem;
  }

  .lesson-nav {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .lesson-footer {
    flex-direction: column;
  }

  .nav-btn {
    width: 100%;
  }
}
</style>
