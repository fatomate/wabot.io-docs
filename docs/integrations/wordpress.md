---
title: WordPress Integration
sidebar_position: 3
---

# WordPress Integration

Send WhatsApp notifications from your WordPress site — order alerts, form submissions, user registrations, and more.

## Setup

1. In Wabot, go to **Integrations → WordPress Plugin**.
2. Open **CORE → REST API**, select the account that WordPress will use, and copy the required server-side credentials or endpoint sample.
3. In your WordPress admin:
   - Download and install the **Wabot for WordPress** plugin.
   - Go to **Settings → Wabot**.
   - Paste the required credentials in the plugin's secure server-side settings.
   - Select which events trigger WhatsApp messages:
     - WooCommerce: new order, processing, completed, refunded
     - Forms: Formidable Forms, Fluent Forms submissions
     - Users: new registration, password reset
4. Customize message templates using placeholders like `{customer_name}`, `{order_id}`, `{total}`.
5. Save.

## WooCommerce Notifications

Common templates:

- **New Order:** "Hi \{customer_name\}, terima kasih! Pesanan #\{order_id\} berjumlah RM\{total\} telah diterima."
- **Shipped:** "Pesanan #\{order_id\} telah dihantar. Tracking: \{tracking_number\}"
- **Completed:** "Pesanan #\{order_id\} telah selesai. Terima kasih kerana membeli dengan kami!"

## Form Submissions

For Formidable Forms or Fluent Forms:

1. Install the respective form plugin.
2. In the form settings, add a Wabot webhook action.
3. Map form fields to the message template.
4. Every submission triggers a WhatsApp message to the customer.

---

**See also:** [Integrations Overview](/docs/integrations/) · [Webhooks & API](./webhooks)
