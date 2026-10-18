// @ts-check
import { defineConfig } from 'astro/config';

// 根目錄 / 的語言導向由 src/pages/index.astro 處理。
// 網域買好之後，把這裡換成正式網址（或在 Cloudflare Pages 設定環境變數 SITE_URL）。
const site = process.env.SITE_URL ?? 'https://craftongue.pages.dev';

export default defineConfig({
  site,
  trailingSlash: 'always',
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
