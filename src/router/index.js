/**
 * Vue Router 路由配置
 * 用于管理所有课程和项目的路由
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LessonView.vue'),
      meta: { title: 'Vue3 金融教学系统' }
    },
    // ==================== 阶段一：基础语法 ====================
    {
      path: '/lesson-01',
      name: 'lesson-01',
      component: () => import('../components/lessons/Lesson01-BankBalance.vue'),
      meta: {
        title: '第1课：插值表达式 - 银行账户余额',
        stage: 1,
        lesson: 1
      }
    },
    {
      path: '/lesson-02',
      name: 'lesson-02',
      component: () => import('../components/lessons/Lesson02-StockCard.vue'),
      meta: {
        title: '第2课：属性绑定 - 股票卡片',
        stage: 1,
        lesson: 2
      }
    },
    {
      path: '/lesson-03',
      name: 'lesson-03',
      component: () => import('../components/lessons/Lesson03-TradeButton.vue'),
      meta: {
        title: '第3课：事件处理 - 交易按钮',
        stage: 1,
        lesson: 3
      }
    },

    // ==================== 阶段二：响应式数据 ====================
    // 注释：以下课程组件尚未创建，暂时注释掉
    /*
    {
      path: '/lesson-04',
      name: 'lesson-04',
      component: () => import('../components/lessons/Lesson04-AccountBalance.vue'),
      meta: {
        title: '第4课：ref/reactive - 账户存取款',
        stage: 2,
        lesson: 4
      }
    },
    {
      path: '/lesson-05',
      name: 'lesson-05',
      component: () => import('../components/lessons/Lesson05-InvestmentReturn.vue'),
      meta: {
        title: '第5课：computed - 投资收益计算',
        stage: 2,
        lesson: 5
      }
    },
    {
      path: '/lesson-06',
      name: 'lesson-06',
      component: () => import('../components/lessons/Lesson06-BalanceAlert.vue'),
      meta: {
        title: '第6课：watch - 余额预警',
        stage: 2,
        lesson: 6
      }
    },

    // ==================== 阶段三：列表与表单 ====================
    {
      path: '/lesson-07',
      name: 'lesson-07',
      component: () => import('../components/lessons/Lesson07-StockList.vue'),
      meta: {
        title: '第7课：v-for - 股票列表',
        stage: 3,
        lesson: 7
      }
    },
    {
      path: '/lesson-08',
      name: 'lesson-08',
      component: () => import('../components/lessons/Lesson08-VIPStatus.vue'),
      meta: {
        title: '第8课：v-if/v-show - VIP身份',
        stage: 3,
        lesson: 8
      }
    },
    {
      path: '/lesson-09',
      name: 'lesson-09',
      component: () => import('../components/lessons/Lesson09-DepositForm.vue'),
      meta: {
        title: '第9课：v-model - 存款表单',
        stage: 3,
        lesson: 9
      }
    },

    // ==================== 阶段四：组件通信 ====================
    {
      path: '/lesson-10',
      name: 'lesson-10',
      component: () => import('../components/lessons/Lesson10-StockPortfolio.vue'),
      meta: {
        title: '第10课：Props - 股票持仓',
        stage: 4,
        lesson: 10
      }
    },
    {
      path: '/lesson-11',
      name: 'lesson-11',
      component: () => import('../components/lessons/Lesson11-TradePanel.vue'),
      meta: {
        title: '第11课：Emit - 交易面板',
        stage: 4,
        lesson: 11
      }
    },
    {
      path: '/lesson-12',
      name: 'lesson-12',
      component: () => import('../components/lessons/Lesson12-AmountInput.vue'),
      meta: {
        title: '第12课：v-model组件 - 金额输入',
        stage: 4,
        lesson: 12
      }
    },

    // ==================== 阶段五：高级特性 ====================
    {
      path: '/lesson-13',
      name: 'lesson-13',
      component: () => import('../components/lessons/Lesson13-ExchangeRate.vue'),
      meta: {
        title: '第13课：生命周期 - 汇率查询',
        stage: 5,
        lesson: 13
      }
    },
    {
      path: '/lesson-14',
      name: 'lesson-14',
      component: () => import('../components/lessons/Lesson14-FinanceHooks.vue'),
      meta: {
        title: '第14课：组合式函数 - 金融工具',
        stage: 5,
        lesson: 14
      }
    },

    // ==================== 实战项目 ====================
    {
      path: '/project/calculator',
      name: 'project-calculator',
      component: () => import('../components/projects/FinanceCalculator.vue'),
      meta: {
        title: '实战项目1：理财计算器',
        type: 'project'
      }
    },
    {
      path: '/project/ledger',
      name: 'project-ledger',
      component: () => import('../components/projects/PersonalLedger.vue'),
      meta: {
        title: '实战项目2：个人账本',
        type: 'project'
      }
    },
    {
      path: '/project/portfolio',
      name: 'project-portfolio',
      component: () => import('../components/projects/PortfolioTracker.vue'),
      meta: {
        title: '实战项目3：投资组合追踪',
        type: 'project'
      }
    }
    */
  ]
})

// 路由导航守卫：更新页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue3 金融教学系统'
  next()
})

export default router
