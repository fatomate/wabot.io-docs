---
title: Frequently Asked Questions
sidebar_position: 9
---

# Frequently Asked Questions

## General

### What is Wabot?

Wabot is a WhatsApp automation platform that helps you automatically send WhatsApp messages to prospects or buyers using your own phone number. It combines AI chatbots, broadcasting, automation, live chat, and notifications in one dashboard.

### How does Wabot actually work?

You scan a QR code within the Wabot system, just like WhatsApp Web. Once scanned, Wabot gains access to send WhatsApp messages via your phone. After the first scan, Wabot runs the session on its own servers 24/7.

### Is Wabot an official WhatsApp product?

No. Wabot is an independent platform built by **Team Fames Sdn Bhd** (Malaysia). It is **not** in partnership with, sponsored by, or endorsed by WhatsApp Inc.

Wabot currently supports two live account connection methods:

1. **Unofficial API** — QR scan (like WhatsApp Web)
2. **Official API** — the official Meta WhatsApp Business API, for enterprises

The Add Account page also shows **WebChat** as a planned web-only account type, but it is currently disabled and marked **Coming soon**. You can still deploy a web widget from the chatbot settings of a connected WhatsApp account.

### Does my phone need to be ON and connected to the internet?

Only for the first QR scan. After that, Wabot runs the session on its own servers, so your phone can be off and you'll still receive and send messages through Wabot.

### Can I use my personal WhatsApp number?

Yes, but we strongly recommend a **dedicated business number**. Mixing personal and business WhatsApp on the same number can cause confusion and risk bans if you broadcast to people who didn't opt in.

### Will my WhatsApp number get banned?

Only if you spam. Follow best practices:

- Get explicit opt-in before broadcasting
- Pace your sends (don't blast 10,000 at once)
- Include an opt-out instruction ("reply STOP")
- Keep content relevant and useful

Wabot provides tools to pace your broadcasts and avoid triggering WhatsApp's rate limits.

---

## Features

### What's the difference between Chatbot and Autoresponder?

| | Chatbot | Autoresponder |
|---|---------|---------------|
| Logic | AI understanding | Exact keyword match |
| Cost | Uses AI credits | Free |
| Best for | Complex, contextual conversations | Simple, repetitive queries |

Use Autoresponder for quick wins (greetings, hours) and Chatbot for deeper conversations (sales closing, FAQ).

### Can the AI chatbot handle Bahasa Melayu?

Yes. You can train it in Bahasa Melayu, English, mixed BM-English, Mandarin, Tamil, and most major languages. The quality depends on the knowledge documents you upload.

### Are there extra costs for the AI chatbot feature?

The Plus plan and above include a monthly AI credit allowance:

- **Plus:** 3,000 credits/month
- **Premier:** 10,000 credits/month
- **Platinum:** 50,000 credits/month

If you exceed your allowance, you can purchase additional credits or upgrade your plan.

### How many team members can use Live Chat together?

Depends on your plan — check the **Admin → Users** page. Team seats are typically:

- **Plus:** 1-3 seats
- **Premier:** up to 5 seats
- **Platinum:** up to 10 seats

Contact sales for enterprise team sizes.

---

## Billing

### Can I change my number while my subscription is still active?

Yes. Go to **Accounts**, disconnect the current number, and connect a new one by scanning a new QR code. Your subscription stays the same.

### Can I upgrade/downgrade my plan?

Yes, anytime. Go to **Dashboard → Manage Subscription**. Upgrades apply immediately; downgrades apply at the next billing cycle.

### Do unused AI credits roll over?

Monthly AI credits reset at the start of each billing cycle — they don't roll over. However, **purchased** top-up credits and advance credits do persist until used.

### What payment methods are accepted?

Credit card, FPX (Malaysian online banking), and bank transfer for enterprise plans. Details on the checkout page.

---

## Technical

### Does Wabot have an API?

Yes. You can send messages via:

```
POST https://app.wabot.io/api/send
```

See [Webhooks & API](/docs/integrations/webhooks) for the full reference.

### Can I integrate with WooCommerce/Shopify?

Yes. Use the WordPress plugin for WooCommerce, and webhooks for Shopify. See [Integrations](/docs/integrations/).

### Does Wabot support multi-language interfaces?

The dashboard is primarily in English. This documentation is provided in English and Bahasa Melayu.

### What happens to my data if I cancel?

Your account data is retained for 30 days after cancellation in case you want to reactivate. After 30 days, it's permanently deleted per the Privacy Policy.

---

## Support

### How do I contact support?

- **WhatsApp:** [+60 12-515 3307](https://wa.me/60125153307)
- **Help:** The current sidebar Help destination returns a 404 page. Use your team's established Wabot support channel instead.
- **Email:** Contact via wabot.io website

### Is there a community or forum?

A community forum is marked as "Coming Soon" on the Wabot.io footer. For now, use the WhatsApp support line.

### Can I request a new feature?

Yes — send feature requests via the WhatsApp support line. The team is actively shipping updates.
