# 技术设计

## 技术栈

- React + TypeScript + Vite
- Tailwind CSS
- React Router（如果需要多页面）
- Framer  Motion（动画效果）

## 项目结构

```Markdown
src/
    components/
        eader.tsx
        Hero.tsx
        About.tsx
        Projects.tsx
        Contact.tsx
        Footer.tsx
    data/
        projects.json
        skills.json
    App.tsx
    main.tsx
```
## 数据管理
- 项目数据：从 `data/projects.json` 中读取
- 技能数据：从 `data/skills.json` 中读取
