# 部署到 Cloudflare Pages

免費，不用綁信用卡。整個流程約 20 分鐘，**建議用電腦操作**。

> 這些步驟要由你本人登入操作。註冊 Cloudflare 會需要同意它的服務條款，請先確認可以再進行。

## 1. 建立專案（約 10 分鐘）

1. 登入 [Cloudflare 控制台](https://dash.cloudflare.com/)（沒有帳號就先註冊）。
2. 左側選「Workers 和 Pages」→「建立」→「Pages」→「連結到 Git」。
3. 授權 GitHub，選擇 `Twaze0802/Craftongue` 這個 repo。
4. 建置設定填這樣：

   | 欄位 | 填入 |
   |---|---|
   | 生產分支 | `main` |
   | 架構預設 | Astro |
   | 建置命令 | `npm run build` |
   | 建置輸出目錄 | `dist` |
   | 根目錄（進階） | `site` |

5. 按「儲存並部署」，等幾分鐘。完成後會得到一個 `https://<專案名稱>.pages.dev` 網址。

Node.js 版本由 `site/.node-version` 指定，不用另外設定。

## 2. 設定正式網址（約 5 分鐘）

如果 `.pages.dev` 網址不是 `https://craftongue.pages.dev`，或之後買了網域：

1. 專案頁面 →「設定」→「環境變數」→ 新增 `SITE_URL`，值填完整網址，例如 `https://craftongue.com`。
2. 到「部署」重新部署一次。

這個值會用在 canonical 和 hreflang 標籤，搜尋引擎靠它分辨中英文版本。

## 3. 綁定自己的網域（買網域後，約 5 分鐘）

專案頁面 →「自訂網域」→「設定自訂網域」→ 輸入網域，照畫面指示完成。網域也在 Cloudflare 買的話會自動設定好 DNS。**買網域要花錢，請先問家長。**

## 之後怎麼更新

把改動合併進 `main`，Cloudflare 會自動重新部署。開 PR 時也會自動產生預覽網址。
