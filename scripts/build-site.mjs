// 把 demo 页面包成一个完整的网页，放到 dist/，给 Cloudflare Pages 发布用。
// Cloudflare Pages 设置：构建命令 `node scripts/build-site.mjs`，输出目录 `dist`。
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const body = readFileSync(new URL("../demo/nutrition-calculator.html", import.meta.url), "utf8");
const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`;
mkdirSync(new URL("../dist/", import.meta.url), { recursive: true });
writeFileSync(new URL("../dist/index.html", import.meta.url), html);
console.log("dist/index.html", html.length, "bytes");
