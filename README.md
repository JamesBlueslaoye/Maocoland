# MaocoLand（毛草乐园）

品牌官网，基于 **Next.js 14（App Router）** + **TypeScript** + **Tailwind CSS** + **pnpm**。规范见 `refers/PROJECT.md`。

## 环境要求

- **Node.js**：>= 20.x（推荐 22.x LTS）
- **包管理器**：**pnpm**（勿与 npm 混用）

## 本地开发

```bash
pnpm install
pnpm run dev
```

开发地址：http://localhost:3000

若终端出现 **`EMFILE: too many open files`**（开发监听占用文件句柄过多），可任选其一：

1. **提高本机句柄上限**（推荐，macOS 终端执行一次后再 `pnpm run dev`）：`ulimit -n 10240`
2. **改用轮询监听**（略耗 CPU，但更稳）：`pnpm run dev:poll`
3. 仓库根目录已排除本地大图包目录 `资料图—非项目文件/` 的监听；请勿把海量素材放在需参与编译的目录下。

- 首页 `/`：Banner 资源见 `public/images/`（横竖版切换逻辑见 `HomeHero`）

## 质量检查（提交前建议）

```bash
pnpm run lint
pnpm run type-check
pnpm run build
```

## 目录说明（简要）

| 路径 | 说明 |
| --- | --- |
| `public/` | 图片、图标、二维码等（随构建部署，URL 以 `/` 根路径引用） |
| `src/app/` | App Router：页面、布局、`loading` / `error` / `not-found` |
| `src/components/` | 组件（`layout` / `features`；`ui` 待按设计扩展） |
| `src/lib/` | 工具与常量 |
| `src/store/` | Zustand 状态（如语言切换） |
| `src/styles/globals.css` | 全局样式 + Tailwind 入口 |
| `refers/PROJECT.md` | 技术栈与目录约定 |

## Git 远程

本项目约定使用 **SSH** 推送与拉取，例如：

```bash
git remote add origin git@github.com:JamesBlueslaoye/Maocoland.git
git push -u origin main
```

（详细说明见 `.cursor/rules/git-github-ssh.mdc`。）

## Vercel 部署

在 Vercel 连接本仓库后，**使用默认的 Next.js 检测与构建**即可（`pnpm install` + `next build`），**无需**再使用根目录 `index.html` 的静态重定向方案。若项目里曾手工设置 Framework 为 **Other** 或自定义 Output，请在 Vercel 项目设置中改回 **Next.js** 并清除对根目录静态输出的覆盖。

## 环境变量

复制 `.env.example` 为 `.env.local`（勿提交密钥）。
