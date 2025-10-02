<!--
  第1课：插值表达式 - 银行账户余额
  学习目标：掌握 Vue3 最基础的语法 —— 插值表达式 {{ }}

  什么是插值表达式？
  插值表达式是 Vue 模板中最基本的数据绑定方式，使用双大括号 {{ }} 来显示数据

  金融场景：展示银行账户余额和用户信息
-->
<script setup>
import LessonLayout from '../common/LessonLayout.vue'

// ==================== 1. 数据声明 ====================
// 在 Vue3 中，我们在 <script setup> 中声明的变量可以直接在模板中使用

// 用户姓名
const userName = '张三'

// 账户余额（单位：元）
const balance = 12345.67

// 银行名称
const bankName = '中国工商银行'

// 账户类型
const accountType = '储蓄卡'

// 账号（隐藏中间部分）
const accountNumber = '6222 **** **** 8888'
</script>

<template>
  <LessonLayout
    title="第1课：插值表达式 - 银行账户余额"
    description="学习 Vue3 中最基础的数据展示方式：插值表达式。通过银行账户场景，了解如何在模板中显示变量的值。"
    :key-points="[
      '插值表达式的语法：使用双大括号 {{ }} 包裹变量名',
      '在 <script setup> 中声明的变量可以直接在模板中使用',
      '插值表达式可以显示字符串、数字等基本类型数据',
      '插值表达式内部可以使用简单的 JavaScript 表达式'
    ]"
    difficulty="⭐"
  >
    <!-- ==================== 2. 演示区域 ==================== -->
    <div class="demo-area">
      <h3>📱 我的银行卡</h3>

      <!-- 银行卡展示 -->
      <div class="bank-card">
        <!-- 第一部分：使用插值表达式显示银行名称 -->
        <div class="bank-name">
          {{ bankName }}
        </div>

        <!-- 第二部分：显示账户类型 -->
        <div class="account-type">
          {{ accountType }}
        </div>

        <!-- 第三部分：显示账号 -->
        <div class="account-number">
          卡号：{{ accountNumber }}
        </div>

        <!-- 第四部分：显示持卡人姓名 -->
        <div class="holder-name">
          持卡人：{{ userName }}
        </div>

        <!-- 第五部分：显示余额 -->
        <div class="balance-display">
          <div class="label">账户余额</div>
          <div class="amount">
            <!-- 可以在插值表达式中使用简单的表达式 -->
            ¥ {{ balance.toFixed(2) }}
          </div>
        </div>
      </div>

      <!-- 账户信息说明 -->
      <div class="info-box">
        <h4>📊 账户详情</h4>
        <ul>
          <!-- 多次使用插值表达式 -->
          <li>👤 姓名：{{ userName }}</li>
          <li>🏦 开户行：{{ bankName }}</li>
          <li>💳 卡类型：{{ accountType }}</li>
          <li>🔢 卡号：{{ accountNumber }}</li>
          <li>💰 余额：{{ balance }} 元</li>
        </ul>
      </div>
    </div>

    <!-- ==================== 3. 代码讲解 ==================== -->
    <div class="code-explanation">
      <h3>💻 代码说明</h3>

      <div class="explain-section">
        <h4>1️⃣ 在 &lt;script setup&gt; 中声明数据</h4>
        <pre><code>const userName = '张三'       // 声明用户名
const balance = 12345.67      // 声明账户余额</code></pre>
        <p class="explain-text">
          使用 <code>const</code> 关键字声明变量（暂时用常量，后续课程会学习响应式数据）
        </p>
      </div>

      <div class="explain-section">
        <h4>2️⃣ 在模板中使用插值表达式</h4>
        <pre><code>&lt;div&gt;持卡人：<span style="color: #e83e8c">{{ userName }}</span>&lt;/div&gt;
&lt;div&gt;余额：¥ <span style="color: #e83e8c">{{ balance.toFixed(2) }}</span>&lt;/div&gt;</code></pre>
        <p class="explain-text">
          使用 <code>{{ }}</code> 双大括号包裹变量名，Vue 会自动将变量的值渲染到页面上
        </p>
      </div>

      <div class="explain-section">
        <h4>3️⃣ 插值表达式中可以使用简单的 JavaScript 表达式</h4>
        <pre><code>{{ balance.toFixed(2) }}    // 保留两位小数
{{ userName + '先生' }}     // 字符串拼接
{{ balance > 10000 ? '土豪' : '普通用户' }}  // 三元表达式</code></pre>
      </div>
    </div>

    <!-- ==================== 4. 练习任务 ==================== -->
    <template #practice>
      <div class="practice-tasks">
        <p><strong>现在轮到你了！尝试完成以下任务：</strong></p>
        <ol>
          <li>在 script 中添加一个新变量 <code>vipLevel</code>，值为 "黄金会员"</li>
          <li>在银行卡下方使用插值表达式显示这个会员等级</li>
          <li>添加一个 <code>depositAmount</code> 变量，表示今日存款金额</li>
          <li>使用插值表达式和算术运算，计算并显示：余额 + 存款后的总金额</li>
        </ol>
        <p class="hint">💡 提示：可以直接在 {{ }} 中使用 + 运算符进行加法计算</p>
      </div>
    </template>

    <!-- ==================== 5. 学习小贴士 ==================== -->
    <template #tips>
      <ul>
        <li><strong>插值表达式只能用在元素的内容中</strong>，不能用在 HTML 属性中（属性绑定会在下一课学习）</li>
        <li><strong>避免在插值表达式中写复杂逻辑</strong>，保持简洁易读</li>
        <li><strong>插值表达式会自动转义 HTML</strong>，防止 XSS 攻击，这是 Vue 的安全机制</li>
        <li><strong>使用 toFixed(2)</strong> 方法可以格式化数字，这在金融场景中非常常用</li>
      </ul>
    </template>
  </LessonLayout>
</template>

<style scoped>
/* 银行卡样式 */
.bank-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
}

.bank-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  opacity: 0.95;
}

.account-type {
  font-size: 14px;
  margin-bottom: 25px;
  opacity: 0.85;
}

.account-number {
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 15px;
  font-family: 'Courier New', monospace;
}

.holder-name {
  font-size: 14px;
  margin-bottom: 25px;
}

.balance-display {
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.balance-display .label {
  font-size: 13px;
  opacity: 0.9;
  margin-bottom: 8px;
}

.balance-display .amount {
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* 信息框样式 */
.info-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  border-left: 4px solid #667eea;
}

.info-box h4 {
  margin: 0 0 15px 0;
  color: #495057;
  font-size: 16px;
}

.info-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-box ul li {
  padding: 8px 0;
  color: #6c757d;
  font-size: 14px;
  border-bottom: 1px solid #e9ecef;
}

.info-box ul li:last-child {
  border-bottom: none;
}

/* 代码讲解样式 */
.code-explanation {
  margin-top: 30px;
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
  border-left: 4px solid #28a745;
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
  font-size: 14px;
  line-height: 1.6;
  margin: 12px 0;
}

.explain-section code {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 2px 6px;
}

.explain-text {
  margin: 10px 0 0 0;
  color: #6c757d;
  font-size: 14px;
  line-height: 1.6;
}

/* 练习任务样式 */
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

.practice-tasks .hint {
  margin-top: 15px;
  padding: 12px;
  background: #fff3cd;
  border-radius: 6px;
  border-left: 3px solid #ffc107;
  font-size: 14px;
}
</style>
