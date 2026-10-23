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

**office-workflow-zh-tw** is an [Agent Skill](https://agentskills.io) for anyone writing workplace text in Traditional Chinese: email replies, meeting notes to action items, weekly reports, job posts, notices to parents or patients, 公文, and translation between English and Traditional Chinese. It removes Simplified-Chinese wording and AI phrasing, and never invents facts, laws or doses: gaps become placeholders.

- **Install on claude.ai:** download the [zip](https://github.com/Twaze0802/Craftongue/releases/latest/download/office-workflow-zh-tw.zip) and upload it under Settings → Capabilities → Skills.
- **Install for Claude Code, Codex, Cursor and other Agent Skills tools:** `npx skills add Twaze0802/Craftongue`
- Instructions can be written in English; the explanation comes back in English.

See the [skill's English README](office-workflow-zh-tw/README.md) for details.

## Website / 網站

The bilingual website lives in [`site/`](site/) (Astro). 雙語網站原始碼在 [`site/`](site/)。

## License / 授權

[MIT](LICENSE). Each skill folder also carries its own copy of the license. 採用 MIT 授權。

## Trademarks / 商標

Claude is a trademark of Anthropic. Codex is a trademark of OpenAI. Cursor is a trademark of Anysphere. This project is independent and not affiliated with or endorsed by them.
Claude 是 Anthropic 的商標，Codex 是 OpenAI 的商標，Cursor 是 Anysphere 的商標。本專案為獨立專案，與上述公司沒有關聯，也未獲其背書。
