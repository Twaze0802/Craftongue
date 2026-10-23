# Craftongue 匠語

**讓 AI 寫出自然、道地的繁體中文職場文字。** 免費、開源的 AI 技能（Agent Skill），專門處理 email 回覆、會議記錄轉待辦、週報、公文、給家長或病患的通知，並把簡體慣用詞和 AI 腔改成自然的繁體中文。

**Free, open-source Agent Skill for workplace writing in Traditional Chinese:** email replies, meeting notes to action items, weekly reports, 公文 (government letters), and natural Traditional Chinese wording. [English details below](#english).

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
![Version](https://img.shields.io/badge/version-0.6.2-blue.svg)
![Format: Agent Skills](https://img.shields.io/badge/format-Agent%20Skills-orange.svg)

## 改寫前後

> **改寫前（AI 常見的寫法）**
> 關於上週我們溝通的項目，現將相關文件發給您，請查收。由於我方服務器升級，原定於10月25日的上線時間需延後至10月28日。給您帶來的不便深表歉意。如有任何問題，請隨時聯繫我。

> **改寫後**
> 關於上週討論的專案，相關文件已附在信中，再麻煩您查收。
>
> 因為我們的伺服器正在升級，原定 10 月 25 日的上線時間需要延後到 10 月 28 日，造成您的不便，非常抱歉。
>
> 如果有任何問題，歡迎隨時與我聯絡，謝謝您。

項目→專案、服務器→伺服器、聯繫→聯絡，日期和事實一個都沒改。更多例子在 [`examples/`](office-workflow-zh-tw/examples/)。

## 三步驟安裝

**claude.ai（不用寫程式）**
1. 下載 [office-workflow-zh-tw.zip](https://github.com/Twaze0802/Craftongue/releases/latest/download/office-workflow-zh-tw.zip)。
2. 到「設定 → 功能 → 技能」上傳 zip。
3. 直接說「幫我回這封信：……」就會用到。

**Claude Code、Codex、Cursor 等支援 Agent Skills 的工具**

```bash
npx skills add Twaze0802/Craftongue
```

也可以把 [`office-workflow-zh-tw/`](office-workflow-zh-tw/) 資料夾複製到 `~/.claude/skills/`。

## 它會做什麼

- **回 email：** 用自然的商務語氣回信，原信的每個問題都會回到。
- **會議記錄轉待辦：** 整理成「待辦事項／負責人／期限」表格，沒寫到的標「待確認」，不亂猜。
- **週報：** 零散筆記整理成「本週完成／進行中／問題／下週計畫」。
- **20 種範本：** 請假信、報價、付款提醒、出貨延遲、客訴回覆、離職交接、家長通知、停診公告等。
- **9 種專業場景規則：** 法律、醫療、教育、公文、金融保險、房地產、電商、人資、科技。不自己編法條、藥量或利率，醫美廣告不寫優惠和術前術後對比。
- **繁中用語分支：** 簡轉繁、去 AI 腔、換掉簡體慣用詞、統一繁中標點。

**只用你給的資訊。** 缺的地方會留下【請填入：出貨日期】讓你自己補。

## 測試結果

50 題沒在開發時用過的新題目，由另一個 AI 盲評「全部項目通過」的比例：

| 模型 | 不裝技能 | 裝這個技能 |
|---|---|---|
| Haiku | 18% | 48% |
| Sonnet | 18% | 66% |
| Opus（抽 19 題） | 32% | 84% |

每題只跑一次、評分者是 AI，數字僅供參考。

## 安全

沒有程式、不連網路、不需要 API 金鑰，只有文字指令和詞彙表。發現問題請看 [SECURITY.md](SECURITY.md)。

## 喜歡的話

按右上角的 ⭐ Star，讓更多需要的人找得到。用起來哪裡怪怪的，歡迎開 [Issue](https://github.com/Twaze0802/Craftongue/issues) 告訴我們，貢獻方式見 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## English

### What it is

**office-workflow-zh-tw** is a free, open-source [Agent Skill](https://agentskills.io) that makes AI assistants write workplace text the way a native Traditional Chinese speaker would. It is built for people who don't code: office staff, teachers, clinic and shop owners, and anyone who writes emails, notices or reports in Traditional Chinese, or translates between English and Traditional Chinese.

Without it, AI output in Traditional Chinese often reads like a machine translation of Simplified Chinese: wrong vocabulary (項目 for "project", 服務器 for "server", 聯繫 for "contact"), stiff "AI-sounding" phrases, mixed punctuation, and facts the user never gave. This skill fixes those problems.

### Before and after

The example at the top of this page, explained:

| | Before | After |
|---|---|---|
| Vocabulary | 項目, 服務器, 聯繫 (Simplified-Chinese usage) | 專案, 伺服器, 聯絡 (standard Traditional Chinese usage) |
| Tone | Stiff, formulaic apology | Polite, natural business tone (再麻煩您, 歡迎隨時與我聯絡) |
| Layout | One block of text | Three short paragraphs, one point each, easy to read on a phone |
| Facts | Oct 25 → Oct 28, attachment, server upgrade | Exactly the same: nothing added, nothing dropped |

### What it does

- **Email replies:** answers every question in the original email in a natural business tone, and keeps your decision (accept, decline, delay) as you stated it.
- **Meeting notes → action items:** a table of task, owner, deadline and notes. Missing owners or dates are marked 待確認 (to be confirmed), never guessed.
- **Weekly reports:** turns scattered notes into done / in progress / issues and help needed / next week.
- **20 templates:** leave requests, quotes, payment reminders, shipping delays, complaint replies, handover notes, notices to parents, clinic closure notices and more.
- **Rules for 9 professional fields:** legal, medical, education, government letters (公文), finance and insurance, real estate, e-commerce support, HR and tech. Each field has its own terms, standard structure and a "never" list: no invented law articles, drug doses, interest rates or citations; no legal or medical judgments; no personal data in group messages; no discriminatory job-post conditions; no price promotions or before/after claims in clinic ads.
- **Wording branch:** rewrites, polishes or translates any text into natural Traditional Chinese (or English). It converts Simplified to Traditional, replaces Simplified-Chinese vocabulary, removes AI phrasing, fixes punctuation and keeps one consistent tone: formal, business or casual.
- **No invented facts:** it uses only what you paste or tell it. Gaps become placeholders such as 【請填入：出貨日期】 ("fill in: shipping date") for you to complete.

### Install

**claude.ai (no coding needed)**
1. Download [office-workflow-zh-tw.zip](https://github.com/Twaze0802/Craftongue/releases/latest/download/office-workflow-zh-tw.zip).
2. Go to Settings → Capabilities → Skills and upload the zip.
3. Ask for what you need. The skill loads on its own when the request is about Chinese writing.

**Claude Code, Codex, Cursor and other tools that support Agent Skills**

```bash
npx skills add Twaze0802/Craftongue
```

Or copy the [`office-workflow-zh-tw/`](office-workflow-zh-tw/) folder into `~/.claude/skills/` (or your tool's skills folder).

### Optional: your profile

Fill in your name, title, company, signature and preferred tone once, and every draft uses them instead of placeholders. Either paste a line starting with 【我的設定】 into your AI tool's personal preferences, or edit [`my-profile.md`](office-workflow-zh-tw/my-profile.md) before uploading. See the [skill README](office-workflow-zh-tw/README.md) for the format.

### Example requests

You can write instructions in English. The draft is in Chinese when you ask for Chinese, and the notes about what changed come back in English.

> Reply to this email in Traditional Chinese. I want to accept, but delivery moves to Nov 20: ……

> Turn these meeting notes into an action-item table: ……

> Write this week's report from my notes: ……

> Translate my Instagram caption into natural Traditional Chinese: ……

> Rewrite this notice for parents so it sounds natural and polite: ……

### Test results

We tested on 50 new tasks that were never used during development. A separate AI grader, blind to which version wrote each answer, checked whether every requirement of the task was met:

| Model | Without the skill | With the skill |
|---|---|---|
| Haiku | 18% | 48% |
| Sonnet | 18% | 66% |
| Opus (19-task sample) | 32% | 84% |

With Sonnet, answers with no serious error (an invented fact, a wrong decision made for the user, a broken format) rose from 30% to 78%. Each task ran once and the grader is an AI, so treat these numbers as a guide, not a guarantee. Works best with Sonnet and Opus. Haiku sometimes doesn't load the skill on its own; naming the task clearly ("reply to this email", "turn these notes into to-dos") helps.

### Safety and privacy

- No code, no network calls, no API keys: only text instructions and word lists.
- Your text is processed only by the AI tool you already use. This skill sends nothing anywhere.
- To report a problem privately, see [SECURITY.md](SECURITY.md).

### Feedback

If something reads wrong, please open an [issue](https://github.com/Twaze0802/Craftongue/issues) with the input, the output and what you expected. Contributions are welcome: see [CONTRIBUTING.md](CONTRIBUTING.md). If the skill helps you, a ⭐ star helps others find it.

## Website / 網站

The bilingual website lives in [`site/`](site/) (Astro). 雙語網站原始碼在 [`site/`](site/)。

## License / 授權

[MIT](LICENSE). Each skill folder also carries its own copy of the license. 採用 MIT 授權。

## Trademarks / 商標

Claude is a trademark of Anthropic. Codex is a trademark of OpenAI. Cursor is a trademark of Anysphere. This project is independent and not affiliated with or endorsed by them.
Claude 是 Anthropic 的商標，Codex 是 OpenAI 的商標，Cursor 是 Anysphere 的商標。本專案為獨立專案，與上述公司沒有關聯，也未獲其背書。
