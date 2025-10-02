# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

**Vue3 金融教学系统** - An educational platform designed to teach Vue 3 fundamentals through financial/economic scenarios. This is a zero-to-hero course system where students learn by building real-world financial components (banking, stocks, investments).

## Development Commands

```bash
npm run dev      # Start Vite development server with hot reload
npm run build    # Build production bundle
npm run preview  # Preview production build locally
```

## Tech Stack

- **Framework**: Vue 3 with Composition API (`<script setup>` syntax)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **UI**: Custom components with financial theming (no external UI library used for lessons)
- **Dependencies**: Element Plus, Vant, Pinia, Axios (installed but not yet integrated into lessons)

## Architecture Overview

### Application Structure

```
src/
├── router/index.js           # Route definitions for all lessons and projects
├── views/
│   └── LessonView.vue        # Welcome/home page
├── components/
│   ├── common/
│   │   ├── LessonNavigation.vue  # Left sidebar navigation
│   │   └── LessonLayout.vue      # Reusable lesson wrapper component
│   ├── lessons/              # Individual lesson components (Lesson01-*.vue, etc.)
│   └── projects/             # Capstone project components
├── App.vue                   # Root container with sidebar + router-view layout
└── main.js                   # Entry point with router setup
```

### Lesson Component Pattern

Every lesson follows this standardized structure:

1. **Single `<script setup>` block** at the top with imports first
   - Import `LessonLayout` component
   - Declare data/functions with extensive Chinese comments

2. **Template wrapped in `<LessonLayout>`** with props:
   - `title`: Lesson title
   - `description`: Brief overview
   - `keyPoints`: Array of learning objectives
   - `difficulty`: Star rating (⭐ to ⭐⭐⭐⭐⭐)

3. **Named template slots**:
   - Default slot: Main lesson content and demos
   - `#practice`: Student exercises
   - `#tips`: Learning tips and best practices

4. **Scoped styles** for lesson-specific UI

### Route Management

- Routes in `src/router/index.js` use lazy loading: `component: () => import('../components/lessons/...')`
- **Important**: Uncommented routes MUST have corresponding `.vue` files or Vite will error
- Currently only Lessons 1-3 are created; Lessons 4-14 and projects are commented out in router

### Lesson Progression

**Stage 1 - Basics** (✅ Complete):
- Lesson 01: Interpolation `{{ }}` - Bank balance display
- Lesson 02: Attribute binding `v-bind` / `:` - Stock cards with dynamic colors
- Lesson 03: Event handling `v-on` / `@` - Trading buttons

**Stage 2 - Reactivity** (⏸️ Pending):
- Lesson 04: `ref`/`reactive` - Account deposits/withdrawals
- Lesson 05: `computed` - Investment returns calculation
- Lesson 06: `watch` - Balance alerts

**Stage 3 - Lists & Forms** (⏸️ Pending):
- Lesson 07: `v-for` - Stock lists
- Lesson 08: `v-if`/`v-show` - VIP status
- Lesson 09: `v-model` - Deposit forms

**Stage 4 - Component Communication** (⏸️ Pending):
- Lesson 10: Props - Stock portfolio
- Lesson 11: Emit - Trade panel
- Lesson 12: v-model components - Amount input

**Stage 5 - Advanced** (⏸️ Pending):
- Lesson 13: Lifecycle hooks - Exchange rates
- Lesson 14: Composables - Financial utilities

**Projects** (⏸️ Pending):
- Finance Calculator
- Personal Ledger
- Portfolio Tracker

## Development Guidelines

### When Creating New Lessons

1. **Component Naming**: Use format `Lesson##-DescriptiveName.vue` (e.g., `Lesson04-AccountBalance.vue`)

2. **File Structure**:
   ```vue
   <script setup>
   import LessonLayout from '../common/LessonLayout.vue'
   // ... data and functions with Chinese comments
   </script>

   <template>
     <LessonLayout :title="..." :key-points="[...]">
       <!-- demos -->
       <template #practice><!-- exercises --></template>
       <template #tips><!-- tips --></template>
     </LessonLayout>
   </template>

   <style scoped>/* ... */</style>
   ```

3. **Router Updates**: When adding a lesson, uncomment its route in `src/router/index.js`

4. **Styling Conventions**:
   - Financial colors: Red (#ff4d4f) for gains/buy, Green (#52c41a) for losses/sell (Chinese stock market convention)
   - Use gradient backgrounds for cards: `linear-gradient(135deg, ...)`
   - Code examples use dark theme: `background: #2d2d2d; color: #f8f8f2`

5. **Educational Content**:
   - All comments and explanations in Chinese (学生是中国人)
   - Use real financial scenarios (stocks, banking, investments)
   - Include detailed code explanations with step-by-step breakdowns
   - Provide hands-on practice tasks in `#practice` slot

### Common Pitfalls

- **Never have multiple `<script setup>` blocks** in one component (Vite will error)
- **Always import LessonLayout** at the top of the first `<script setup>` block
- **Don't add routes** for lessons that don't exist yet (causes import resolution errors)
- LessonNavigation displays all lessons; clicking non-existent ones does nothing (graceful degradation)
