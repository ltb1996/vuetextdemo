<template>
  <div class="home-container">
    <header class="header">
      <div class="nav-container">
        <h1 class="logo">Vue3 学习指南</h1>
        <nav class="nav">
          <a href="#basics" class="nav-link">基础教程</a>
          <a href="#examples" class="nav-link">互动示例</a>
          <a href="https://cn.vuejs.org" target="_blank" class="nav-link"
            >官方文档</a
          >
          <button class="btn-primary">开始学习</button>
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
          渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富。从基础到进阶，通过互动示例掌握
          Vue3 核心概念。
        </p>

        <div class="cta-buttons">
          <button @click="scrollToExamples" class="btn-start">
            查看示例
          </button>
          <a
            href="https://cn.vuejs.org/guide/introduction.html"
            target="_blank"
            class="btn-browse"
          >
            阅读文档
          </a>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon">⚡</span>
            <h3>性能出色</h3>
            <p>虚拟 DOM + 编译时优化</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🔧</span>
            <h3>灵活组合</h3>
            <p>Composition API 更强大</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">📦</span>
            <h3>生态完善</h3>
            <p>丰富的工具和库支持</p>
          </div>
        </div>
      </div>
    </section>

    <section id="examples" class="lessons-section">
      <div class="section-header">
        <h2 class="section-title">互动教程</h2>
        <p class="section-description">
          通过实际操作学习 Vue3 核心概念，每个示例都包含完整的代码和说明
        </p>
      </div>

      <div class="lessons-container">
        <InterpolationDemo />
        <ReactiveDemo />
        <EventDemo />
        <ConditionalDemo />
        <ListDemo />
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
          <a
            href="https://cn.vuejs.org/tutorial/"
            target="_blank"
            class="btn-large"
          >
            前往官方教程
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>
        Made with ❤️ using Vue 3 |
        <a
          href="https://cn.vuejs.org"
          target="_blank"
          style="color: #42b883"
          >Vue.js 官网</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import InterpolationDemo from '../components/lesson/InterpolationDemo.vue';
import ReactiveDemo from '../components/lesson/ReactiveDemo.vue';
import EventDemo from '../components/lesson/EventDemo.vue';
import ConditionalDemo from '../components/lesson/ConditionalDemo.vue';
import ListDemo from '../components/lesson/ListDemo.vue';

const scrollToExamples = () => {
  document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' });
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
  max-width: 1024px;
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
  margin-bottom: 4rem;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  animation: fadeSlideIn 1s ease-out 0.3s forwards;
  opacity: 0;
}

.feature-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  border-color: #42b883;
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  color: white;
}

.feature-card p {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.lessons-section {
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.lessons-container {
  display: flex;
  flex-direction: column;
  gap: 0;
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

.next-steps-content > p {
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

  .lessons-section {
    padding: 2rem 1rem;
  }

  .features-grid,
  .topics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
