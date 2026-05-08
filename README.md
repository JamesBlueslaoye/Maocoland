# MaocoLand（毛草乐园）

品牌官网，基于 **Next.js 16（App Router）** + **React 19** + **TypeScript** + **Tailwind CSS** + **pnpm**。规范见 `refers/PROJECT.md`。

## 环境要求

- **Node.js**：>= 20.x（推荐 22.x LTS）
- **包管理器**：**pnpm**（勿与 npm 混用）

## 本地开发

```bash
pnpm install
pnpm run dev
```

开发地址：http://localhost:3000

Next.js 16 起默认使用 **Turbopack** 进行开发与生产构建。若在超大仓库根目录下误检测到上级目录的 lockfile，已在 `next.config.mjs` 中通过 `turbopack.root` 固定本项目根目录。

若终端出现 **`EMFILE: too many open files`**（开发监听占用文件句柄过多），可任选其一：

1. **提高本机句柄上限**（推荐，macOS 终端执行一次后再 `pnpm run dev`）：`ulimit -n 10240`
2. **改用 Webpack 开发模式**（沿用配置里的 `watchOptions`）：`next dev --webpack`
3. **改用轮询监听**（略耗 CPU，但更稳）：`pnpm run dev:poll`
4. 仓库根目录已排除本地大图包目录 `资料图—非项目文件/` 的监听；请勿把海量素材放在需参与编译的目录下。

- 首页 `/`：Banner 资源见 `public/images/`（横竖版切换逻辑见 `HomeHero`）

## 质量检查（提交前建议）

```bash
pnpm run lint
pnpm run type-check
pnpm run build
```

自 Next.js 16 起 CLI 不再提供 `next lint`，本项目使用 **ESLint 9** 与扁平配置 **`eslint.config.mjs`**（沿用 `eslint-config-next/core-web-vitals`）。`pnpm run lint` 等价于在项目根执行 `eslint .`。

## 目录说明（简要）

| 路径 | 说明 |
| --- | --- |
| `public/` | 图片、图标、二维码等（随构建部署，URL 以 `/` 根路径引用） |
| `src/app/` | App Router：页面、布局、`loading` / `error` / `not-found` |
| `src/components/` | 组件（`layout` / `features`；`ui` 待按设计扩展） |
| `src/lib/` | 工具与常量 |
| `src/store/` | Zustand 状态（如语言切换） |
| `src/styles/globals.css` | 全局样式 + Tailwind 入口 |
| `eslint.config.mjs` | ESLint 扁平配置（Next 官方规则） |
| `wrangler.jsonc` | Cloudflare Workers / OpenNext 部署配置 |
| `open-next.config.ts` | OpenNext Cloudflare 适配配置 |
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

### Cloudflare Workers（OpenNext）

本仓库已纳入 **`@opennextjs/cloudflare`** 与 **`wrangler.jsonc`**。Worker 脚本名固定为 **`maocoland-web`**（与 `package.json` 的 `name` 一致）；`WORKER_SELF_REFERENCE` 必须指向同名服务，否则会报错 **10143**。

- **推荐一键部署**：`pnpm run deploy:cf`（等价于 `opennextjs-cloudflare build && opennextjs-cloudflare deploy`）。
- **拆分步骤**：先 `pnpm run build:cf` 生成 `.open-next/`，再 `pnpm exec wrangler deploy`（Wrangler 会读取仓库里的 `wrangler.jsonc`）。
- **勿**仅用 `next build` 后再裸跑 `npx wrangler deploy` 且不带 OpenNext 产物；也不要依赖 Wrangler 在无配置文件时自动推断 Worker 名（易出现 `maocolandweb` / `maocoland-web` 混用）。

本地预览：`pnpm run preview:cf`。可选复制 `.dev.vars.example` 为 `.dev.vars`。详见 [OpenNext Cloudflare — Get Started](https://opennext.js.org/cloudflare/get-started)。

## 环境变量

复制 `.env.example` 为 `.env.local`（勿提交密钥）。
