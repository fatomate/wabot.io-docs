---
title: Autoresponder
sidebar_position: 5
---

# Autoresponder

Autoresponder configures a default automatic reply for each WhatsApp account. It supports reply targeting, text or media, Normal or AI Reply mode, exclusions, and optional lead-management actions.

Website accounts are not selectable for Autoresponder. Creating or updating a reply requires Autoresponder write permission.

## Where to Find It

Sidebar → **CORE → Autoresponder** — `https://app.wabot.io/dashboard/autoresponder`

![Autoresponder Page](/img/screenshots/autoresponder.png)

## Configure an Account

1. Open **Autoresponder** and find the relevant account.
2. Click **Configure**.
3. Choose **Enable** or **Disable**.
4. Choose who can receive the reply:
   - **All** — all eligible conversations.
   - **Individual** — individual chats only.
   - **Group** — group chats only.
5. Choose **Text & Media**, then write the reply message.
6. Add media from **File manager**, **Upload**, or **Add via URL** if required.
7. Choose a reply mode:
   - **Normal Mode** sends the saved reply.
   - **AI Reply Mode** uses the account's AI configuration when available.
8. Add numbers that must not receive the reply in **Excluded Phone Numbers**.
9. Configure optional lead-management, forwarding, webhook, or contact-group settings for the workflow.
10. Click **Save**.

## Apply One Setup to Multiple Accounts

1. Return to the Autoresponder page.
2. Click **Apply to All**.
3. Review the configuration and target accounts.
4. Apply it only when the same reply is suitable for every selected account.
5. Open any exception account and configure it individually.

## Create a Keyword Autoresponder

The **Default Reply** is account-level. Use a keyword autoresponder when the reply must depend on text the customer sends.

1. Open **Autoresponder** and create a responder.
2. Select a WhatsApp account, or choose **All accounts** when that option is appropriate.
3. Enter an internal name and one or more keywords.
4. Choose the match method:
   - **Contains**
   - **Exact match**
   - **Regular expression**
5. Compose the response text and optional media.
6. Set a delay from 0 to 3,600 seconds.
7. Save and test using a controlled conversation.

Keyword responders can be edited or deleted from their own pages. Do not use a regular expression unless it has been tested carefully, because a broad pattern can trigger unexpected replies.

## Common Default Replies

### Greeting

```text
Hi! Selamat datang ke {store_name}.
Saya boleh bantu anda dengan produk, harga, lokasi, atau sambungan kepada admin.
```

### Pricing

Attach a current price-list PDF or image, then add a short explanation of how the customer can order.

### Office Hours

```text
Waktu operasi kami:
Isnin–Jumaat: 9 pagi – 6 petang
Sabtu: 9 pagi – 1 petang
Ahad: Tutup
```

### Opt-out Confirmation

```text
Anda telah berhenti melanggan. Anda tidak akan menerima mesej promosi lagi. Terima kasih.
```

Add the person to an `unsubscribed` label or Broadcast List exclusion after the conversation is handled.

## Autoresponder vs Chatbot

| Feature | Autoresponder | Chatbot |
| --- | --- | --- |
| Logic | Saved default reply or AI Reply mode | AI conversation with persona and knowledge |
| Cost | No AI credits in Normal Mode | Uses AI credits |
| Best for | Greeting, availability, routing | Contextual support and sales |
| Setup | Per-account default configuration | Persona, knowledge, tools, and testing |

## Test Before Enabling

1. Configure one account first.
2. Send a controlled test message from another phone.
3. Confirm the reply text, media, audience targeting, AI mode, exclusions, and any forwarding behavior.
4. Check the resulting conversation in **Live Chat**.
5. Apply the configuration to other accounts only after the test is correct.

**See also:** [Chatbots](./chatbots) · [Live Chat](./live-chat) · [Automation](./automation)
