# Office workflows for Taiwan workplaces (original, v0.4.0)

Part of `office-workflow-zh-tw`. After drafting, always run the Taiwan-wording pass in `taiwan-wording/rules.md`.

Three drafting modes for people who do not write code. Unlike rewriting, these modes create new text, so they follow a stricter source rule:

**Source rule:** use only facts from what the user pasted (the incoming email, the meeting notes, the bullet list) and what the user told you. Anything you need but were not given (a date, a name, a number, a decision) becomes a placeholder 【請填入：…】 (English output: [TBD: …]). Never guess. List all placeholders at the end of the notes so the user can fill them quickly.

## 1. `email-reply`: reply to an email in Taiwan business tone

Input: the email received, plus the user's intent ("答應但要延到下週", "婉拒", "問報價").

1. Identify the sender's asks and questions. Each one gets an answer or a placeholder; none is skipped.
2. Use the user's intent. If no intent is given, write a neutral reply that confirms receipt and answers only what the facts allow; put the rest in placeholders.
3. Register: semi-formal by default (您好、謝謝您的來信、麻煩您、再請協助、如有任何問題，歡迎隨時與我聯絡). Use formal 公文 wording only for government or institutions. If the incoming email is casual and from a colleague, match it.
4. Structure: greeting with name and title as the sender used them (王經理您好：) → one-line thanks or reference → answers in the sender's order, one short paragraph each → next step → closing. Sign-off is a placeholder 【署名】 unless the user gave a name.
5. Declining: thank, decline clearly in one sentence, give the reason only if the user gave one (otherwise no reason at all, not even a vague 因為其他安排), offer an alternative only if the user gave one.
   Accepting with a change (e.g. a later date): state the change plainly; give a reason only if the user gave one.
   Customer service: never state an order status, delivery date, or next step you were not told; use placeholders (目前訂單狀態：【請填入】).
6. Do not promise refunds, discounts, deadlines, or compensation the user did not authorize.
7. Language: reply in the language of the incoming email unless the user asks otherwise; notes follow the user's instruction language.

## 2. `meeting-to-todo`: meeting notes → action items

Input: messy notes, a transcript, or a chat log.

1. Extract every action: who does what, by when. Ignore discussion that has no action.
2. Output a table: | 待辦事項 | 負責人 | 期限 | 備註 |. Keep the order in which actions appear.
3. Owner or deadline not stated → 待確認 (English: TBD). Do not assign people or invent dates. Relative dates ("下週三", "by Friday") stay exactly as written. Do not add action items that are not in the notes; a decision is not an action item.
4. Above the table, a 2–4 line 會議重點 with decisions made (only decisions stated in the notes). Below it, 待確認事項 listing open questions.
5. Each action starts with a verb (確認、寄出、更新、聯絡). Keep names exactly as written.
6. No commentary on the meeting and no advice.

## 3. `weekly-report`: bullet notes → weekly report

Input: the user's rough notes for the week (often fragments, mixed Chinese/English).

1. Default structure (use the company's template instead if the user gives one):
   - **本週完成**: what was finished, with numbers kept exactly
   - **進行中**: work in progress and its status
   - **問題與需要協助**: blockers, only if the notes mention any
   - **下週計畫**: only what the notes say is next
2. Turn fragments into short, complete sentences in semi-formal register. One item per line; no bold lead-ins.
3. Do not inflate: 「修了幾個 bug」 does not become 「大幅提升系統穩定性」. Keep the user's own scale and numbers.
4. Do not add sections with nothing in them; omit a section if the notes have nothing for it.
5. Common workplace English (bug、deadline、KPI、PR、meeting) may stay if the user wrote it that way.

## Common mistakes to avoid

- Filling gaps with plausible guesses (a deadline, an owner, a reason).
- Over-formal wording: 茲因、敬請鑒核 in an everyday work email.
- Mainland workplace jargon: 對齊、抓手、閉環、賦能、拉通、複盤 (→ 確認、重點、完整流程、協助、協調、檢討).
- Long apology chains (非常抱歉造成您的困擾，深感歉意，再次致歉) → one apology sentence.
