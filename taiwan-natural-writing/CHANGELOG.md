# Changelog

All notable changes to this skill are documented here. Versions follow [Semantic Versioning](https://semver.org/).

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
