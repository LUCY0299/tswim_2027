# TSWIM 2027 所有改動清單

## 1. CSS 變數更新（優先）
**文件:** `assets/css/main.css` (頂部變數宣告)

### 更新主要 CSS 變數：
```css
:root {
  --accent-color: #10b981;        /* 舊: #f6b26b */
  --nav-hover-color: #10b981;     /* 舊: #f6b26b */
  /* 其他變數保持不變 */
}
```

---

## 2. 色彩系統 (Orange → Emerald Green)
**文件:** `assets/css/main.css`

### 替換所有顏色代碼：
- `#f6b26b` → `#10b981` (主要翡翠綠)
- `#f4a65f` → `#10b981`
- `#ee9a4c` → `#10b981`
- `#d4822e` → `#059669` (深翡翠綠)

**影響範圍：**
- 按鈕顏色
- 連結懸浮顏色
- 強調色
- 邊框顏色
- 背景漸層
- 所有懸浮效果

---

## 2. International Advisors 部分
**文件:** `index.html` (International Advisors 區塊)

### 顧問名單（6 個完整 + 4 個占位符）：
**完整顧問（保留原順序）：**
1. Carol Hsu (University of Sydney)
2. J.J. Po-An Hsieh (Georgia State University)
3. Olivia Liu Sheng (Arizona State University)
4. Yi-Jen Ian Ho (Tulane University)
5. Yi-Chun Chad Ho (George Washington University)
6. **新增：** Likoebe M. Maruping (Georgia State University)
   - 圖片：`assets/img/person/Likoebe M. Maruping.jpg`
   - 連結：https://robinson.gsu.edu/profile/likoebe-m-maruping/

**占位符（4 個）：** "To be added" (使用預設頭像)

---

## 3. Accommodation 部分
**文件:** `index.html` (Accommodation 區塊)

### 資訊順序改變：
**舊：** Address → Distance → Website → Phone
**新：** Distance → Website → Phone（刪除 Address）

應用於：
- Kuva Chateau Hotel
- Southern Manor Resort Hotel

---

## 4. Important Dates 部分
**文件:** `index.html` 和 `assets/css/main.css`

### 設計改變：
- **從：** 垂直時間線
- **改為：** 優雅極簡線設計（Option 1）

### HTML 結構：
```html
<div class="elegant-timeline-container">
  <div class="timeline-background"></div>
  <div class="timeline-progress" id="progressLine"></div>
  <div class="timeline-items">
    <!-- 時間軸項目 -->
  </div>
</div>
```

### CSS 動畫：
- 背景線：半透明翡翠綠漸層
- 動態流線：Hover 時從左到右流動（cubic-bezier 動畫）
- 項目懸浮效果：
  - 圓點放大 + 發光
  - 文字顏色變化：#10b981 → #059669
  - 底線出現

### JavaScript 互動：
```javascript
// Hover 時動態移動進度線到該項目位置
.addEventListener('mouseenter', () => {
  // 計算位置百分比
  // 更新 progressLine 寬度
})
```

---

## 5. TSWIM Program 部分
**文件:** `index.html` (Program 區塊)

### 房間號更新：
**Paper Sessions:**
- 903 → I1-105 (Management Building II)
- 905 → I1-107 (Management Building II)
- 908 → I1-109 (Management Building II)

**Incubator:**
- 429 → I1-111 (Management Building II)
- 430 → I1-114 (Management Building II)
- 431 → I1-117 (Management Building II)

### 內容更新：
- 所有 Discussants：改為 "Discussants: To be added"
- 所有論文標題：改為 "To be added"
- 所有內容列點：改為 "To be added"
- 位置：改為 "Management Building II, 9F"

---

## 6. Committee 部分
**文件:** `index.html` (Committee 區塊)

### 恢復 2026 原始內容（不用改）
- Conference Chairs (5 位)
- Program Chairs (4 位)
- Organizing Co-chairs (9 位)
- Advisory Committee Members (13 位)
- Program Committee Members (17 位)
- Key Staff (2 位行政 + 7 位博士生)

---

## 7. 日期轉換
**文件:** `index.html` 全局

### 改變所有年份：
- 所有 "2026" → "2027"
- **例外：** Committee 部分保持 2026（已恢復原始內容）

---

## 8. Sponsors 部分
**文件:** `index.html` (Sponsors 區塊)

### 替換機構（清華 → 中央）：
1. **CTM**
   - 舊：National Tsing Hua University College of Technology Management
   - 新：National Central University College of Technology Management

2. **主校**
   - 舊：National Tsing Hua University (nthu.edu.tw)
   - 新：National Central University (ncu.edu.tw)

3. **OGA**
   - 舊：National Tsing Hua University Office of Global Affairs
   - 新：National Central University College of Management

---

## 9. 郵箱地址
**文件:** `index.html` 全局

### 改變聯絡郵箱：
- 舊：`tswim2026@iss.nthu.edu.tw`
- 新：`tswim2027@iss.ncu.edu.tw`

---

## 10. 導覽列
**文件:** `index.html` (Header 區塊) 和 `assets/css/main.css`

### 最終設計：保持 2026 原始樣式
- 不需要改成 Line Accent
- 保留原有的懸浮底線動畫

---

## 11. Hero Section 背景漸變
**文件:** `assets/css/main.css` (.hero 或 hero-overlay)

### 背景漸變改動：
```css
/* 舊：單色透明背景 */
.hero::before {
  background: rgba(7, 55, 99, 0.8);
}

/* 新：左右漸變效果 */
.hero::before {
  background: linear-gradient(90deg, 
    rgba(7, 55, 99, 0.8) 0%, 
    rgba(16, 185, 129, 0.7) 100%);
}
```

或直接更新 overlay 的 CSS：
- 從深藍色純色改成：深藍 → 翡翠綠漸變
- 保持透明度效果

---

## 12. 標題下方的線條
**文件:** `assets/css/main.css` 和 `index.html`

### 主題標題樣式（.tos-header h2 或 .theme-title）：
```css
h2 {
  border-bottom: 3px solid #10b981;  /* 改成翡翠綠 */
  padding-bottom: 10px;
  display: inline-block;
}
```

**檢查位置：**
- About TSWIM 標題
- Important Dates 標題
- Committee 標題
- 所有主要區塊標題

---

## 13. 按鈕樣式完整改動
**文件:** `assets/css/main.css`

### 主按鈕樣式：
```css
.btn-primary,
.btn-accent,
button {
  background-color: #10b981;      /* 舊: #f6b26b 或其他橙色 */
  border-color: #10b981;
  color: white;
}

/* 懸浮狀態 */
.btn-primary:hover,
button:hover {
  background-color: #059669;      /* 深翡翠綠 */
  border-color: #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

/* 按壓狀態 */
.btn-primary:active {
  background-color: #047857;
}
```

### 次要按鈕/連結：
```css
a.btn, 
.btn-secondary {
  border: 2px solid #10b981;
  color: #10b981;
}

a.btn:hover {
  background: #10b981;
  color: white;
}
```

---

## 14. Important Dates Timeline 完整 CSS 和 JavaScript
**文件:** `assets/css/main.css` 和 `index.html`

### CSS 完整程式碼：
```css
.elegant-timeline-container {
  position: relative;
  padding: 40px 0 80px 0;
  max-width: 900px;
  margin: 0 auto;
}

/* 背景靜態線 */
.timeline-background {
  position: absolute;
  top: 39px;
  left: 8%;
  right: 8%;
  height: 3px;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.5));
  z-index: 1;
  border-radius: 2px;
}

/* 動態流線 */
.timeline-progress {
  position: absolute;
  top: 39px;
  left: 8%;
  height: 3px;
  background: linear-gradient(90deg,
    rgba(5, 150, 105, 0) 0%,
    rgba(5, 150, 105, 0.4) 20%,
    rgba(5, 150, 105, 1) 50%,
    rgba(5, 150, 105, 0.4) 80%,
    rgba(5, 150, 105, 0) 100%);
  z-index: 2;
  width: 0%;
  transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  filter: drop-shadow(0 0 8px rgba(5, 150, 105, 0.8));
  border-radius: 2px;
}

/* 時間軸項目 */
.timeline-item-elegant {
  flex: 1;
  text-align: center;
  cursor: pointer;
  position: relative;
}

/* 時間軸圓點 */
.timeline-dot {
  width: 12px;
  height: 12px;
  background: white;
  border: 2px solid #10b981;
  border-radius: 50%;
  margin: 0 auto 25px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.timeline-item-elegant:hover .timeline-dot {
  width: 20px;
  height: 20px;
  background: #10b981;
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.6);
}

/* 文字顏色動畫 */
#important-dates .timeline-item-elegant .timeline-content h5 {
  color: #10b981 !important;
  transition: color 0.4s ease;
}

#important-dates .timeline-item-elegant .timeline-content p {
  color: #666 !important;
  transition: color 0.4s ease;
}

/* 懸浮時顏色變化 */
#important-dates .timeline-item-elegant:hover .timeline-content h5 {
  color: #059669 !important;
  font-weight: 700 !important;
}

#important-dates .timeline-item-elegant:hover .timeline-content p {
  color: #333 !important;
  font-weight: 600 !important;
}
```

### JavaScript 動態流線代碼：
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item-elegant');
  const progressLine = document.getElementById('progressLine');
  const container = document.querySelector('.elegant-timeline-container');

  if (timelineItems.length > 0 && progressLine && container) {
    timelineItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const position = item.getAttribute('data-position');
        const percentValue = parseFloat(position);
        // 計算實際寬度百分比（考慮左邊 8% 的偏移）
        const actualWidth = (percentValue / 100) * 84 + 8;
        progressLine.style.width = actualWidth + '%';
      });

      item.addEventListener('mouseleave', () => {
        progressLine.style.width = '0%';
      });
    });

    container.addEventListener('mouseleave', () => {
      progressLine.style.width = '0%';
    });
  }
});
```

### HTML 時間軸結構：
```html
<div class="elegant-timeline-container">
  <div class="timeline-background"></div>
  <div class="timeline-progress" id="progressLine"></div>
  
  <div class="timeline-items">
    <div class="timeline-item-elegant" data-position="0%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Submission Opening</h5>
        <p>November 1, 2026</p>
      </div>
    </div>
    
    <div class="timeline-item-elegant" data-position="33.33%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Submission Deadline</h5>
        <p>March 15, 2027</p>
      </div>
    </div>
    
    <div class="timeline-item-elegant" data-position="66.66%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Acceptance Notification</h5>
        <p>May 20, 2027</p>
      </div>
    </div>
    
    <div class="timeline-item-elegant" data-position="100%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h5>Conference Workshop</h5>
        <p>June 28–30, 2027</p>
      </div>
    </div>
  </div>
</div>
```

---

## 15. 連結和導覽顏色
**文件:** `assets/css/main.css`

### 所有連結樣式：
```css
a {
  color: #10b981;  /* 舊: 可能是 #0b5394 或其他 */
}

a:hover {
  color: #059669;
  text-decoration: underline;
}
```

### 導覽列連結：
```css
.navbar a, 
nav a {
  color: #ffffff;
}

.navbar a:hover,
nav a:hover {
  color: #10b981;
}
```

---

## 16. 其他 UI 元素
**文件:** `assets/css/main.css`

### 提示框 / Alert Box：
```css
.alert-success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  color: #059669;
}

.alert-info {
  background: rgba(16, 185, 129, 0.08);
  border-left: 4px solid #10b981;
}
```

### 分隔線：
```css
hr {
  border-color: #10b981;
  opacity: 0.3;
}
```

### 標籤和徽章：
```css
.badge, .tag {
  background: #10b981;
  color: white;
}

.badge-success {
  background: #10b981;
}
```

---

## 17. 其他雜項
- 所有圖片路徑確認無誤
- Assets 資料夾結構完整
- favicon 確認為中央大學 logo
- 手機響應式設計保持一致

---

## 實施順序（建議）
1. ✅ CSS 變數更新（最優先 - 全局影響）
2. ✅ 色彩系統替換（影響全站視覺）
3. ✅ Hero Section 背景漸變
4. ✅ 標題下方的線條（翡翠綠）
5. ✅ 按鈕樣式完整改動
6. ✅ 連結和導覽顏色
7. ✅ 其他 UI 元素（Alert, Badge 等）
8. ✅ Important Dates Timeline（CSS + JavaScript）
9. ✅ 日期轉換（全局搜尋替換）
10. ✅ 郵箱地址（全局搜尋替換）
11. ✅ Sponsors 部分
12. ✅ TSWIM Program 房間號和內容
13. ✅ International Advisors 顧問
14. ✅ Accommodation 部分
15. ✅ Committee 部分（恢復原始）
16. ✅ 導覽列（確認保持原樣）

---

## 驗證清單（完成後檢查）
- [ ] 翡翠綠色彩完整應用
- [ ] 沒有舊的橙色代碼
- [ ] 所有年份都是 2027（除 Committee）
- [ ] 郵箱都是 ncu.edu.tw
- [ ] Likoebe M. Maruping 已添加
- [ ] 房間號都是 I1-xxx 格式
- [ ] Important Dates 有動畫效果
- [ ] 所有內容標記為 "To be added"
