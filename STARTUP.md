# TSWIM 2027 本地启动指南

## 📋 项目简介

这是 TSWIM 2027（Taiwan Summer Workshop on Information Management 2027）的官方网站。

- **年份**：2027
- **主办机构**：National Central University (NCU)
- **网站类型**：静态 HTML/CSS/JavaScript
- **GitHub Pages**：https://lucy0299.github.io/tswim_2027/

---

## 🚀 快速启动

### 方案 1：Python（推荐，无需额外安装）

#### **Windows PowerShell**
```powershell
cd 'C:\Users\peng1\Desktop\Lucy\project\tswim_2027'
python -m http.server 8000
```

#### **Windows CMD**
```cmd
cd C:\Users\peng1\Desktop\Lucy\project\tswim_2027
python -m http.server 8000
```

#### **Mac/Linux Terminal**
```bash
cd ~/path/to/tswim_2027
python3 -m http.server 8000
```

**然后在浏览器访问：** `http://localhost:8000/`

---

### 方案 2：Node.js / npm

如果安装了 Node.js：

```bash
npx http-server -c-1 -p 8000
```

**然后在浏览器访问：** `http://localhost:8000/`

---

### 方案 3：创建 Windows 批处理文件（`.bat`）

1. 在项目根目录创建文件 `start-local.bat`
2. 复制以下内容：

```batch
@echo off
cd /d "C:\Users\peng1\Desktop\Lucy\project\tswim_2027"
echo =============================================
echo TSWIM 2027 Local Server Starting...
echo =============================================
echo.
python -m http.server 8000
echo.
pause
```

3. 双击 `start-local.bat` 文件即可启动服务器

---

### 方案 4：VS Code 中使用 Live Server 扩展

1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

---

## 🌐 浏览器访问

启动服务器后，在浏览器中打开：

```
http://localhost:8000/
```

或直接访问完整 URL：
```
http://127.0.0.1:8000/index.html
```

---

## 📁 项目结构

```
tswim_2027/
├── index.html                 # 主网页文件
├── assets/
│   ├── css/
│   │   ├── main.css          # 主样式文件（翡翠绿主题）
│   │   ├── schedule.css      # 日程表样式
│   │   └── fonts.css         # 字体定义
│   ├── js/
│   │   ├── main.js           # 主 JavaScript 文件
│   │   └── ev.min.js         # AOS 动画库
│   ├── fonts/                # 本地字体文件
│   ├── img/
│   │   ├── person/           # 讲者头像
│   │   ├── sponsors/         # 赞助商 logo
│   │   └── bg/               # 背景图片
│   ├── vendor/               # 第三方库（Bootstrap 等）
│   └── template/             # 论文模板
├── docs/                      # 文档和表单
│   ├── hotels/               # 酒店预订表
│   └── pre-tswim/            # 前期活动海报
├── CHANGES_2027.md           # 2027 版本改动清单
├── STARTUP.md                # 本文件
└── .gitignore                # Git 忽略文件
```

---

## 🎨 2027 版本特色

- **颜色主题**：翡翠绿（Emerald Green #10b981）替换旧的橙色
- **主办机构**：从清华大学（NTHU）更换为中央大学（NCU）
- **联系邮箱**：tswim2027@iss.ncu.edu.tw
- **日期**：2027 年 6 月 28-30 日
- **动态时间线**：改进的 Important Dates 交互效果

详见 `CHANGES_2027.md` 了解所有改动。

---

## 🔍 常见问题

### Q: 启动后页面显示 "Cannot GET /"

**A:** 确保你在项目根目录启动服务器。检查：
```powershell
# 确认当前路径包含 index.html
ls index.html
```

### Q: 页面加载但样式/图片不显示

**A:** 
1. 检查浏览器开发者工具（F12）中的错误信息
2. 确保所有资源路径相对正确（`assets/` 等）
3. 检查网络连接是否正常

### Q: 如何停止本地服务器？

**A:** 在 PowerShell/CMD 窗口中按 `Ctrl + C`

### Q: 想要改变端口号？

**A:** 将 `8000` 改成其他端口，例如 `8080`：
```bash
python -m http.server 8080
```

### Q: GitHub Pages 和本地显示不一致？

**A:** 
1. 清除浏览器缓存（`Ctrl + Shift + Delete`）
2. 用无痕浏览窗口测试
3. 硬刷新（`Ctrl + F5`）

---

## 📝 开发提示

### 编辑网站内容

- **HTML 内容**：编辑 `index.html`
- **样式调整**：编辑 `assets/css/main.css`
- **JavaScript 功能**：编辑 `assets/js/main.js`

### 实时查看改动

1. 编辑文件并保存
2. 在浏览器按 `F5` 刷新（或 `Ctrl + F5` 硬刷新）
3. 如果使用 Live Server，会自动刷新

### 检查改动清单

参考 `CHANGES_2027.md` 文件，了解 2027 版本所有的改动项目。

---

## 🚀 推送到 GitHub Pages

当在本地完成开发后，推送到 GitHub：

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Pages 通常在 1-2 分钟内更新到：
```
https://lucy0299.github.io/tswim_2027/
```

---

## 📧 联系方式

如有问题，请联系：
- **邮箱**：tswim2027@iss.ncu.edu.tw
- **地点**：National Central University, Taiwan

---

## 📄 许可证

这个项目是 TSWIM 2027 官方网站。

**最后更新**：2026-09-10

---

## 快速命令参考

| 任务 | 命令 |
|------|------|
| **启动服务器** | `python -m http.server 8000` |
| **访问网站** | `http://localhost:8000/` |
| **停止服务器** | `Ctrl + C` |
| **查看 git 状态** | `git status` |
| **推送到 GitHub** | `git push origin main` |
| **查看改动清单** | `cat CHANGES_2027.md` |

---

祝你使用愉快！🎉
