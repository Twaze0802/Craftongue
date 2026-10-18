export const languages = {
  'zh-tw': { label: '繁體中文', short: '中', htmlLang: 'zh-Hant-TW', hreflang: 'zh-TW' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'zh-tw';

/** 給 [lang] 動態路由用的 getStaticPaths。 */
export function langPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}

/** 產生某語言版本的網址，path 不含語言前綴，例如 'skills/'。 */
export function localizePath(lang: Lang, path = '') {
  const clean = path.replace(/^\/+/, '');
  return `/${lang}/${clean}`;
}

/** 把目前網址換成另一個語言的同一頁。 */
export function switchLang(pathname: string, to: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (langs as string[]).includes(parts[0])) parts.shift();
  return localizePath(to, parts.length ? parts.join('/') + '/' : '');
}

export const ui = {
  'zh-tw': {
    brand: '匠語',
    brandAlt: 'Craftongue',
    tagline: '中英雙語 AI 技能工作室',
    nav: {
      home: '首頁',
      skills: '技能目錄',
      about: '關於我們',
      contact: '聯絡',
    },
    footer: {
      legal: '法律資訊',
      privacy: '隱私權政策',
      license: '授權條款',
      refund: '退款政策',
      rights: '匠語 Craftongue',
    },
    menu: '選單',
    switchTo: '切換語言',
    skipToContent: '跳到主要內容',
    draftNotice: '這一頁還是草稿，正式內容上線前會再更新。',
  },
  en: {
    brand: 'Craftongue',
    brandAlt: '匠語',
    tagline: 'Bilingual AI skills studio',
    nav: {
      home: 'Home',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    footer: {
      legal: 'Legal',
      privacy: 'Privacy Policy',
      license: 'License Terms',
      refund: 'Refund Policy',
      rights: 'Craftongue 匠語',
    },
    menu: 'Menu',
    switchTo: 'Switch language',
    skipToContent: 'Skip to content',
    draftNotice: 'This page is a draft. Final content will be added before launch.',
  },
} as const satisfies Record<Lang, unknown>;
