---
title: Send Your First Message
sidebar_position: 6
---

# Send Your First Message

Now that your WhatsApp account is connected, let's send a test message to make sure everything works.

## Option 1 — Send via Live Chat

1. In the sidebar, click **Live Chat**.
2. If you have no conversations yet, start one from another phone by sending a message to your connected Wabot number.
3. Once the message arrives, click the thread.
4. Type your reply and press Enter.

## Option 2 — Send via Broadcast (Test Mode)

1. Click **Broadcast → Create** (or go to `/dashboard/broadcast/new`).
2. Fill in the 3-step wizard:

### Step 1 — Choose Audience
- **Broadcast Name:** e.g. "Test Message"
- **Choose Your Accounts:** Pick **Unofficial API** or **Official API**
- **Select Accounts:** Pick the connected account
- **Select Your Audience:**
  - **Contact Groups** → select a Broadcast List, or
  - **Segmented Subscriber** → filter by behavior/profile
- **Include Lists / Groups:** Choose a test audience containing only your own number.
- **Exclude Lists / Groups (Optional):** Leave empty.

### Step 2 — Create Message
- Write your message text.
- Add media if needed (image, video, PDF).
- Insert placeholders like `{name}` for personalization.
- See the **Live Preview** panel on the right.

### Step 3 — Set Schedule
- **Send Now** to dispatch immediately, or
- **Schedule** for a future date and time.

3. Click **Continue** at each step.
4. Review and click **Send**.
5. Check your phone — the message should arrive within seconds.

---

## Option 3 — Send via the API

If you want to trigger messages from your own code or webhook:

1. Open **CORE → REST API**.
2. Select the connected account that will send the message.
3. Choose **Send Text** and copy the generated cURL sample.
4. Replace only the example recipient and message with your controlled test values.
5. Run the request from a secure server-side environment.

See [REST API & OAuth](/docs/tools/rest-api) for the full reference.

---

## Troubleshooting

### Message didn't arrive
- Check the **Queue Message** page — is it stuck in *Pending* or *Failed*?
- Verify the connected account is still **Online** in **Accounts**.
- Make sure the recipient number is in international format without `+` (e.g. `60123456789`).

### Account shows "Disconnected"
- Go to **Accounts** and click **Reconnect**.
- Re-scan the QR code from your phone.

### "No WhatsApp accounts" error
- Return to [Connect Your WhatsApp Account](./connect-account) and finish the setup.

---

**Next:** Explore the [Core Features →](/docs/features/)
