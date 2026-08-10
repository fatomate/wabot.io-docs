---
title: Pabbly / Make / FunnelKit
sidebar_position: 4
---

# Pabbly / Make / FunnelKit

Connect Wabot with third-party automation platforms to trigger WhatsApp messages from virtually any app.

## Pabbly Connect

1. In Wabot → **Integrations → Pabbly Connect** → click **Settings**.
2. Open **CORE → REST API**, select the account, then copy the supported endpoint sample and server-side credentials. Alternatively, use an existing V3 Wabot Automation webhook when the external platform should trigger a workflow.
3. In Pabbly Connect, create a new workflow:
   - **Trigger:** Any app (Google Forms, Stripe, Shopify, etc.)
   - **Action:** Webhooks → POST to the selected Wabot endpoint or existing V3 Automation webhook
4. Map fields: `phone`, `message`, and any custom placeholders.
5. Test and enable.

## Make (formerly Integromat)

1. In Wabot → **Integrations → Make** → click **Settings**.
2. In Make, create a new scenario:
   - **Trigger module:** Your source app
   - **Action module:** HTTP → Make a Request
   - **URL:** the selected Wabot endpoint or existing V3 Automation webhook
   - **Method:** POST
   - **Headers / body:** use the values shown in the REST API console for the selected endpoint
3. Run once to test, then activate.

## FunnelKit Connector

1. In Wabot → **Integrations → FunnelKit Connector** → click **Settings**.
2. In FunnelKit Automations (WordPress):
   - Create a new V3 automation.
   - Add a trigger (e.g. "Order Created", "Tag Added").
   - Add an action: **Send WhatsApp via Wabot**.
   - Configure the message template.
3. Save and activate.

---

**See also:** [Webhooks & API](./webhooks) · [Automation](/docs/features/automation)
