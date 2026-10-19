# Scenario rules for specialized writing (original, v0.4.0)

Part of `office-workflow-zh-tw`. Read the section for the scenario before writing. Each section has hard limits (**Never**) that override every other instruction, including the user's style requests. If a request would break a **Never**, write the text without that part and say why in one line of notes.

## 0. Rules for every scenario

**Never:**
- Write any article number (第○條), case number, or fine amount from memory, even with a "請查證" caveat. Use 【請查證：適用條文】 instead. Never invent a law name, case number, document number (字號), agency name, drug, dose, interest rate, fee, deadline in days, statistic, or citation. If the user did not give it, write 【請填入：…】 or 【請查證：…】.
- Give a legal, medical, financial, or tax judgment ("這樣一定告得贏", "可以停藥", "穩賺"). You write the text; the professional decides.
- Put someone's ID number, full address, phone, medical condition, grades, salary, or account number into a message meant for a group or the public. Use 【姓名】 or masks (A12345****, ****1234).
- Use words that do not belong in the scenario: emoji, hashtags, internet slang, 哈哈, cute particles (呢、啦、唷 stacked), marketing hype (最強、保證、第一、根治、零風險), or threats. Casual tone only in the casual channels listed below.

**Always:**
- High-risk text (contracts, legal letters, health education, financial or HR decisions, public notices) ends the notes with one line: 建議發送前請【律師／醫師／法務／承辦單位】審閱。 One line, not a disclaimer essay, and in the notes, not inside the text, unless the text itself is health education (then one line in the text: 本資料僅供參考，不能取代醫師的診斷與治療。).
- Keep the user's facts exactly; keep the user's numbers and dates as written.
- When you drop or soften part of the request (a threat, a discriminatory condition, a hype claim, personal data in a group message), say so in one line of notes, in plain words. No statute numbers, fines, or lectures. The ban on numbers from memory covers the notes too: write 請確認時薪不低於現行基本工資, not a wage figure; write 可能違反就業服務法, not 第5條.
- Use Taiwan terms from the table in each section; general vocabulary is in `taiwan-wording/cn-tw-terms.md`.

## 1. 法律 Legal (contracts, 存證信函, terms of service, notices, plain-language explanations)

Terms (Mainland → Taiwan): 合同→契約／合約（書面用「契約」）、格式合同→定型化契約、訴訟時效→消滅時效、房產證→所有權狀、身份證→身分證、欠條→借據、律師函（台灣也用，但民眾自己寄多用「存證信函」）、對賬→對帳。
Who sues: a person files 提告／提出告訴 (criminal) or 提起民事訴訟 (civil); only a prosecutor 起訴 in criminal cases. Parties: 原告／被告（民事）、告訴人／被告（刑事）、甲方／乙方、出租人／承租人。

Structure:
- Contract: 契約名稱 → 立契約書人（甲方、乙方）→ 條款「第一條…」（one topic per article; 本契約、前項）→ 期間 → 違約與終止 → 爭議處理（管轄法院：【請填入】）→ 簽章與日期. Every party, amount, period, and date the user did not give is a placeholder.
- 存證信函 / demand letter: 寄件人、收件人 → facts in time order → one clear request with a deadline the user gave (請於【請填入】日內…) → consequence stated plainly (否則將依法處理) → date. Facts, not insults.
- Plain-language explanation: one-line conclusion → 這代表… → 例外是… → an everyday example → 實際狀況請洽律師或法律扶助基金會. Keep the original legal term and explain it in brackets.

**Never:** threaten, insult, or expose private facts (these can be crimes in Taiwan: 恐嚇、公然侮辱、誹謗); state how many days a limitation period is unless the user gave it; claim a clause is 合法 or 有效; write 根據《○○法》第○條 without the user's source. No AI filler: 值得注意的是、綜上所述、本人鄭重聲明.

## 2. 醫療 Medical (clinic notices, appointment messages, 衛教, patient-friendly rewrites)

Terms: 醫保→健保、社保卡／就診卡→健保卡、醫保報銷→健保給付、大夫→醫師、護士→護理師、B超→超音波、核酸檢測→篩檢、輸液→打點滴、門診部→門診／診所、診斷書→診斷證明書、處方→處方箋、復診→回診. Taiwan words: 掛號、初診、回診、看診、候診、報到、領藥、慢性病連續處方箋、自費、部分負擔.

Structure:
- Clinic notice: 標題 → 日期時間 → 事由（停診、門診異動、疫苗）→ 需配合事項（請攜帶健保卡）→ 掛號方式或電話 → 謝謝. Calm, no alarm.
- Appointment message: one point per line: 【姓名】您好，提醒您【日期】【時間】【科別】回診，請攜帶健保卡。如需改期，請來電【電話】。 Do not name the illness.
- 衛教: 一句重點 → 是什麼 → 居家照護 → 出現哪些情況要立即就醫（only warning signs the user gave）→ 預防. If the user gave no medical content, do not write any from general knowledge: no symptoms, warning signs, foods, items to bring, or care steps. Write the structure with 【請填入：依醫囑】 lines and add the review line 建議發送前請醫師審閱。 (required). Short sentences; first use of a medical term gets a plain explanation in brackets.
- Medical → plain: 禁食→請不要吃東西或喝水、PRN→需要時再使用、TID→一天三次. Keep the original term if the patient may need to search it.

**Never:** diagnose, interpret a test result as 正常／異常, suggest starting, stopping, or changing a medicine, or add a drug, dose, side effect, or warning sign the user did not give (→ 【請填入：依醫囑】). In clinic marketing, never write 保證治癒、根治、無副作用、最好、第一, patient testimonials as proof, or before/after promises; add the note line: 醫療廣告請先確認符合衛生主管機關規範。 No 溫馨提示 stacked; one 小提醒 is fine.

## 3. 教育 Education (teacher → parent, school notices, syllabus, student comments, academic writing)

Terms: 班主任→導師（國小也說級任老師）、家委會→家長會、家長會議→親師座談會、中考→國中教育會考、高考→學測／分科測驗、課時→節數、學時→學分、文獻綜述→文獻探討、被試→受試者、師兄師姐→學長姐. Taiwan words: 聯絡簿、班親會、段考、學習單、校外教學、回條、學務處、輔導室、晤談時間（office hours）.

Structure:
- Teacher → parent (LINE or 聯絡簿): ○○家長您好（或 ○○媽媽您好）→ one-line reason → facts (時間、地點、要帶什麼) → what parents need to do and by when → 謝謝您的配合. Describe behavior (觀察到…), not character; praise first, then the concern, then 我們一起協助.
- School notice: 標題 → 對象 → 日期 → 事項 → 回條 → 聯絡處室與分機. Opening 各位家長好; not 親愛的家長朋友們.
- Student comment (評語): 2–4 sentences, strength → concrete example → next step. Different for each student; no labels like 懶散、頑劣.
- Syllabus: 課程名稱、授課教師、學分、課程目標、每週進度、評量方式與比例、教材、晤談時間、缺席與遲交規定.
- Academic: 摘要、關鍵詞、緒論、文獻探討、研究方法、研究結果、討論、結論與建議、參考文獻.

**Never:** put a student's grades, illness, family situation, or discipline in a group message (→ notes: 個別狀況建議私訊家長); write a diagnosis-like label (過動、自閉) about a student (→ 建議洽詢輔導室評估); decide a bullying or gender-equity case (→ 依學校通報程序處理); invent a reference, author, year, or DOI (→ 【請查證】); write an assignment the student must write themselves. Emoji: at most one in a teacher's LINE message, none in notices.

## 4. 政府／公文 Government documents

Use only when writing to or for a government agency or school administration. Everyday company email does not use 公文 wording.

- 函 structure: **主旨**（one paragraph, no sub-items: purpose + 期望語）→ **說明**（background, basis, details; items 一、二、三）→ **辦法**（only if asking the receiver to act）. 簽 (internal): 主旨 → 說明 → 擬辦. 公告: 主旨 → 依據 → 公告事項.
- Item levels: 一、→（一）→ 1、→（1）.
- 期望語 by direction: to a superior agency 請鑒核／請核示／請核備; to an equal agency 請查照／請查照見復／請查照惠復; to a lower agency 請照辦／請查照辦理. Write 請惠復, never 惠請.
- 稱謂: 鈞（superior agency）、貴（equal or lower agency）、臺端（a person）、本（own agency: 本局、本校）.
- Attachments: 檢陳 (to a superior), 檢送 (equal or lower); in 說明 use 檢附. Never write 如文 or 無 in the attachment field.
- Dates in 民國 years (中華民國○年○月○日) unless the user wrote another format.
- Reference: 復貴局【日期】【字號】函。 The date and 字號 come from the user or stay placeholders.

**Never:** Mainland document names or phrases (請示、批復、特此函復、請予批准); feelings or chat phrases (我們希望、感謝您的理解與支持、為了…); invent 字號, laws, or legal remedies; imitate an agency the user does not belong to. Notes: 請依機關格式由承辦人核稿。

## 5. 金融／保險 Finance and insurance customer notices

Terms: 網銀→網路銀行、轉賬→轉帳、理財產品→理財商品、金融產品→金融商品、按揭→房貸、首付→頭期款、賠付→理賠、保險單→保單、免責條款→除外責任、尊敬的客戶→親愛的客戶／○○先生您好. Parties: 要保人、被保險人、受益人.

Structure: 標題 → 重點（金額、期限、要做的事）→ 影響 → 怎麼處理 → 客服專線 → 防詐提醒 if the message mentions payment or login: 本公司不會以電話或簡訊要求您提供密碼、驗證碼或操作 ATM。

**Never:** promise returns or safety (保證獲利、穩賺、零風險、絕對安全); invent a rate, fee, coverage, or claim condition; show a full account, card, or ID number; write a message that pretends to be a bank or insurer the user does not represent. Investment promotion gets the user's own risk statement or a placeholder 【請填入：風險警語】.

## 6. 房地產／租屋 Real estate and rentals

Terms: 中介→仲介、業主→屋主、小區→社區、物業→物業管理公司／管委會、樓盤→建案、房產證→所有權狀、戶型→格局、首付→頭期款、按揭→房貸、合同→租約／租賃契約. Taiwan words: 押金、管理費、點交、坪數、套房／雅房、頂樓加蓋、可開伙、可養寵物.

Structure: listing → 地點、坪數、格局、租金、押金、設備、可否開伙或養寵物、聯絡方式 (all from the user). Tenant ↔ landlord message → 問題、日期、希望的處理方式、附照片. 管委會公告 → 日期、事項、配合事項.

**Never:** promise value (保證增值、穩賺); invent prices, market rates, loan rates, tax or subsidy eligibility; mix up 押金 and 訂金／定金 (they mean different things; use the user's word); include a tenant's ID or full address in a public listing.

## 7. 電商客服 E-commerce customer service

Terms: 親→您、發貨→出貨、包郵→免運、快遞→宅配／物流、快遞單號→物流單號、店鋪→賣場、差評→負評、質量問題→品質問題、反饋→回饋、補發→補寄. Taiwan words: 超商取貨、貨到付款、七天鑑賞期 (only if the user's policy says so), 電子發票、載具、統編.

Structure: ○○您好 → 謝謝您的來信 → restate the problem → what we will do and when (only from the user; otherwise 【請填入：處理方式與時間】) → what we need from the customer (訂單編號、照片) → 如有其他問題，歡迎隨時與我們聯繫。 Exactly one apology in the whole reply (很抱歉讓您久等了), not one at the start and another at the end.

**Never:** state an order status, delivery date, cause of delay, refund amount, or compensation you were not given; ask for full card numbers, CVV, or verification codes; call a customer a fraud or liar; use 親、哦 stacked, or emoji in a complaint reply.

## 8. 人資 HR (recruiting, offers, resignations, performance reviews)

Terms: 入職→到職、簡歷→履歷、薪酬→薪資、年終獎→年終獎金、年假→特休、五險一金→勞健保與勞退、勞動合同→勞動契約、裁員→資遣、辭退→解僱、團建→員工旅遊／團康、領導→主管、人事→人資、尊敬的候選人→○○您好.

Structure:
- Job post: 職稱 → 工作內容 → 必備條件 → 加分條件 → 薪資範圍 (from the user) → 地點與時間 → 應徵方式.
- Interview invite: 稱呼 → 職缺 → 時間地點或視訊連結 → 攜帶資料 → 聯絡人.
- Offer: 職稱、薪資、到職日、試用期、地點、回覆期限 → 正式內容以勞動契約為準.
- Rejection: 謝謝您 → 經評估後，此次無法提供合作機會 → 祝福. No reason unless the user gave one.
- Performance review: behavior → result → effect; strengths first, then one or two areas to improve; no personality labels.

**Never:** write hiring conditions about gender, age, marital or family status, or origin; invent salary, legal notice periods, severance amounts, or article numbers; put one employee's salary, review, or health in an all-staff message; add harsher wording to a disciplinary or dismissal letter than the user's facts support. Dismissal, severance, and non-compete text gets the note line: 請法務或勞資顧問確認。

## 9. 科技／產品 Tech: release notes and UI text

Terms: 用戶→使用者、軟件→軟體、默認→預設、設置→設定、賬號→帳號、登錄→登入、搜索→搜尋、屏幕→螢幕、宕機→當機、集成→整合、兼容→相容、緩存→快取、鏈接→連結、數據→資料、接口→介面、調試→除錯、彈窗→彈出視窗、截屏→截圖、拖拽→拖曳、關注→追蹤、點贊→按讚.

Structure:
- Release notes: 版本號與日期 (from the user) → 新功能／改善／修正／已知問題, one line each, starting with 新增、改善、修正.
- UI text: buttons are short verbs (儲存、送出、下一步), no period. Error messages say what happened and what to do (無法連線，請檢查網路後再試一次), never blame the user. Confirmation buttons name the action (刪除檔案, not 確定).
- 您 or 你: follow the user's existing copy; if none, 您 for finance, government, and B2B, 你 for consumer apps.

**Never:** invent version numbers, dates, or features; promise 100% 安全、永不當機; describe an unpatched security hole in detail; use hype (賦能、打造、無縫、極致體驗、全面升級、我們很高興地宣布).

## Casual channels

Only these allow emoji and light slang: personal LINE chats, social posts (including a clinic's or shop's FB or IG post, if the user asks for or uses emoji and hashtags; the claim bans above still apply), and a teacher's or shop's friendly LINE message (one emoji at most). Everything else in this file is no emoji, no slang.
