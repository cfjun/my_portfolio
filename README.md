# 个人作品集网站

## 项目概述

这是一个使用 React + TypeScript + Vite 构建的个人作品集网站，展示个人项目、技能和联系信息。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (动画效果)
- React Router

## 项目结构

```
src/
  components/         # React 组件
    Header.tsx        # 头部导航栏
    Hero.tsx          # 首页英雄区
    About.tsx         # 关于我
    Projects.tsx      # 项目展示
    Contact.tsx       # 联系方式
    Footer.tsx        # 页脚
  data/
    projects.json     # 项目数据
    skills.json       # 技能数据
  App.tsx             # 主应用组件
  main.tsx            # 入口文件
  index.css           # 全局样式
```

## 功能特点

- 深色主题设计
- 响应式布局，适配移动端和PC端
- 平滑的滚动动画
- 项目卡片展示
- 技能列表展示
- 联系方式链接

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 部署

构建完成后，将 `dist` 目录部署到静态网站托管服务即可。

## 许可证

MIT
