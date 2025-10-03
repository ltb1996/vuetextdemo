<template>
  <div class="home-container">
    <header class="header">
      <div class="nav-container">
        <h1 class="logo">Vue3 学习指南</h1>
        <nav class="nav">
          <a href="#lessons" class="nav-link">基础教程</a>
          <a href="#features" class="nav-link">特性介绍</a>
          <a href="https://cn.vuejs.org" target="_blank" class="nav-link">官方文档</a>
          <button @click="scrollToLessons" class="btn-primary">
            开始学习
          </button>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-content">
        <div class="badge-container">
          <span class="version-badge">Vue 3.5</span>
          <span class="status-badge">
            <span class="pulse"></span>
            正在学习
          </span>
        </div>

        <h1 class="hero-title">学习 Vue 3，从这里开始。</h1>

        <p class="hero-description">
          渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富。
          <br />通过互动示例掌握 Vue3 核心概念，每个知识点都配有完整的代码和说明。
        </p>

        <div class="cta-buttons">
          <button @click="scrollToLessons" class="btn-start">
            查看课程
          </button>
          <a href="https://cn.vuejs.org/guide/introduction.html" target="_blank" class="btn-browse">
            阅读文档
          </a>
        </div>
      </div>
    </section>

    <section id="features" class="features-section">
      <div class="features-content">
        <h2 class="section-title">为什么选择 Vue 3？</h2>
        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon">⚡</span>
            <h3>性能出色</h3>
            <p>虚拟 DOM + 编译时优化，更快的渲染速度</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🔧</span>
            <h3>灵活组合</h3>
            <p>Composition API 提供更强大的逻辑复用能力</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">📦</span>
            <h3>生态完善</h3>
            <p>丰富的工具和库支持，活跃的社区</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🎨</span>
            <h3>易于学习</h3>
            <p>渐进式框架，学习曲线平缓</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🚀</span>
            <h3>轻量高效</h3>
            <p>核心库体积小，按需加载</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">📱</span>
            <h3>响应式系统</h3>
            <p>基于 Proxy 的响应式系统，更精确的追踪</p>
          </div>
        </div>
      </div>
    </section>

    <section id="lessons" class="lessons-section">
      <div class="lessons-content">
        <div class="section-header">
          <h2 class="section-title">基础教程</h2>
          <p class="section-description">
            点击卡片开始学习，每个知识点都包含互动示例和完整代码
          </p>
        </div>

        <div class="lessons-grid">
          <router-link v-for="(lesson, index) in lessons" :key="lesson.path" :to="lesson.path" class="lesson-card"
            :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="lesson-number">{{ index + 1 }}</div>
            <div class="lesson-icon">{{ lesson.icon }}</div>
            <h3 class="lesson-title">{{ lesson.title }}</h3>
            <p class="lesson-description">{{ lesson.description }}</p>
            <div class="lesson-footer">
              <span class="lesson-level" :class="lesson.levelClass">
                {{ lesson.level }}
              </span>
              <span class="lesson-duration">{{ lesson.duration }}</span>
            </div>
            <div class="lesson-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="next-steps">
      <div class="next-steps-content">
        <h2>继续深入学习</h2>
        <p>这只是 Vue3 的开始，还有更多高级概念等你探索</p>

        <div class="topics-grid">
          <div class="topic-card">
            <h3>🎨 组件化开发</h3>
            <p>学习如何创建可复用的组件</p>
          </div>
          <div class="topic-card">
            <h3>🔄 生命周期钩子</h3>
            <p>理解组件的生命周期</p>
          </div>
          <div class="topic-card">
            <h3>📡 组件通信</h3>
            <p>掌握 Props 和 Emit</p>
          </div>
          <div class="topic-card">
            <h3>🗂️ 状态管理</h3>
            <p>使用 Pinia 管理应用状态</p>
          </div>
        </div>

        <div class="cta-center">
          <a href="https://cn.vuejs.org/tutorial/" target="_blank" class="btn-large">
            前往官方教程
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>
        Made with ❤️ using Vue 3 |
        <a href="https://cn.vuejs.org" target="_blank" style="color: #42b883">Vue.js 官网</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const lessons = [
  {
    path: '/lesson/interpolation',
    icon: '📝',
    title: '文本插值',
    description: '使用双大括号 {{ }} 将数据插入到 HTML 中',
    level: '基础',
    levelClass: 'level-basic',
    duration: '5分钟',
  },
  {
    path: '/lesson/reactive',
    icon: '⚡',
    title: '响应式基础',
    description: '使用 ref() 和 reactive() 创建响应式数据',
    level: '基础',
    levelClass: 'level-basic',
    duration: '8分钟',
  },
  {
    path: '/lesson/event',
    icon: '🎯',
    title: '事件处理',
    description: '使用 @click 监听事件并执行方法',
    level: '基础',
    levelClass: 'level-basic',
    duration: '10分钟',
  },
  {
    path: '/lesson/conditional',
    icon: '🔀',
    title: '条件渲染',
    description: '使用 v-if、v-else-if、v-else 和 v-show',
    level: '基础',
    levelClass: 'level-basic',
    duration: '10分钟',
  },
  {
    path: '/lesson/list',
    icon: '📋',
    title: '列表渲染',
    description: '使用 v-for 遍历数组和对象',
    level: '基础',
    levelClass: 'level-basic',
    duration: '15分钟',
  },
];

const scrollToLessons = () => {
  document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.home-container {
  position: relative;
  z-index: 1;
  color: white;
}

.header {
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #42b883;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border: none;
  border-radius: 9999px;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.4);
}

.hero {
  padding: 6rem 2rem 4rem;
  text-align: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.badge-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.version-badge {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
}

.pulse {
  width: 8px;
  height: 8px;
  background: #42b883;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: fadeSlideIn 1s ease-out forwards;
}

.hero-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 42rem;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  animation: fadeSlideIn 1s ease-out 0.1s forwards;
  opacity: 0;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeSlideIn 1s ease-out 0.2s forwards;
  opacity: 0;
}

.btn-start {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-start:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(66, 184, 131, 0.4);
}

.btn-browse {
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
}

.btn-browse:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #42b883;
}

.features-section {
  padding: 4rem 2rem;
  background: rgba(66, 184, 131, 0.03);
  border-top: 1px solid rgba(66, 184, 131, 0.1);
  border-bottom: 1px solid rgba(66, 184, 131, 0.1);
}

.features-content {
  max-width: 1280px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 3rem 0;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  border-color: #42b883;
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  color: white;
}

.feature-card p {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.lessons-section {
  padding: 4rem 2rem;
}

.lessons-content {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.lesson-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-decoration: none;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  overflow: hidden;
  animation: fadeSlideIn 1s ease-out both;
}

.lesson-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

.lesson-card:hover::before {
  transform: scaleX(1);
}

.lesson-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-8px);
  border-color: #42b883;
  box-shadow: 0 12px 30px rgba(66, 184, 131, 0.2);
}

.lesson-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(66, 184, 131, 0.2);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 700;
  color: #42b883;
}

.lesson-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.lesson-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
}

.lesson-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.lesson-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.lesson-level {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.level-basic {
  background: rgba(66, 184, 131, 0.2);
  color: #42b883;
}

.lesson-duration {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.lesson-arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s;
}

.lesson-card:hover .lesson-arrow {
  opacity: 1;
  transform: translateX(0);
}

.lesson-arrow svg {
  color: #42b883;
}

.next-steps {
  padding: 4rem 2rem;
  background: rgba(66, 184, 131, 0.05);
  border-top: 1px solid rgba(66, 184, 131, 0.2);
  border-bottom: 1px solid rgba(66, 184, 131, 0.2);
}

.next-steps-content {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

.next-steps-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.next-steps-content>p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.topic-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s;
  text-align: left;
}

.topic-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  border-color: #42b883;
}

.topic-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  color: white;
}

.topic-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.cta-center {
  text-align: center;
}

.btn-large {
  display: inline-block;
  padding: 1.25rem 3rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(66, 184, 131, 0.4);
}

.footer {
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .hero {
    padding: 4rem 1rem 2rem;
  }

  .features-section,
  .lessons-section,
  .next-steps {
    padding: 2rem 1rem;
  }

  .lessons-grid {
    grid-template-columns: 1fr;
  }

  .features-grid,
  .topics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
