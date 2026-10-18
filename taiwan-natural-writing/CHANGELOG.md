# Changelog

All notable changes to this skill are documented here. Versions follow [Semantic Versioning](https://semver.org/).

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
