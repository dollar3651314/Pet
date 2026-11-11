# Pet

宠物相关调研。

**状态：暂停（2026-11-11，Amos：「先暂停掉。」）**。停在：需求验证没有收到反馈；对照验证没做；补充包配方是草案 v0.1，没有专家审核。公开网站（Cloudflare Workers `dog-nutrition`）还在线，没下线。重启时从 `research/05-朋友反馈-生重与可信度.md` 第三节的“② 对照验证”接着做。

- [狗狗不爱吃狗粮、自制鲜食营养配比：调研报告](research/01-dog-fresh-food-nutrition.md)
- [发帖包：需求验证第 1 轮（帖子、问卷、追问模板）](research/02-发帖包-需求验证.md)
- [鲜食营养配比怎么算：年龄、疾病有什么不同](research/03-鲜食营养配比怎么算.md)
- [营养计算器 demo](demo/nutrition-calculator.html)（在线版：https://claude.ai/artifact/C31UBoeLrPfKNaK6bn7sxm）
- [补充包配方（草案 v0.1）](research/04-补充包配方.md)

## 公开网站（给朋友用）
构建：`node scripts/build-site.mjs` → `dist/index.html`。发布在 Cloudflare Workers（静态资源，配置见 `wrangler.jsonc`）：构建命令 `node scripts/build-site.mjs`，部署命令 `npx wrangler deploy`，分支 `claude/pet-dog-nutrition-research-an0ird`。
- [朋友试用反馈：生重与可信度](research/05-朋友反馈-生重与可信度.md)
