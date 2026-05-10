# 商务英语今日热词学习页

这是一个可直接发布到 GitHub Pages 的静态网页。页面会在每次刷新时，从内置的 Fortune China 来源库里随机抽取一组“今日热词”和“今日短语 / 商务短语”，并把出现过的内容写入浏览器 `localStorage` 知识库，后续刷新会优先避开重复词条。

## 使用方式

直接打开 `index.html` 即可本地预览。发布到 GitHub 时，把本目录推送到仓库，在 Settings → Pages 中选择 `main` 分支和根目录发布。

## 数据说明

词条来源仅保留 `https://www.fortunechina.com` 域名下的 Fortune China 页面链接。页面中的解释和例句为学习化摘编，并在卡片中保留原始来源入口。

## 在线图片

学习卡右侧图片使用 `https://api.memegen.link` 根据当前词条动态生成 meme 风格图片。发布到 GitHub Pages 后，只要浏览器能访问该服务，图片会自动显示。
