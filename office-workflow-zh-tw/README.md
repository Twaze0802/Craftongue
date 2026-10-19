# office-workflow-zh-tw

**[繁體中文說明](README.zh-TW.md)**

An Agent Skill for people who work in Taiwan offices and don't write code. Works with any AI tool that supports the open [Agent Skills](https://agentskills.io) format, such as Claude Code, claude.ai, Codex, and Cursor.

## What it does

**Main jobs**
- **Reply to emails** in natural Taiwan business tone, answering every question in the original email.
- **Meeting notes → action items**: a table of task, owner, deadline, and notes. Missing owners or dates are marked 待確認, never guessed.
- **Rough notes → weekly report**: done this week, in progress, blockers, next week.

**Taiwan-wording branch**
- Rewrites, polishes, or translates any text into natural Taiwanese Traditional Chinese (or into English): removes stiff "AI-sounding" phrasing, replaces Mainland vocabulary and slang, applies Taiwan punctuation, and keeps one consistent tone (formal, business, or casual chat).

**Never makes things up.** It uses only what you paste or tell it. Anything missing becomes a placeholder like 【請填入：出貨日期】 for you to fill in.

**Templates.** 20 Taiwan workplace templates (leave requests, quotes, payment reminders, delay notices, complaint replies, handover, parent notices, closure notices, and more).

**Scenario rules.** Nine fields (legal, medical, education, government 公文, finance and insurance, real estate, e-commerce support, HR, tech) each get Taiwan terms, a standard structure, and a **Never** list: no law article numbers, doses, rates, or citations from memory; no legal or medical judgment; no personal data in group messages; no discriminatory job-post conditions; no emoji or hype where they do not belong.

## Install

**claude.ai:** download the zip, then upload it in Settings → Capabilities → Skills.

**Claude Code:** copy the `office-workflow-zh-tw` folder to `~/.claude/skills/`.

## Profile (recommended)

Fill in `my-profile.md` (name, title, company, signature, register, banned words), or paste a block starting with 【我的設定】 into your claude.ai personal preferences. Drafts then use your details instead of placeholders.

## Use

> 幫我回這封信，我想答應但交期要延到 11 月 20 日：……

> 把這段會議記錄整理成待辦清單：……

> 幫我寫這週的週報：……

> Rewrite this for Taiwanese readers: ……

## Model compatibility

Best results on Sonnet and Opus. Haiku works but often writes its notes in Chinese even when you write in English. See `examples/` for test records.

## Safety

- No scripts, no network access, no API keys. Plain instructions and word lists only.
- Your text is processed only by the AI tool you already use.

## License

[MIT](LICENSE). All word lists and examples are original work by this project.
