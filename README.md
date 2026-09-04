# 商务英语今日热词学习页

演示地址：https://jeffreylexxx.github.io/hot-word-learning-of-furtune-magazine/

可直接发布到 GitHub Pages 的静态网页。页面会在每次刷新时，从内置的 Fortune China 来源库里随机抽取一组“今日热词”和“今日短语 / 商务短语”，并把出现过的内容写入浏览器 `localStorage` 知识库，后续刷新会优先避开重复词条。

## 使用方式

直接打开 `index.html` 即可本地预览。发布到 GitHub 时，把本目录推送到仓库，在 Settings → Pages 中选择 `main` 分支和根目录发布。

## 数据说明

词条来源仅保留 `https://www.fortunechina.com` 域名下的 Fortune China 页面链接。目前词库只收录 2021–2026 年文章，页面会提高 2025–2026 年内容的推荐频率，并避免连续出现同一来源。页面中的解释和例句为学习化摘编，并在卡片中保留原始来源入口。

## 自动更新词库

GitHub Actions 工作流 `.github/workflows/update-fortune-words.yml` 每天北京时间 10:20 自动运行，也可以在仓库的 Actions 页面手动触发。脚本 `scripts/update-fortune-words.mjs` 会执行以下操作：

1. 搜索并读取财富中文网文章；
2. 仅保留 2021–2026 年来源；
3. 用已审核术语表核验正文，排除公司名、人名和不完整翻译；
4. 按年份、来源和日期去重后重新生成 `data.js`；
5. 只有词库实际变化时才由 `github-actions[bot]` 提交更新。

脚本不需要 npm 依赖或 API 密钥。本地可运行 `node scripts/update-fortune-words.mjs` 更新词库。

## 在线图片

学习卡右侧图片使用 `https://api.memegen.link` 根据当前词条动态生成 meme 风格图片。发布到 GitHub Pages 后，只要浏览器能访问该服务，图片会自动显示。
