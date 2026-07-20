# 抗癌网官网

> 用爱守护每一颗抗癌的心 —— 专注肿瘤防治科普教育与患者互助公益平台

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS v4
- **后端服务**: Supabase (数据库 + 认证 + 存储)
- **部署**: Cloudflare Pages (免费托管)

## 项目结构

```
anticancer-web/
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── page.tsx      # 首页
│   │   ├── layout.tsx    # 布局组件
│   │   └── globals.css    # 全局样式
│   └── lib/
│       └── supabase.ts   # Supabase 客户端配置
├── public/               # 静态资源
├── wrangler.toml         # Cloudflare Pages 配置
└── package.json          # 项目依赖
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 部署到 Cloudflare Pages

### 方法一：通过 GitHub 自动部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 **Workers & Pages** → **Create application** → **Pages**
4. 选择 **Connect to Git**
5. 选择 `lhbreo/lhbreo` 仓库
6. 配置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
7. 点击 **Deploy site**

### 方法二：手动部署

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
wrangler pages deploy .next --project-name=anticancer-web
```

## Supabase 数据库配置

已在 `src/lib/supabase.ts` 中配置：

- **Project URL**: `https://xfkdhoynwyvywrrlzerp.supabase.co`
- **Publishable Key**: `sb_publishable_4JkycZ7NI4qIOcD8kxT8BA_M5u6Y8m8`

如需更换项目，请在 `src/lib/supabase.ts` 中修改对应值。

## 功能模块

- [x] 首页（主视觉 + 统计数据 + 快速入口）
- [x] 科普教育（文章列表 + 分类浏览）
- [x] 患者社区（帖子列表 + 病种分类）
- [x] 专家专栏（专家介绍 + 在线咨询）
- [ ] 知识库（按癌种整理的权威科普）
- [ ] 积分中心（用户积分 + 任务 + 兑换）
- [ ] 捐赠功能（跳转基金会官网）
- [ ] 志愿者管理（招募 + 认证 + 活动）
- [ ] 用户认证（注册 + 登录）

## 许可证

MIT License
