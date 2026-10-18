# taiwan-natural-writing

**[繁體中文說明](README.zh-TW.md)**

An Agent Skill that rewrites or localizes text into natural **Taiwanese Traditional Chinese (zh-TW)**. Works with any AI tool that supports the open [Agent Skills](https://agentskills.io) format, such as Claude Code, claude.ai, Codex, and Cursor.

## What it does

- Removes stiff, formulaic phrasing ("此外", "總而言之", "在當今快速變化的時代", buzzwords like 賦能).
- Replaces Mainland China vocabulary with Taiwan usage (視頻 → 影片, 軟件 → 軟體, 質量 → 品質), with context checks so it doesn't over-replace.
- Applies Taiwan full-width punctuation (「」, ，, 、, 《》).
- Localizes English ↔ zh-TW for marketing, social posts, and business email.
- **Never adds facts.** Names, numbers, prices, and dates stay exactly as in your source.

Modes: `marketing`, `social`, `email`, `localize-en-zh`, `localize-zh-en`, `general`.

## Who it's for

Marketers, social media managers, creators, small shops in Taiwan, and international companies writing for Taiwanese customers.

This is a style and localization editor. It is not designed or marketed as a tool for avoiding AI detection.

## Install

**Claude Code:** copy this folder to `~/.claude/skills/taiwan-natural-writing/` (personal) or `.claude/skills/taiwan-natural-writing/` inside your project.

**claude.ai:** zip this folder, then upload it in Settings → Capabilities → Skills.

**Other tools:** place the folder where your tool loads Agent Skills (see your tool's docs).

## Use

Just ask in plain language:

> 幫我把這段商品文案改成自然的台灣用語：……

> Localize this landing page paragraph into Traditional Chinese for Taiwan: …

See [`examples/`](examples/) for before/after samples.

## Model compatibility

Tested on Claude Code with Haiku, Sonnet, and Opus (see `examples/test-run-2026-10-19-english.md`). Best results on Sonnet and Opus. Haiku rewrites well but often writes its notes in Chinese even when you write in English.

## Safety

- No scripts, no network access, no API keys. The skill is plain instructions plus a word list.
- Your text is processed only by the AI tool you already use.

## License

[MIT](LICENSE). The vocabulary list in `references/` is original work by this project.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
