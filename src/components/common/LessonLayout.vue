<!--
  课程布局组件
  提供统一的课程内容展示布局，包含标题、知识点、代码区域等
-->
<script setup>
defineProps({
  // 课程标题
  title: {
    type: String,
    required: true,
  },
  // 课程描述
  description: {
    type: String,
    default: "",
  },
  // 知识点列表
  keyPoints: {
    type: Array,
    default: () => [],
  },
  // 难度等级
  difficulty: {
    type: String,
    default: "⭐",
  },
});
</script>

<template>
  <div class="lesson-layout">
    <!-- 课程头部 -->
    <div class="lesson-header">
      <h1 class="lesson-title">{{ title }}</h1>
      <div class="lesson-meta">
        <span class="difficulty">难度: {{ difficulty }}</span>
      </div>
      <p v-if="description" class="lesson-description">{{ description }}</p>
    </div>

    <!-- 知识点卡片 -->
    <div v-if="keyPoints.length > 0" class="key-points">
      <h3 class="section-title">📌 本课知识点</h3>
      <ul class="points-list">
        <li v-for="(point, index) in keyPoints" :key="index">
          {{ point }}
        </li>
      </ul>
    </div>

    <!-- 课程内容区域（插槽） -->
    <div class="lesson-content">
      <slot></slot>
    </div>

    <!-- 练习任务区域（可选插槽） -->
    <div v-if="$slots.practice" class="practice-section">
      <h3 class="section-title">✍️ 动手练习</h3>
      <div class="practice-content">
        <slot name="practice"></slot>
      </div>
    </div>

    <!-- 提示区域（可选插槽） -->
    <div v-if="$slots.tips" class="tips-section">
      <h3 class="section-title">💡 小提示</h3>
      <div class="tips-content">
        <slot name="tips"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background: white;
}

/* 课程头部 */
.lesson-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid #667eea;
}

.lesson-title {
  margin: 0 0 15px 0;
  font-size: 32px;
  color: #2c3e50;
  font-weight: bold;
}

.lesson-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.difficulty {
  padding: 6px 12px;
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}

.lesson-description {
  font-size: 16px;
  color: #6c757d;
  line-height: 1.6;
  margin: 15px 0 0 0;
}

/* 区块标题 */
.section-title {
  font-size: 20px;
  color: #495057;
  margin: 0 0 15px 0;
  padding-left: 10px;
  border-left: 4px solid #667eea;
}

/* 知识点卡片 */
.key-points {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.points-list {
  margin: 0;
  padding-left: 25px;
}

.points-list li {
  font-size: 15px;
  color: #37474f;
  line-height: 2;
  margin-bottom: 8px;
}

.points-list li::marker {
  color: #667eea;
  font-weight: bold;
}

/* 课程内容 */
.lesson-content {
  margin-bottom: 30px;
}

/* 练习区域 */
.practice-section {
  background: #fff3cd;
  padding: 20px;
  border-radius: 12px;
  border-left: 5px solid #ffc107;
  margin-bottom: 30px;
}

.practice-content {
  padding: 15px;
  background: white;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.8;
}

/* 提示区域 */
.tips-section {
  background: #d4edda;
  padding: 20px;
  border-radius: 12px;
  border-left: 5px solid #28a745;
}

.tips-content {
  padding: 15px;
  background: white;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.8;
  color: #155724;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lesson-layout {
    padding: 20px 15px;
  }

  .lesson-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 18px;
  }
}
</style>
