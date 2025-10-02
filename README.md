
# The World of Dogs（個人首頁）

作品說明：以 awwwards 風格為靈感的「狗狗主題首頁」，前端（包含HTML / CSS / TypeScript）。包含圖片、Lightbox、即時時鐘供使用者查看時間。

設計概念
風格：大字體、卡片、柔和陰影，偏向展示型的網站。
主題：狗狗品種展示
字體：中文（Noto Sans TC）＋英文（Inter）
深淺主題：data-theme

功能清單
行動版導覽展開/收合
即時時鐘（`<time id="sotdDate">`）：每秒更新、`aria-live="polite"`，同時維護 `dateTime`（ISO）。
圖片卡片預覽
響應式卡片


專案結構
```
repo-root/
├─ hw1/
│  ├─ index.html
│  ├─ styles.css
│  ├─ src/
│  │  └─ main.ts          
│  ├─ dist/
│  │  └─ main.js          
│  ├─ assets/             
│  ├─ chat-history/       
│  └─ docs/
│     └─ outline.md       
├─ README.md              
└─ .gitignore             
```


