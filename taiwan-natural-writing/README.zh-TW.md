# taiwan-natural-writing

**[English README](README.md)**

一個 AI 技能（Agent Skill），讓 AI 把文字改寫成**自然的台灣繁體中文**。只要你用的 AI 工具支援開放的 [Agent Skills](https://agentskills.io) 格式就能用，例如 Claude Code、claude.ai、Codex、Cursor。

## 它會做什麼

- 去掉制式的「AI 腔」：例如「此外」「總而言之」「在當今快速變化的時代」，以及「賦能」這類空泛用語。
- 把中國用語換成台灣用語：視頻→影片、軟件→軟體、質量→品質。會先看上下文，避免換錯（例如物理的「質量」不會改）。
- 改成台灣常用的全形標點：「」、，、、、《》。
- 支援中英互譯在地化，適用行銷文案、社群貼文、商務 email。
- **絕不加入新資訊。** 人名、數字、價格、日期都和原文一模一樣。

模式：行銷文案、社群貼文、正式 email、英翻中在地化、中翻英在地化、一般。

## 適合誰

台灣的小編、行銷人員、創作者、小店家，以及要寫給台灣客戶看的外國公司。

這是一個文字風格和在地化的編輯工具，不是用來躲避 AI 偵測的工具，也不這樣宣傳。

## 安裝

**Claude Code：** 把整個資料夾複製到 `~/.claude/skills/taiwan-natural-writing/`（個人用），或專案裡的 `.claude/skills/taiwan-natural-writing/`。

**claude.ai：** 把這個資料夾壓縮成 zip，到「設定 → 功能 → 技能」上傳。

**其他工具：** 放到該工具讀取 Agent Skills 的位置（請看各工具說明）。

## 使用方式

直接用平常說話的方式要求就好：

> 幫我把這段商品文案改成自然的台灣用語：……

> 把這封 email 改成台灣商務語氣：……

使用前後對照請看 [`examples/`](examples/)。

## 模型相容性

已在 Claude Code 上用 Haiku、Sonnet、Opus 測試過（見 `examples/test-run-2026-10-19-english.md`）。Sonnet 和 Opus 效果最好。Haiku 改寫品質不錯，但你用英文下指令時，它常常還是用中文寫說明。

## 安全

- 沒有任何程式、不連網路、不需要 API 金鑰。整個技能只有文字指令和一份詞彙表。
- 你的文字只會由你原本使用的 AI 工具處理。

## 授權

[MIT](LICENSE)。`references/` 裡的兩岸用語對照表是本專案自行整理的原創內容。

## 更新紀錄

請看 [CHANGELOG.md](CHANGELOG.md)。
