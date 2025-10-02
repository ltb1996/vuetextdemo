<!--
  第3课：事件处理 - 交易按钮
  学习目标：掌握 v-on 指令，学会处理用户的点击、输入等事件

  什么是事件处理？
  事件处理用于响应用户的操作（点击、输入、鼠标移动等）
  语法：v-on:事件名="处理函数" 或简写为 @事件名="处理函数"

  金融场景：实现买入卖出按钮的交互功能
-->
<script setup>
import { ref } from "vue";
import LessonLayout from "../common/LessonLayout.vue";

// ==================== 1. 响应式数据（ref）====================
// ref() 可以让数据变成响应式的，数据改变时页面会自动更新
const stockName = ref("腾讯控股");
const currentPrice = ref(385.6);
const shares = ref(100); // 持有股数
const clickCount = ref(0); // 点击次数
const tradeHistory = ref([]); // 交易记录

// ==================== 2. 事件处理函数 ====================

// 买入股票
function buyStock() {
  shares.value += 10;
  clickCount.value++;

  // 添加交易记录
  const record = {
    type: "买入",
    amount: 10,
    price: currentPrice.value,
    time: new Date().toLocaleTimeString(),
  };
  tradeHistory.value.unshift(record); // 添加到数组开头

  alert(`买入成功！已购买 10 股 ${stockName.value}`);
}

// 卖出股票
function sellStock() {
  if (shares.value < 10) {
    alert("股票数量不足，无法卖出！");
    return;
  }

  shares.value -= 10;
  clickCount.value++;

  // 添加交易记录
  const record = {
    type: "卖出",
    amount: 10,
    price: currentPrice.value,
    time: new Date().toLocaleTimeString(),
  };
  tradeHistory.value.unshift(record);

  alert(`卖出成功！已卖出 10 股 ${stockName.value}`);
}

// 带参数的函数：买入指定数量
function buyStockWithAmount(amount) {
  shares.value += amount;
  clickCount.value++;

  const record = {
    type: "买入",
    amount: amount,
    price: currentPrice.value,
    time: new Date().toLocaleTimeString(),
  };
  tradeHistory.value.unshift(record);
}

// 事件对象示例：处理鼠标移入
function handleMouseEnter(event) {
  console.log("鼠标移入了", event.target.textContent);
  event.target.style.transform = "scale(1.05)";
}

function handleMouseLeave(event) {
  event.target.style.transform = "scale(1)";
}

// 清空交易记录
function clearHistory() {
  if (confirm("确定要清空所有交易记录吗？")) {
    tradeHistory.value = [];
  }
}
</script>

<template>
  <LessonLayout
    title="第3课：事件处理 - 交易按钮"
    description="学习使用 v-on 指令处理用户事件，实现股票买卖的交互功能。了解如何绑定点击、鼠标移动等各种事件。"
    :key-points="[
      'v-on 指令用于监听 DOM 事件',
      '简写形式：v-on:click 可以简写为 @click',
      '可以直接在事件中调用方法，或写简单的表达式',
      '事件处理函数可以接收参数和 event 对象',
      '常见事件：click、input、submit、mouseenter、mouseleave 等',
    ]"
    difficulty="⭐"
  >
    <!-- ==================== 2. 演示区域 ==================== -->
    <div class="demo-area">
      <h3>💹 股票交易系统</h3>

      <!-- 股票信息面板 -->
      <div class="trading-panel">
        <div class="stock-info-header">
          <h4>{{ stockName }}</h4>
          <div class="price">¥{{ currentPrice }}</div>
        </div>

        <div class="holding-info">
          <div class="info-item">
            <span class="label">持有股数</span>
            <span class="value">{{ shares }} 股</span>
          </div>
          <div class="info-item">
            <span class="label">持仓市值</span>
            <span class="value">¥{{ (shares * currentPrice).toFixed(2) }}</span>
          </div>
          <div class="info-item">
            <span class="label">操作次数</span>
            <span class="value">{{ clickCount }} 次</span>
          </div>
        </div>

        <!-- 示例1：基础点击事件 -->
        <div class="action-section">
          <h5>📌 示例1：基础事件绑定</h5>
          <div class="button-group">
            <!-- 使用 @click 绑定点击事件 -->
            <button class="buy-btn" @click="buyStock">买入 10股</button>

            <button class="sell-btn" @click="sellStock">卖出 10股</button>
          </div>
        </div>

        <!-- 示例2：事件传参 -->
        <div class="action-section">
          <h5>📌 示例2：事件处理函数传参</h5>
          <div class="button-group">
            <!-- 调用函数时可以传递参数 -->
            <button class="buy-btn-small" @click="buyStockWithAmount(50)">
              买入 50股
            </button>

            <button class="buy-btn-small" @click="buyStockWithAmount(100)">
              买入 100股
            </button>

            <button class="buy-btn-small" @click="buyStockWithAmount(500)">
              买入 500股
            </button>
          </div>
        </div>

        <!-- 示例3：内联表达式 -->
        <div class="action-section">
          <h5>📌 示例3：内联表达式（适用于简单操作）</h5>
          <div class="button-group">
            <!-- 直接在事件中写表达式 -->
            <button class="action-btn" @click="shares += 1">+1股</button>

            <button class="action-btn" @click="shares -= 1">-1股</button>

            <button class="action-btn" @click="clickCount++">
              点击计数 +1
            </button>
          </div>
        </div>

        <!-- 示例4：鼠标事件 -->
        <div class="action-section">
          <h5>📌 示例4：鼠标移入/移出事件</h5>
          <div
            class="hover-card"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            鼠标移到这里试试
          </div>
        </div>
      </div>

      <!-- 交易记录 -->
      <div class="trade-history">
        <div class="history-header">
          <h4>📋 交易记录</h4>
          <button
            class="clear-btn"
            @click="clearHistory"
            v-if="tradeHistory.length > 0"
          >
            清空记录
          </button>
        </div>

        <div v-if="tradeHistory.length === 0" class="empty-message">
          暂无交易记录
        </div>

        <div v-else class="history-list">
          <div
            v-for="(record, index) in tradeHistory"
            :key="index"
            class="history-item"
            :class="record.type === '买入' ? 'buy-record' : 'sell-record'"
          >
            <span class="record-type">{{ record.type }}</span>
            <span class="record-amount">{{ record.amount }} 股</span>
            <span class="record-price">¥{{ record.price }}</span>
            <span class="record-time">{{ record.time }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== 3. 代码讲解 ==================== -->
    <div class="code-explanation">
      <h3>💻 代码说明</h3>

      <div class="explain-section">
        <h4>1️⃣ 基础事件绑定</h4>
        <pre><code>&lt;button @click="buyStock"&gt;买入&lt;/button&gt;

// 在 script 中定义函数
function buyStock() {
  shares.value += 10
  alert('买入成功！')
}</code></pre>
        <p class="explain-text">
          <code>@click</code> 是
          <code>v-on:click</code> 的简写，当按钮被点击时，会调用 buyStock 函数
        </p>
      </div>

      <div class="explain-section">
        <h4>2️⃣ 事件处理函数传参</h4>
        <pre><code>&lt;button @click="buyStockWithAmount(50)"&gt;买入50股&lt;/button&gt;
&lt;button @click="buyStockWithAmount(100)"&gt;买入100股&lt;/button&gt;

function buyStockWithAmount(amount) {
  shares.value += amount
}</code></pre>
        <p class="explain-text">可以在调用函数时传递参数，实现更灵活的交互</p>
      </div>

      <div class="explain-section">
        <h4>3️⃣ 内联表达式（适用于简单操作）</h4>
        <pre><code>&lt;button @click="shares += 1"&gt;+1股&lt;/button&gt;
&lt;button @click="clickCount++"&gt;计数+1&lt;/button&gt;</code></pre>
        <p class="explain-text">
          对于简单的操作，可以直接在 @click 中写表达式，不需要定义函数
        </p>
      </div>

      <div class="explain-section">
        <h4>4️⃣ 事件对象的使用</h4>
        <pre><code>function handleMouseEnter(event) {
  // event 是原生 DOM 事件对象
  console.log(event.target)  // 触发事件的元素
  event.target.style.transform = 'scale(1.05)'
}</code></pre>
        <p class="explain-text">
          事件处理函数会自动接收一个 event 参数，包含事件的详细信息
        </p>
      </div>

      <div class="explain-section">
        <h4>5️⃣ 常见事件类型</h4>
        <pre><code>@click      - 点击事件
@dblclick   - 双击事件
@mouseenter - 鼠标移入
@mouseleave - 鼠标移出
@input      - 输入事件（下节课详细讲解）
@submit     - 表单提交
@keyup      - 键盘松开
@keydown    - 键盘按下</code></pre>
      </div>
    </div>

    <!-- ==================== 4. ref() 简要说明 ==================== -->
    <div class="ref-explanation">
      <h3>🔄 响应式数据：ref()</h3>
      <p class="intro-text">
        本课中我们首次使用了
        <code>ref()</code>，它可以让数据变成<strong>响应式的</strong>。
        什么是响应式？就是当数据改变时，页面会<strong>自动更新</strong>。
      </p>
      <pre><code>// 导入 ref
import { ref } from 'vue'

// 创建响应式数据
const shares = ref(100)

// 修改数据时要使用 .value
shares.value += 10

// 在模板中使用时不需要 .value
&lt;div&gt;{{ shares }}&lt;/div&gt;</code></pre>
      <p class="note-text">
        📝 注意：在 &lt;script&gt; 中修改 ref 数据时要加 <code>.value</code>，
        但在 &lt;template&gt; 中使用时不需要加。ref
        的详细用法会在第4课深入学习。
      </p>
    </div>

    <!-- ==================== 5. 练习任务 ==================== -->
    <template #practice>
      <div class="practice-tasks">
        <p><strong>动手练习：</strong></p>
        <ol>
          <li>添加一个"全部卖出"按钮，点击后将 <code>shares</code> 设置为 0</li>
          <li>添加一个"重置"按钮，点击后将所有数据恢复初始值</li>
          <li>
            给买入/卖出按钮添加
            <code>@mouseenter</code> 事件，鼠标悬停时在控制台打印信息
          </li>
          <li>
            创建一个"快速交易"区域，添加多个按钮：买入 1、5、10、50、100 股
          </li>
          <li>
            <strong>挑战</strong
            >：添加一个输入框，让用户自定义买入数量，然后点击按钮执行交易
          </li>
        </ol>
      </div>
    </template>

    <!-- ==================== 6. 学习小贴士 ==================== -->
    <template #tips>
      <ul>
        <li>
          <strong>v-on 简写为 @</strong>，例如 v-on:click 简写为
          @click，这是最常用的写法
        </li>
        <li>
          <strong>事件处理函数命名建议</strong>：使用 handle/on 开头，如
          handleClick、onSubmit
        </li>
        <li>
          <strong>简单操作用内联表达式</strong>，复杂逻辑用函数，保持代码清晰
        </li>
        <li>
          <strong>ref 数据在 script 中需要 .value</strong>，在 template 中不需要
        </li>
        <li>
          <strong>金融系统的最佳实践</strong
          >：重要操作（如卖出全部）应该有二次确认（使用 confirm）
        </li>
      </ul>
    </template>
  </LessonLayout>
</template>

<style scoped>
/* 交易面板 */
.trading-panel {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.stock-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 20px;
}

.stock-info-header h4 {
  margin: 0;
  font-size: 20px;
  color: #2c3e50;
}

.price {
  font-size: 28px;
  font-weight: bold;
  color: #ff4d4f;
}

/* 持仓信息 */
.holding-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.info-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.info-item .label {
  display: block;
  font-size: 13px;
  color: #6c757d;
  margin-bottom: 8px;
}

.info-item .value {
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

/* 操作区域 */
.action-section {
  margin-bottom: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.action-section h5 {
  margin: 0 0 15px 0;
  font-size: 15px;
  color: #495057;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* 按钮样式 */
.buy-btn,
.sell-btn {
  flex: 1;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.buy-btn {
  background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
  color: white;
}

.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 77, 79, 0.4);
}

.sell-btn {
  background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
  color: white;
}

.sell-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}

.buy-btn-small,
.action-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.buy-btn-small {
  background: #fff1f0;
  color: #ff4d4f;
  border: 1px solid #ffccc7;
}

.buy-btn-small:hover {
  background: #ff4d4f;
  color: white;
}

.action-btn {
  background: #e6f7ff;
  color: #1890ff;
  border: 1px solid #91d5ff;
}

.action-btn:hover {
  background: #1890ff;
  color: white;
}

/* 鼠标悬停卡片 */
.hover-card {
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}

/* 交易记录 */
.trade-history {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-top: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}

.history-header h4 {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
}

.clear-btn {
  padding: 6px 12px;
  font-size: 13px;
  background: #fff2e8;
  color: #fa8c16;
  border: 1px solid #ffd591;
  border-radius: 4px;
  cursor: pointer;
}

.clear-btn:hover {
  background: #fa8c16;
  color: white;
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 40px 0;
  font-size: 14px;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.history-item {
  display: grid;
  grid-template-columns: 60px 100px 1fr auto;
  gap: 15px;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  align-items: center;
}

.history-item.buy-record {
  background: #fff1f0;
  border-left: 3px solid #ff4d4f;
}

.history-item.sell-record {
  background: #f6ffed;
  border-left: 3px solid #52c41a;
}

.record-type {
  font-weight: bold;
}

.buy-record .record-type {
  color: #ff4d4f;
}

.sell-record .record-type {
  color: #52c41a;
}

.record-time {
  font-size: 12px;
  color: #999;
}

/* 代码讲解 */
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

/* ref 说明 */
.ref-explanation {
  margin-top: 40px;
  padding: 25px;
  background: linear-gradient(135deg, #fff9e6 0%, #ffe7ba 100%);
  border-radius: 12px;
  border-left: 5px solid #faad14;
}

.ref-explanation h3 {
  margin: 0 0 15px 0;
  color: #ad6800;
}

.intro-text {
  margin: 0 0 15px 0;
  font-size: 15px;
  line-height: 1.8;
  color: #595959;
}

.ref-explanation pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  margin: 15px 0;
}

.note-text {
  margin: 15px 0 0 0;
  padding: 12px;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.6;
  color: #595959;
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
