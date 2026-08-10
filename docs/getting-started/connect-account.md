---
title: Connect Your WhatsApp Account
sidebar_position: 4
---

# Connect Your WhatsApp Account

Before you can send messages, broadcast, or run chatbots, you need to connect at least one WhatsApp account to Wabot.

The **Web-only bots and widgets** account card is currently marked **Coming Soon** unless your workspace has been enabled for it. Use the supported WhatsApp account connection options shown in your workspace.
You need account-add permission to open the connection flow. The Unofficial API/QR option is hidden when your workspace does not have Unofficial API access.

## Navigate to Accounts

1. In the sidebar, click **Accounts** (under GENERAL).
2. You'll see a list of your connected accounts. On a fresh account, you'll see: *"No WhatsApp accounts"*.
3. Click **Add Account** at the top right.

![Accounts Page](/img/screenshots/accounts.png)

You'll land on the **Add Account** page. The available connection methods are shown there.

![Add Account — Choose Integration Method](/img/screenshots/add-account.png)

---

## Choose Integration Method

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="unofficial" label="Unofficial API (Popular)" default>

**Best for:** Personal numbers, small to medium businesses.

**Features:**
- ✅ Quick Setup
- ✅ Personal Account
- ✅ Instant Connection
- ✅ Free to Use

**How to connect:**

1. Click the **Unofficial API** card.
2. Enter a name for the account (e.g. "Main Sales Number").
3. Click **Connect with QR Code** (or **Pairing Code**).
4. A QR code appears on screen.
5. On your phone, open **WhatsApp → Settings → Linked Devices → Link a Device**.
6. Scan the QR code shown on Wabot.
7. Wait until the status turns to **Connected / Online** in the dashboard.

:::tip
Use a dedicated business number, not your personal WhatsApp. Once connected, Wabot runs the session on its own servers 24/7 — your phone doesn't need to stay online after the first scan.
:::

</TabItem>
<TabItem value="official" label="Official API">

**Best for:** Large enterprises with verified WhatsApp Business accounts.

**Features:**
- ✅ Official & Secure
- ✅ Advanced Features
- ✅ High Message Limits
- ✅ Official Meta Support

**Requirements:**
- Verified WhatsApp Business Account (WABA) with Meta
- Access token from Meta Business Manager
- Phone number ID
- Pre-approved message templates (for marketing use)

**How to connect:**

1. Click the **Official API** card.
2. Enter your WABA credentials:
   - Access Token
   - Phone Number ID
   - Business Account ID
3. Click **Connect**.
4. Wabot will verify and activate the account.
5. Sync your pre-approved templates from **Templates → Pre-Approved → Sync**.

</TabItem>
<TabItem value="webchat" label="WebChat (Coming soon)">

**Status:** The product card is visible on the current Add Account page, but it is disabled and labelled **Coming soon**. You cannot create a standalone WebChat account from this screen yet.

The card describes the planned experience: a web-only bot and widget with no WhatsApp number. Do not rely on it for a live setup until Wabot enables the option.

**What you can use today:**

1. Connect an **Unofficial API** or **Official API** account.
2. Open **Chatbots**, select that account, then choose **Widget Setting**.
3. Configure and deploy its web widget from there.

See [Chatbots → Widget Settings](/docs/features/chatbots#widget-settings) for the supported deployment flow.

</TabItem>
</Tabs>

---

## After Connecting

Once the account shows **Connected**:

- It appears in the **Accounts** list with a green status indicator.
- You can now use it in Chatbots, Broadcasts, Automations, and Live Chat.
- Manage its settings (name, profile picture, auto-reply) by clicking the account card.

:::note
The Add Account page currently offers two working connection methods: **Unofficial API** and **Official API**. WebChat is presented as a future option.
:::

## Managing Multiple Accounts

- Your plan determines how many WhatsApp numbers you can connect:
  - **Lite / Basic / Plus** → 1 number
  - **Premier** → 3 numbers
  - **Platinum** → 10 numbers
- Click **Add Account** again to connect additional numbers.
- Use the **All Accounts** dropdown on most pages to switch between them.

---

**Next:** [Send Your First Message →](./first-message)
