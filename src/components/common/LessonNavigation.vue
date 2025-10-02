<!--
  课程导航组件
  显示所有课程和项目的目录结构，供学生选择学习
-->
<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// 课程数据结构
const lessons = ref([
  {
    stage: 1,
    title: "阶段一：Vue3基础语法",
    icon: "📚",
    lessons: [
      {
        id: "lesson-01",
        name: "第1课：插值表达式",
        topic: "银行账户余额",
        difficulty: "⭐",
      },
      {
        id: "lesson-02",
        name: "第2课：属性绑定",
        topic: "股票卡片",
        difficulty: "⭐",
      },
      {
        id: "lesson-03",
        name: "第3课：事件处理",
        topic: "交易按钮",
        difficulty: "⭐",
      },
    ],
  },
  {
    stage: 2,
    title: "阶段二：响应式数据",
    icon: "🔄",
    lessons: [
      {
        id: "lesson-04",
        name: "第4课：ref/reactive",
        topic: "账户存取款",
        difficulty: "⭐⭐",
      },
      {
        id: "lesson-05",
        name: "第5课：computed",
        topic: "投资收益计算",
        difficulty: "⭐⭐",
      },
      {
        id: "lesson-06",
        name: "第6课：watch",
        topic: "余额预警",
        difficulty: "⭐⭐",
      },
    ],
  },
  {
    stage: 3,
    title: "阶段三：列表与表单",
    icon: "📝",
    lessons: [
      {
        id: "lesson-07",
        name: "第7课：v-for",
        topic: "股票列表",
        difficulty: "⭐⭐",
      },
      {
        id: "lesson-08",
        name: "第8课：v-if/v-show",
        topic: "VIP身份",
        difficulty: "⭐⭐",
      },
      {
        id: "lesson-09",
        name: "第9课：v-model",
        topic: "存款表单",
        difficulty: "⭐⭐",
      },
    ],
  },
  {
    stage: 4,
    title: "阶段四：组件通信",
    icon: "🔗",
    lessons: [
      {
        id: "lesson-10",
        name: "第10课：Props",
        topic: "股票持仓",
        difficulty: "⭐⭐⭐",
      },
      {
        id: "lesson-11",
        name: "第11课：Emit",
        topic: "交易面板",
        difficulty: "⭐⭐⭐",
      },
      {
        id: "lesson-12",
        name: "第12课：v-model组件",
        topic: "金额输入",
        difficulty: "⭐⭐⭐",
      },
    ],
  },
  {
    stage: 5,
    title: "阶段五：高级特性",
    icon: "🚀",
    lessons: [
      {
        id: "lesson-13",
        name: "第13课：生命周期",
        topic: "汇率查询",
        difficulty: "⭐⭐⭐",
      },
      {
        id: "lesson-14",
        name: "第14课：组合式函数",
        topic: "金融工具",
        difficulty: "⭐⭐⭐⭐",
      },
    ],
  },
]);

// 实战项目
const projects = ref([
  {
    id: "project-calculator",
    name: "理财计算器",
    icon: "🧮",
    difficulty: "⭐⭐⭐",
  },
  {
    id: "project-ledger",
    name: "个人账本",
    icon: "📒",
    difficulty: "⭐⭐⭐⭐",
  },
  {
    id: "project-portfolio",
    name: "投资组合追踪",
    icon: "📊",
    difficulty: "⭐⭐⭐⭐⭐",
  },
]);

// 当前激活的课程
const activeLesson = computed(() => route.name);

// 导航到指定课程
const goToLesson = (lessonId) => {
  router.push({ name: lessonId });
};

// 展开/收起状态
const expandedStages = ref([1, 2, 3, 4, 5]);

const toggleStage = (stage) => {
  const index = expandedStages.value.indexOf(stage);
  if (index > -1) {
    expandedStages.value.splice(index, 1);
  } else {
    expandedStages.value.push(stage);
  }
};
</script>

<template>
  <div class="lesson-navigation">
    <div class="nav-header">
      <h2>📖 Vue3 金融教学</h2>
      <p class="subtitle">从零开始的前端框架之旅</p>
    </div>

    <!-- 课程列表 -->
    <div class="nav-content">
      <div v-for="stage in lessons" :key="stage.stage" class="stage-section">
        <div class="stage-title" @click="toggleStage(stage.stage)">
          <span class="stage-icon">{{ stage.icon }}</span>
          <span>{{ stage.title }}</span>
          <span class="expand-icon">
            {{ expandedStages.includes(stage.stage) ? "▼" : "▶" }}
          </span>
        </div>

        <transition name="slide">
          <div
            v-show="expandedStages.includes(stage.stage)"
            class="lessons-list"
          >
            <div
              v-for="lesson in stage.lessons"
              :key="lesson.id"
              class="lesson-item"
              :class="{ active: activeLesson === lesson.id }"
              @click="goToLesson(lesson.id)"
            >
              <div class="lesson-info">
                <div class="lesson-name">{{ lesson.name }}</div>
                <div class="lesson-topic">💰 {{ lesson.topic }}</div>
              </div>
              <div class="lesson-difficulty">{{ lesson.difficulty }}</div>
            </div>
          </div>
        </transition>
      </div>

      <!-- 实战项目 -->
      <div class="stage-section">
        <div class="stage-title project-title">
          <span class="stage-icon">🎯</span>
          <span>实战项目</span>
        </div>
        <div class="lessons-list">
          <div
            v-for="project in projects"
            :key="project.id"
            class="lesson-item project-item"
            :class="{ active: activeLesson === project.id }"
            @click="goToLesson(project.id)"
          >
            <div class="lesson-info">
              <span class="project-icon">{{ project.icon }}</span>
              <span>{{ project.name }}</span>
            </div>
            <div class="lesson-difficulty">{{ project.difficulty }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-navigation {
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  border-right: 2px solid #dee2e6;
  overflow-y: auto;
  font-family: "Microsoft YaHei", Arial, sans-serif;
}

.nav-header {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.nav-header h2 {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: bold;
}

.subtitle {
  margin: 0;
  font-size: 13px;
  opacity: 0.9;
}

.nav-content {
  padding: 15px 0;
}

.stage-section {
  margin-bottom: 10px;
}

.stage-title {
  padding: 12px 20px;
  font-size: 15px;
  font-weight: bold;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
  border-left: 4px solid transparent;
}

.stage-title:hover {
  background: #f1f3f5;
  border-left-color: #667eea;
}

.project-title {
  background: linear-gradient(90deg, #ffd89b 0%, #19547b 100%);
  color: white;
}

.stage-icon {
  font-size: 18px;
}

.expand-icon {
  margin-left: auto;
  font-size: 12px;
  opacity: 0.6;
}

.lessons-list {
  background: #f8f9fa;
}

.lesson-item {
  padding: 12px 20px 12px 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.lesson-item:hover {
  background: white;
  border-left-color: #667eea;
  transform: translateX(2px);
}

.lesson-item.active {
  background: white;
  border-left-color: #667eea;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
}

.lesson-info {
  flex: 1;
}

.lesson-name {
  font-size: 14px;
  font-weight: 500;
  color: #343a40;
  margin-bottom: 4px;
}

.lesson-topic {
  font-size: 12px;
  color: #6c757d;
}

.lesson-difficulty {
  font-size: 14px;
  color: #ffc107;
}

.project-item {
  background: #fff3cd;
  border-left-color: #ffc107;
}

.project-item:hover {
  background: #fff8e1;
  border-left-color: #ff9800;
}

.project-item.active {
  background: #fff8e1;
  border-left-color: #ff9800;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.2);
}

.project-icon {
  font-size: 16px;
  margin-right: 6px;
}

/* 动画效果 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 滚动条样式 */
.lesson-navigation::-webkit-scrollbar {
  width: 6px;
}

.lesson-navigation::-webkit-scrollbar-track {
  background: #f1f3f5;
}

.lesson-navigation::-webkit-scrollbar-thumb {
  background: #adb5bd;
  border-radius: 3px;
}

.lesson-navigation::-webkit-scrollbar-thumb:hover {
  background: #868e96;
}
</style>
