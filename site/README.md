# 匠語 Craftongue 網站

Astro 靜態網站，中英雙語（`/zh-tw/`、`/en/`），每頁都有 hreflang 標籤。

## 本機預覽

需要 Node.js 22.22 以上。

```bash
cd site
npm install
npm run dev      # 開發模式，http://localhost:4321
npm run build    # 輸出到 site/dist/
```

## 檔案在哪裡

| 要改什麼 | 檔案 |
|---|---|
| 選單、頁尾等共用文字 | `src/i18n/ui.ts` |
| 技能目錄和技能介紹頁內容 | `src/data/skills.ts` |
| 各頁面內容（中英文寫在同一個檔案） | `src/pages/[lang]/*.astro` |
| 版面、hreflang | `src/layouts/Base.astro` |
| 顏色、字型 | `src/styles/global.css` |
| 正式網址 | `astro.config.mjs` 的 `site`（或環境變數 `SITE_URL`） |

新增技能：在 `src/data/skills.ts` 加一筆，介紹頁會自動產生。

字型用的是使用者裝置內建的系統字型，沒有載入外部字型或圖示，所以沒有授權問題，手機上也比較快。

## 部署

見 [DEPLOY.zh-TW.md](DEPLOY.zh-TW.md)。
