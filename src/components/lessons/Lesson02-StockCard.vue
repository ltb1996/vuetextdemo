<!--
  第2课：属性绑定 - 股票卡片
  学习目标：掌握 v-bind 指令，学会动态绑定 HTML 属性

  什么是属性绑定？
  属性绑定用于动态设置 HTML 元素的属性值（如 class、style、src、href 等）
  语法：v-bind:属性名="表达式" 或简写为 :属性名="表达式"

  金融场景：根据股票涨跌动态设置颜色和样式
-->
<script setup>
import LessonLayout from '../common/LessonLayout.vue'

// ==================== 1. 股票数据 ====================
const stockName = '贵州茅台'
const stockCode = '600519'
const currentPrice = 1688.50
const changeAmount = 25.30     // 涨跌额
const changePercent = 1.52     // 涨跌幅 %

// 判断是涨还是跌
const isRising = changeAmount > 0

// 动态颜色：涨红跌绿
const priceColor = isRising ? '#ff4d4f' : '#52c41a'

// 动态 CSS 类名
const trendClass = isRising ? 'rising' : 'falling'

// 股票图标（使用emoji模拟）
const stockIcon = '📈'

// 股票Logo URL（模拟）
const logoUrl = 'https://via.placeholder.com/60x60/667eea/ffffff?text=' + stockCode
</script>

<template>
  <LessonLayout
    title="第2课：属性绑定 - 股票卡片"
    description="学习使用 v-bind 指令动态绑定 HTML 属性，实现根据股票涨跌显示不同颜色和样式的卡片。"
    :key-points="[
      'v-bind 指令用于动态绑定 HTML 属性',
      '简写形式：v-bind:class 可以简写为 :class',
      ':style 可以绑定内联样式对象',
      ':class 可以绑定类名，实现动态样式切换',
      '可以绑定任何 HTML 属性：src、href、title、disabled 等'
    ]"
    difficulty="⭐"
  >
    <!-- ==================== 2. 演示区域 ==================== -->
    <div class="demo-area">
      <h3>📊 股票行情</h3>

      <!-- 股票卡片 1：使用 :style 绑定内联样式 -->
      <div class="stock-card">
        <div class="stock-header">
          <!-- 绑定 title 属性（鼠标悬停时显示） -->
          <h4 :title="'股票代码：' + stockCode">
            {{ stockIcon }} {{ stockName }}
          </h4>
          <span class="stock-code">{{ stockCode }}</span>
        </div>

        <div class="stock-body">
          <!-- 使用 :style 绑定颜色 -->
          <div
            class="current-price"
            :style="{ color: priceColor, fontSize: '32px' }"
          >
            ¥{{ currentPrice }}
          </div>

          <!-- 绑定多个样式属性 -->
          <div
            class="change-info"
            :style="{
              color: priceColor,
              fontWeight: 'bold',
              backgroundColor: isRising ? '#fff1f0' : '#f6ffed',
              padding: '8px 12px',
              borderRadius: '6px'
            }"
          >
            {{ isRising ? '+' : '' }}{{ changeAmount }}
            ({{ isRising ? '+' : '' }}{{ changePercent }}%)
          </div>
        </div>
      </div>

      <!-- 股票卡片 2：使用 :class 绑定类名 -->
      <div class="stock-card">
        <div class="stock-header">
          <h4>{{ stockIcon }} {{ stockName }}</h4>
        </div>

        <div class="stock-body">
          <!-- 使用 :class 动态绑定类名 -->
          <div
            class="price-tag"
            :class="trendClass"
          >
            ¥{{ currentPrice }}
          </div>

          <!-- :class 可以绑定对象，key 是类名，value 是布尔值 -->
          <div
            class="trend-indicator"
            :class="{
              'trend-up': isRising,
              'trend-down': !isRising,
              'highlight': Math.abs(changePercent) > 5
            }"
          >
            <span>{{ isRising ? '↑' : '↓' }}</span>
            {{ changeAmount }}
          </div>
        </div>
      </div>

      <!-- 股票卡片 3：绑定 image src 属性 -->
      <div class="stock-card">
        <div class="stock-with-logo">
          <!-- 绑定 img 的 src 和 alt 属性 -->
          <img
            :src="logoUrl"
            :alt="stockName + ' Logo'"
            class="stock-logo"
          />
          <div class="stock-info">
            <h4>{{ stockName }}</h4>
            <p>代码：{{ stockCode }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 3. 代码讲解 ==================== -->
    <div class="code-explanation">
      <h3>💻 代码说明</h3>

      <div class="explain-section">
        <h4>1️⃣ 使用 :style 绑定内联样式</h4>
        <pre><code>&lt;div :style="{ color: priceColor, fontSize: '32px' }"&gt;
  ¥{{ currentPrice }}
&lt;/div&gt;</code></pre>
        <p class="explain-text">
          <code>:style</code> 接收一个对象，对象的属性名是CSS属性（驼峰命名），值可以是变量或字符串
        </p>
      </div>

      <div class="explain-section">
        <h4>2️⃣ 使用 :class 绑定类名（字符串形式）</h4>
        <pre><code>&lt;div class="price-tag" :class="trendClass"&gt;
  ¥{{ currentPrice }}
&lt;/div&gt;

// trendClass 的值为 'rising' 或 'falling'
// 最终渲染：class="price-tag rising" 或 class="price-tag falling"</code></pre>
      </div>

      <div class="explain-section">
        <h4>3️⃣ 使用 :class 绑定类名（对象形式）</h4>
        <pre><code>&lt;div
  :class="{
    'trend-up': isRising,      // isRising 为 true 时添加此类
    'trend-down': !isRising,   // !isRising 为 true 时添加此类
    'highlight': Math.abs(changePercent) > 5
  }"
&gt;&lt;/div&gt;</code></pre>
        <p class="explain-text">
          对象的 key 是类名，value 是布尔值，为 true 时才会添加该类名
        </p>
      </div>

      <div class="explain-section">
        <h4>4️⃣ 绑定其他属性（src、alt、title 等）</h4>
        <pre><code>&lt;img
  :src="logoUrl"
  :alt="stockName + ' Logo'"
  :title="'查看' + stockName + '详情'"
/&gt;</code></pre>
        <p class="explain-text">
          所有 HTML 属性都可以用 v-bind 绑定，实现动态控制
        </p>
      </div>
    </div>

    <!-- ==================== 4. 对比说明 ==================== -->
    <div class="comparison-box">
      <h3>🔄 插值表达式 vs 属性绑定</h3>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>特性</th>
            <th>插值表达式 {{ }}</th>
            <th>属性绑定 v-bind / :</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>使用位置</strong></td>
            <td>标签内容</td>
            <td>标签属性</td>
          </tr>
          <tr>
            <td><strong>示例</strong></td>
            <td>&lt;div&gt;{{ userName }}&lt;/div&gt;</td>
            <td>&lt;img :src="imageUrl" /&gt;</td>
          </tr>
          <tr>
            <td><strong>常见场景</strong></td>
            <td>显示文字、数字</td>
            <td>设置样式、图片、链接</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 5. 练习任务 ==================== -->
    <template #practice>
      <div class="practice-tasks">
        <p><strong>动手练习：</strong></p>
        <ol>
          <li>添加一个 <code>volume</code> 变量表示成交量，如果成交量超过 10000，使用 :style 将文字颜色设为红色</li>
          <li>添加一个 <code>isTrading</code> 布尔变量表示是否在交易时间，使用 :class 绑定不同的类名</li>
          <li>尝试绑定一个 <code>title</code> 属性，鼠标悬停时显示股票的详细信息</li>
          <li>创建一个"立即购买"按钮，使用 :disabled 绑定，当不在交易时间时禁用按钮</li>
        </ol>
      </div>
    </template>

    <!-- ==================== 6. 学习小贴士 ==================== -->
    <template #tips>
      <ul>
        <li><strong>v-bind 可以简写为冒号 :</strong>，例如 v-bind:class 简写为 :class</li>
        <li><strong>:style 中的 CSS 属性名使用驼峰命名</strong>，如 fontSize（而非 font-size）</li>
        <li><strong>:class 可以和普通 class 共存</strong>，Vue 会自动合并</li>
        <li><strong>绑定对象时注意单引号</strong>，类名如果包含连字符需要加引号，如 'trend-up'</li>
        <li><strong>金融场景的通用规则</strong>：涨用红色，跌用绿色（中国股市习惯）</li>
      </ul>
    </template>
  </LessonLayout>
</template>

<style scoped>
/* 股票卡片基础样式 */
.stock-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.stock-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.stock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
}

.stock-header h4 {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
}

.stock-code {
  font-size: 12px;
  color: #999;
  background: #f5f5f5;
  padding: 4px 8px;
  border-radius: 4px;
}

.stock-body {
  text-align: center;
}

.current-price {
  font-size: 32px;
  font-weight: bold;
  margin: 15px 0;
}

.change-info {
  display: inline-block;
  margin-top: 10px;
}

/* 动态类名样式 */
.price-tag {
  font-size: 28px;
  font-weight: bold;
  margin: 15px 0;
  padding: 10px;
  border-radius: 8px;
}

.price-tag.rising {
  color: #ff4d4f;
  background: #fff1f0;
}

.price-tag.falling {
  color: #52c41a;
  background: #f6ffed;
}

.trend-indicator {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.trend-indicator.trend-up {
  background: #fff1f0;
  color: #ff4d4f;
}

.trend-indicator.trend-down {
  background: #f6ffed;
  color: #52c41a;
}

.trend-indicator.highlight {
  animation: pulse 1.5s infinite;
  border: 2px solid currentColor;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* Logo展示 */
.stock-with-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.stock-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.stock-info h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.stock-info p {
  margin: 0;
  color: #999;
  font-size: 13px;
}

/* 代码讲解样式 */
.code-explanation {
  margin-top: 40px;
}

.code-explanation h3 {
  color: #495057;
  font-size: 22px;
  margin-bottom: 20px;
}

.explain-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  border-left: 4px solid #667eea;
}

.explain-section h4 {
  margin: 0 0 12px 0;
  color: #343a40;
  font-size: 16px;
}

.explain-section pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  margin: 12px 0;
}

.explain-text {
  margin: 10px 0 0 0;
  color: #6c757d;
  font-size: 14px;
  line-height: 1.6;
}

/* 对比表格 */
.comparison-box {
  margin-top: 40px;
  padding: 25px;
  background: #f0f7ff;
  border-radius: 12px;
}

.comparison-box h3 {
  margin: 0 0 20px 0;
  color: #1890ff;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th {
  background: #667eea;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.comparison-table td {
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

/* 练习任务 */
.practice-tasks {
  font-size: 15px;
  line-height: 1.8;
}

.practice-tasks ol {
  margin: 15px 0;
  padding-left: 25px;
}

.practice-tasks ol li {
  margin: 12px 0;
}
</style>
