<!--
  课程视图 - 主页
  展示课程欢迎页面和学习指南
-->
<script setup>
import LessonLayout from "../components/common/LessonLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const startLearning = () => {
  router.push({ name: "lesson-01" });
};
</script>

<template>
  <LessonLayout
    title="🎓 欢迎来到 Vue3 金融教学系统"
    description="这是一个专为零基础学生设计的Vue3教学项目，通过真实的金融场景案例，带你从零开始掌握Vue3框架。"
    :key-points="[
      'Vue3 Composition API（组合式API）',
      '响应式数据系统（ref、reactive、computed、watch）',
      '模板语法与指令（插值、绑定、循环、条件）',
      '组件化开发与通信（Props、Emit、v-model）',
      '生命周期钩子与组合式函数',
      '真实金融场景应用',
    ]"
    difficulty="入门到进阶"
  >
    <!-- 主要内容 -->
    <div class="welcome-content">
      <div class="intro-section">
        <h2>💼 为什么选择金融场景？</h2>
        <p>
          金融应用涉及大量的数据展示、计算和交互，非常适合学习前端框架的核心特性：
        </p>
        <ul>
          <li>📊 <strong>数据展示</strong>：股票列表、账户余额、投资组合</li>
          <li>🧮 <strong>实时计算</strong>：收益率、汇率转换、理财收益</li>
          <li>🎯 <strong>交互操作</strong>：存取款、买卖交易、表单提交</li>
          <li>⚠️ <strong>状态管理</strong>：余额监控、价格预警、账户状态</li>
        </ul>
      </div>

      <div class="course-structure">
        <h2>📚 课程结构</h2>
        <div class="structure-cards">
          <div class="structure-card stage-1">
            <div class="card-icon">📚</div>
            <h3>阶段一：基础语法</h3>
            <p>从最简单的数据显示开始，学习插值表达式、属性绑定和事件处理</p>
            <div class="lessons-count">3个课时</div>
          </div>

          <div class="structure-card stage-2">
            <div class="card-icon">🔄</div>
            <h3>阶段二：响应式数据</h3>
            <p>掌握Vue3的响应式系统，学习ref、reactive、computed和watch</p>
            <div class="lessons-count">3个课时</div>
          </div>

          <div class="structure-card stage-3">
            <div class="card-icon">📝</div>
            <h3>阶段三：列表与表单</h3>
            <p>学习列表渲染、条件渲染和双向数据绑定</p>
            <div class="lessons-count">3个课时</div>
          </div>

          <div class="structure-card stage-4">
            <div class="card-icon">🔗</div>
            <h3>阶段四：组件通信</h3>
            <p>理解组件化开发，掌握父子组件通信的各种方式</p>
            <div class="lessons-count">3个课时</div>
          </div>

          <div class="structure-card stage-5">
            <div class="card-icon">🚀</div>
            <h3>阶段五：高级特性</h3>
            <p>学习生命周期和组合式函数，提升代码复用能力</p>
            <div class="lessons-count">2个课时</div>
          </div>

          <div class="structure-card projects">
            <div class="card-icon">🎯</div>
            <h3>实战项目</h3>
            <p>综合运用所学知识，完成三个完整的金融应用</p>
            <div class="lessons-count">3个项目</div>
          </div>
        </div>
      </div>

      <div class="start-section">
        <button class="start-button" @click="startLearning">
          🚀 开始学习第一课
        </button>
      </div>
    </div>

    <!-- 学习建议 -->
    <template #tips>
      <ul>
        <li>
          📖 <strong>循序渐进</strong>：按照课程顺序学习，每节课都有配套练习
        </li>
        <li>✍️ <strong>动手实践</strong>：务必自己敲代码，不要复制粘贴</li>
        <li>🤔 <strong>理解原理</strong>：不仅要知其然，更要知其所以然</li>
        <li>💬 <strong>及时提问</strong>：遇到问题及时向老师或同学请教</li>
        <li>🔄 <strong>反复练习</strong>：重要的知识点要多练习几遍</li>
      </ul>
    </template>
  </LessonLayout>
</template>

<style scoped>
.welcome-content {
  font-family: "Microsoft YaHei", Arial, sans-serif;
}

.intro-section {
  margin-bottom: 40px;
}

.intro-section h2 {
  color: #495057;
  font-size: 24px;
  margin-bottom: 15px;
}

.intro-section p {
  font-size: 16px;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 15px;
}

.intro-section ul {
  list-style: none;
  padding: 0;
}

.intro-section ul li {
  font-size: 15px;
  padding: 10px 15px;
  margin: 8px 0;
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  border-radius: 4px;
  line-height: 1.6;
}

.course-structure {
  margin-bottom: 40px;
}

.course-structure h2 {
  color: #495057;
  font-size: 24px;
  margin-bottom: 25px;
}

.structure-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.structure-card {
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: default;
}

.structure-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.structure-card h3 {
  font-size: 18px;
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.structure-card p {
  font-size: 14px;
  color: #6c757d;
  line-height: 1.6;
  margin: 0 0 15px 0;
}

.lessons-count {
  font-size: 13px;
  font-weight: bold;
  color: #667eea;
}

/* 不同阶段的颜色 */
.stage-1 {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

.stage-2 {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.stage-3 {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
}

.stage-4 {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
}

.stage-5 {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
}

.projects {
  background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
}

/* 开始按钮 */
.start-section {
  text-align: center;
  margin-top: 40px;
  padding: 30px 0;
}

.start-button {
  font-size: 18px;
  padding: 15px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.start-button:active {
  transform: translateY(0);
}

/* 响应式 */
@media (max-width: 768px) {
  .structure-cards {
    grid-template-columns: 1fr;
  }
}
</style>
