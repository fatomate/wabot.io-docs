---
title: Telegram Notifications
sidebar_position: 5
---

# Telegram Notifications

Use Telegram notifications to forward selected Wabot events to an internal Telegram chat or channel.

## Add a Telegram Destination

1. Go to **GENERAL → Integrations**.
2. Find **Telegram Notification** and click **Settings**.
3. Click **Add New**.
4. Enter a clear internal name, for example `Sales alerts` or `After-hours support`.
5. Add at least one Telegram Chat ID. Use the **Get Chat ID** option if it is shown to retrieve the destination ID.
6. Save the configuration.

## Use It in Wabot

1. Open the chatbot, automation, or feature that supports Telegram forwarding.
2. Select the saved Telegram configuration or enter the intended destination.
3. Trigger a controlled test event.
4. Confirm that the expected notification arrives in the correct Telegram chat.
5. Review and remove obsolete destinations to avoid sending business information to the wrong audience.

## Manage Destinations

From the Telegram Settings dialog, you can review the name, configured chat IDs, connected usage, and available edit or delete actions.

:::warning
Telegram Chat IDs identify a conversation or channel. Treat them as sensitive operational configuration and confirm the destination before enabling automatic forwarding.
:::

**See also:** [Chatbots](/docs/features/chatbots) · [Automation](/docs/features/automation) · [Integrations](/docs/integrations/)
