---
title: Manage WhatsApp Accounts
sidebar_position: 5
---

# Manage WhatsApp Accounts

Use **Accounts** to see every connected WhatsApp account, check its status, open its settings, and connect additional numbers.

If Accounts shows **Access Restricted**, ask a workspace owner to grant account access before attempting to connect, edit, or inspect an account.
Adding or managing accounts requires account-management permission; deletion requires separate account-delete permission.

## Open and Find an Account

1. Go to **GENERAL → Accounts**.
2. Use the search field to find an account by its name, phone number, or instance ID.
3. Switch between **Grid view** and **Table view** according to the amount of information you need.
4. Use **Filter** to narrow the list, then use **Refresh data** when a status or profile change is not yet shown.
5. Use the star control to mark frequently used accounts as favourites.

## Check Connection Status

Each account displays its connection state. If an Unofficial API account is disconnected:

1. Open the account.
2. Choose the available connect or reconnect action.
3. Complete the QR-code or pairing-code process on the WhatsApp device.
4. Wait for the dashboard to show the account as connected.
5. Send a controlled test message before using the account in a broadcast or automation.

For an Official API account, check the Meta/Cloud API credentials and approved template status before attempting sends.

## Open Account Settings

1. On the account card or row, click **Settings**.
2. Use **Overview** to check connection status, provider, quality, message limits, Live Chat state, and account-specific operational information.
3. Use **Refresh data** to reload the latest account state.
4. Use **Settings** for account-specific configuration and **Developers** for technical integration details.
5. Use **Edit Profile** or **Refresh Avatar** only when you intend to update the WhatsApp account profile.
6. Keep the Instance ID and Access Token private. Do not copy them into a browser, screenshot, public repository, or customer message.

The available quick actions can include **Disconnect**, **Edit Profile**, **Refresh Avatar**, **Switch to Unofficial**, and **Delete Account**. These actions are disruptive and require confirmation.

Website-account details can show **Feature Under Development** for non-admin users. An Unofficial account can show **Unofficial API Unavailable** when the workspace plan does not include it. The **Settings** and **Developers** tabs also require account write access.

:::warning
Disconnecting, switching account type, or deleting an account can interrupt messages, automations, and chatbot conversations. Pause dependent campaigns and export any required reports before performing a disruptive action.
:::

## Connect Another Account

1. Click **Add Account**.
2. Select **Unofficial API** for QR code or pairing code, or **Official API** for Cloud API credentials or Meta signup.
3. Follow the on-screen connection steps.
4. Return to Accounts and confirm the account is connected.
5. Configure its chatbot, Live Chat, templates, and other features as required.

The WebChat card is visible in Add Account but is currently disabled and marked **Coming soon**.

**See also:** [Connect Your WhatsApp Account](./connect-account) · [Chatbots](/docs/features/chatbots) · [Live Chat](/docs/features/live-chat)
