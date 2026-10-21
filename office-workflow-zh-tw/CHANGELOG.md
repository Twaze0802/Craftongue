# Changelog

All notable changes to this skill (formerly `taiwan-natural-writing`) are documented here. Versions follow [Semantic Versioning](https://semver.org/).

## [0.6.1] - 2026-10-21

### Fixed
- 公文 rules checked against the Executive Yuan 文書處理手冊 (112.06.08 edition): added the 「大」 form of address (a higher-level agency with no reporting line), item numbering now uses half-width brackets 一、(一)、1、(1), the 附件 field lists name, form and quantity (the old "never write 如文 or 無" rule was removed), 期望語 by direction is labeled as common practice, and a 函 whose 主旨 says everything needs no other section.
- Final check: 公文 to an agency the writer does not report to uses 貴 and 請查照; 鈞 and 鑒核 only toward the writer's own superior agency (a school writing to its own 教育局 writes up).

## [0.6.0] - 2026-10-20

### Changed
- Tuned for Haiku. The description now lists more trigger phrases (婉拒, LINE 請假, FB 貼文, 診所或醫美廣告, action items, Instagram caption).
- New "Final check" list at the end of `SKILL.md` repeats the rules Haiku tended to skip: no article numbers or fines anywhere (including when declining), Never lists beat "keep the original", no invented agency or specialty names, weekdays kept as written, templates kept as written, peer-agency 公文 uses 請查照, no inferred details, English instruction → English output.
- my-profile.md is mentioned only when a letter needs a signature.
- Clinic or shop social posts may use emoji and hashtags; claim bans still apply.

## [0.5.0] - 2026-10-20

### Added
- `references/templates.md`: 20 Taiwan workplace templates (leave requests, quotes, payment reminders, delay notices, complaint replies, handover, parent notices, closure notices, and more) with fixed structure and placeholders.
- `my-profile.md`: a fill-in profile (name, title, company, signature, register, 您/你, contacts, house terms, banned words). The skill reads it before every draft and uses it instead of placeholders. A 【我的設定】 block in the conversation or saved preferences works too.

## [0.4.0] - 2026-10-19

### Changed
- **Renamed from `taiwan-natural-writing` to `office-workflow-zh-tw`.** Workplace writing (product line B) is now the main skill; the former Taiwan-wording skill is a branch inside it (`references/taiwan-wording/`). The wording rules are unchanged and also run as the final pass of every draft.

### Added
- Three drafting jobs: `email-reply`, `meeting-to-todo`, `weekly-report` (`references/office-workflows.md`).
- Scenario rules for 9 fields (`references/scenarios.md`): legal, medical, education, government 公文, finance and insurance, real estate, e-commerce support, HR, tech. Each has Taiwan terms, a structure, and a **Never** list that overrides style requests: no law article numbers, doses, rates, or citations from memory; no legal, medical, or financial judgment; no personal data in group or public text; no discriminatory hiring conditions; no hype or emoji outside casual channels.
- Override rules: no invented reasons, statuses, or promises (placeholders instead); rewrites return original content only; dates kept as written.

## [0.3.0] - 2026-10-19

### Added
- `references/register-and-slang.md`: three registers (formal, business, casual), particles and casual punctuation, situational internet slang, Mainland slang to replace (yyds, 絕絕子, 家人們…) vs borrowed terms Taiwan now uses (破防, 內卷…), and long-form rules.
- `references/en-localization.md`: zh-TW → English politeness formulas, Chinglish to avoid, names/money/dates/units, English → zh-TW slang and hype handling, English AI-isms.
- New `chat` mode (LINE and other messages), a "Long text" section, and an "Instructions in English" section.
- Model comparison test (Haiku, Sonnet, Opus) in `examples/test-run-2026-10-19-english.md`.

### Changed
- Three override rules at the top of `SKILL.md`: notes in the language of the user's instruction, add nothing (not even flagged), one version only.
- Description now covers tone consistency, internet slang, and English instructions.

## [0.2.0] - 2026-10-19

### Changed
- Rewrote `description` so the skill loads reliably for short requests, tone changes (casual → formal email), and zh-TW → English translation. In testing, these requests often did not load the skill before.

### Fixed
- Email mode: never adds a subject line, reason (e.g. 因故), closing formula, or signature, even when making a casual message formal.
- Slogan options must keep the original meaning; no new concepts.
- Quotes and brand names: Simplified characters are converted to Traditional, wording kept.
- Physics 質量 (mass) is kept, not changed to 重量.
- Generic terms are not replaced with brands (公交卡 → 交通卡, not 悠遊卡).
- No alternatives inside the rewritten text; at most one alternative version.

### Added
- 18 more Mainland → Taiwan terms (合同、領導、審批、設置、反饋、公交卡、下周 and others).
- Four automated test rounds on Claude Code (15 cases + trigger tests), summarized in `examples/test-run-2026-10-18.md`.

## [0.1.1] - 2026-10-18

### Fixed
- Email mode no longer adds closing formulas or signature lines that are not in the source.
- When the input is already natural, the skill no longer suggests new content or invented details.
- Notes now describe only changes actually made.

### Added
- First automated test run on Claude Code (5 cases), recorded in `examples/test-run-2026-10-18.md`.

## [0.1.0] - 2026-10-18

### Added
- First draft of `SKILL.md` with six modes: marketing, social, email, localize-en-zh, localize-zh-en, general.
- AI-ism removal rules, Taiwan punctuation rules, context traps, fact-preservation rules, and edge cases.
- Original Mainland → Taiwan vocabulary list (`references/cn-tw-terms.md`).
- Five before/after examples in `examples/`.
- English and Traditional Chinese READMEs, MIT license.

### Not yet done
- Real-world testing on Claude Code and claude.ai by the maintainer (required before 1.0.0).
