# homepage

个人主页，线上地址：<https://sapphire611.github.io/>

## 这是什么

`homepage/` 是一个**独立子项目**，自带 git 仓库，remote 指向 `Sapphire611/sapphire611.github.io`。

虽然它躺在 `learning2-sapphire611/` 目录下，但跟学习仓库**没有版本管理关系** ——
学习仓库的 `.gitignore` 已经把 `homepage/` 排除掉了，那边不收这里的任何内容。

整站是**单文件、零构建、零依赖**：结构、样式、脚本全在 `index.html` 里，没有 npm、没有打包步骤。

## 文件

| 文件 | 用途 | 注意事项 |
|---|---|---|
| `index.html` | 整站（HTML + CSS + JS 全在里面） | 改了记得看下面「要同步的地方」 |
| `avatar.jpg` | 右上角头像 **+ 分享卡片缩略图**（`og:image`） | 两处都在用，不能删。换图后要同步 `og:image:width/height` |
| `favicon.ico` | 浏览器标签页图标 | 从旧博客带过来的，270KB，想换小的随时换 |
| `BingSiteAuth.xml` | Bing 站长验证 | 别删，删了要重新验证 |
| `baidu_verify_code-*.html` | 百度站长验证 | 同上 |
| `README.md` | 这份部署说明 | **别从 `_config.yml` 的 exclude 里拿掉**，否则本文会被发布到站点上 |
| `_config.yml` | Jekyll 配置，只用来排除 `README.md` | 以下划线开头，Jekyll 自动不发布它自己 |

> **为什么需要 `_config.yml`**：GitHub Pages 服务的是**仓库根目录的全部文件**，
> 仓库里放什么就对外发布什么。`README.md` 是给维护者看的内部文档，
> 靠 Jekyll 的 `exclude` 把它挡在站点之外（文件仍在仓库里，也照常能读）。

## 发布流程

改完在 `homepage/` 目录里跑三条命令：

```bash
cd ~/code/learning2-sapphire611/homepage
git add -A
git commit -m "改了什么的简短说明"
git push
```

push 之后 GitHub Pages 自动重建，**约 30~60 秒**生效。

查构建状态：

```bash
gh api repos/Sapphire611/sapphire611.github.io/pages --jq .status
# building → built
```

## 本地预览

```bash
cd ~/code/learning2-sapphire611/homepage
python -m http.server 8899
# 浏览器打开 http://127.0.0.1:8899/
```

## 要同步的地方

因为是零构建的单文件，没有模板引擎帮你联动，这几处得手动保持一致：

1. **工作年限** —— 已做成动态（`new Date().getFullYear() - 2021`），不用管
2. **顶栏导航的锚点** —— 新增或删除 `<section id="...">` 时，要同步改 `<nav>` 里的 `<a href="#...">`
3. **`<head>` 里的 meta** —— `og:title` / `og:description` 是写死的，社交平台爬虫不执行 JS，正文改了记得手改
4. **`og:image` 必须是绝对地址** —— `https://sapphire611.github.io/avatar.jpg`，写成相对路径社交平台读不到（这是 OG 协议的硬要求）
5. **主题切换** —— 走 `localStorage` + `<html data-theme>`，深色变量在 `:root[data-theme="dark"]`。想改配色改这两处变量块即可，别去组件里写死颜色

## 历史

```
b06f972  用个人主页替换旧 VuePress 博客     ← 当前
4c6d22f  deploy                            ← 旧博客最后一次构建，历史里保留
```

旧博客是 VuePress 1.9.10 的构建产物，已废弃但**没被抹掉**——替换时用的是 fast-forward，
所以它完整留在历史里，随时能翻回来：

```bash
git checkout 4c6d22f      # 看旧博客
git checkout master       # 回主页
```

博客的**源文件**在另一个仓库：`Sapphire611/vuepress-sapphire611`。
