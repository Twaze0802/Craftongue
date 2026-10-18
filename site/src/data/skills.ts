import type { Lang } from '../i18n/ui';

type Localized<T = string> = Record<Lang, T>;

export interface Skill {
  slug: string;
  version: string;
  status: Localized;
  line: Localized;
  title: Localized;
  summary: Localized;
  features: Localized<string[]>;
  modes: string[];
  install: Localized<{ tool: string; steps: string }[]>;
  example: { before: string; after: string; notes: Localized<string[]> };
  faq: Localized<{ q: string; a: string }[]>;
  repoPath: string;
}

export const skills: Skill[] = [
  {
    slug: 'taiwan-natural-writing',
    version: '0.1.0',
    status: { 'zh-tw': '測試中', en: 'Testing' },
    line: { 'zh-tw': '繁中寫作', en: 'Taiwanese Chinese writing' },
    title: {
      'zh-tw': '台灣自然中文改寫',
      en: 'Taiwan Natural Writing',
    },
    summary: {
      'zh-tw': '讓 AI 把文字改寫成自然的台灣繁體中文：去掉制式腔調、修正兩岸用語、改用台灣標點，也支援中英在地化。',
      en: 'Helps your AI rewrite and localize text into natural Taiwanese Traditional Chinese: less formulaic phrasing, Taiwan vocabulary, Taiwan punctuation, and English ↔ zh-TW localization.',
    },
    features: {
      'zh-tw': [
        '去掉制式的「AI 腔」，例如「此外」「總而言之」和空泛的形容詞。',
        '把中國用語換成台灣用語，例如視頻→影片、軟件→軟體，會先看上下文避免換錯。',
        '改成台灣常用的全形標點：「」、，、、、《》。',
        '支援中英互譯在地化，適用行銷文案、社群貼文、商務 email。',
        '絕不加入新資訊：人名、數字、價格、日期都和原文一樣。',
      ],
      en: [
        'Removes stiff, formulaic phrasing such as 此外, 總而言之 and empty buzzwords.',
        'Replaces Mainland China vocabulary with Taiwan usage (視頻 → 影片, 軟件 → 軟體), with context checks.',
        'Applies Taiwan full-width punctuation: 「」, ，, 、, 《》.',
        'Localizes English ↔ zh-TW for marketing copy, social posts, and business email.',
        'Never adds facts: names, numbers, prices, and dates stay exactly as in your source.',
      ],
    },
    modes: ['marketing', 'social', 'email', 'localize-en-zh', 'localize-zh-en', 'general'],
    install: {
      'zh-tw': [
        { tool: 'Claude Code', steps: '把整個技能資料夾複製到 ~/.claude/skills/taiwan-natural-writing/（個人用），或專案裡的 .claude/skills/taiwan-natural-writing/。' },
        { tool: 'claude.ai', steps: '把技能資料夾壓縮成 zip，到「設定 → 功能 → 技能」上傳。' },
        { tool: '其他工具', steps: '放到該工具讀取 Agent Skills 的位置，請參考各工具的說明。' },
      ],
      en: [
        { tool: 'Claude Code', steps: 'Copy the skill folder to ~/.claude/skills/taiwan-natural-writing/ (personal) or .claude/skills/taiwan-natural-writing/ in your project.' },
        { tool: 'claude.ai', steps: 'Zip the skill folder and upload it under Settings → Capabilities → Skills.' },
        { tool: 'Other tools', steps: 'Place it wherever your tool loads Agent Skills from. See your tool’s documentation.' },
      ],
    },
    example: {
      before: '在當今快速變化的時代，我們全新推出的智能保溫杯，不僅質量過硬，更具有極致的性價比！此外，它支持手機APP實時查看水溫，為您的健康生活全方位賦能。總而言之，這是一款不可或缺的好物，售價僅需 NT$890。',
      after: '全新智慧保溫杯，品質扎實、CP值高。用手機 App 就能隨時看水溫，喝水更安心。售價 NT$890。',
      notes: {
        'zh-tw': [
          '刪除制式用語：「在當今快速變化的時代」「此外」「總而言之」「全方位賦能」。',
          '用語在地化：智能→智慧、質量→品質、性價比→CP值、實時→隨時。',
          '事實保留：產品、功能、售價 NT$890 都沒變。',
        ],
        en: [
          'Removed formulaic phrases: 在當今快速變化的時代, 此外, 總而言之, 全方位賦能.',
          'Localized vocabulary: 智能 → 智慧, 質量 → 品質, 性價比 → CP值, 實時 → 隨時.',
          'Facts kept: the product, its feature, and the NT$890 price are unchanged.',
        ],
      },
    },
    faq: {
      'zh-tw': [
        { q: '需要付費或 API 金鑰嗎？', a: '不用。這是免費技能，採 MIT 授權，沒有任何程式、不連網路，也不需要 API 金鑰。' },
        { q: '我的文字會被傳到別的地方嗎？', a: '不會。技能只是給 AI 的文字指令，你的內容只由你原本使用的 AI 工具處理。' },
        { q: '可以用來躲避 AI 偵測嗎？', a: '不行，也不是為此設計的。這是行銷文案和在地化用的編輯工具。' },
        { q: '支援哪些 AI 工具？', a: '支援開放 Agent Skills 格式的工具，例如 Claude Code、claude.ai、Codex、Cursor。' },
      ],
      en: [
        { q: 'Does it cost anything or need an API key?', a: 'No. It is a free, MIT-licensed skill with no code, no network calls, and no API keys.' },
        { q: 'Is my text sent anywhere?', a: 'No. The skill is plain instructions for your AI. Your text is only processed by the AI tool you already use.' },
        { q: 'Can it be used to evade AI detection?', a: 'No, and it is not designed for that. It is an editing tool for marketing copy and localization.' },
        { q: 'Which AI tools does it support?', a: 'Any tool that supports the open Agent Skills format, such as Claude Code, claude.ai, Codex, and Cursor.' },
      ],
    },
    repoPath: 'taiwan-natural-writing',
  },
];
