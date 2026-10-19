# Test run 2026-10-19: English instructions and model comparison / 英文環境與模型比較

- Tool: Claude Code CLI (`claude -p --model <model>`), skill loaded from `.claude/skills/`.
- 12 original test prompts, all with **English instructions**: Simplified → zh-TW, zh-TW → English (Instagram caption, business email, Google Maps review), English → zh-TW (Threads post, casual chat, product announcement), Mainland internet slang, register checks (Dcard post, friends' LINE group, message to a boss), and a long AI-style blog intro.
- Graded by a separate AI grader against a fixed rubric: facts kept, nothing added, correct register, no Mainland wording or Chinglish, notes in the language of the instruction (from v0.3.0), one version only.
- Tester: AI (automated). Test texts are written by this project; no real users' posts were used.

| Version | Haiku | Sonnet | Opus |
|---|---|---|---|
| 0.2.0 (baseline) | 7/12 | 9/12 | – |
| 0.3.0 round 1 (stricter rubric: notes language) | 2/12 | 4/12 | 11/12 |
| 0.3.0 round 2 (fixes) | 3/12 | 9/12 | 11/12 |
| 0.3.0 round 3 (override rules at top) | **6/12** | **10/12** | 11/12 (round 2) |

**Main problems found and fixed:** notes written in Chinese when the user wrote in English; small added details (一天, 通勤, 產品, "We", emoji); "We're thrilled to announce" translated as 我們很高興宣布; multiple versions for short messages; blog-intro clichés kept.

**Known limits:**
- Haiku still often writes notes in Chinese for English instructions, and sometimes answers a yes/no question in Chinese. Its rewrites themselves are mostly fine. Recommend Sonnet or Opus for best results.
- Very short chat rewrites are sometimes handled without loading the skill (about 1–2 of 12 on Sonnet).
- Slang currency (what is "current" vs "dated") was compiled from general knowledge and search listings, not measured; review periodically.
