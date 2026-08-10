---
title: REST API & OAuth
sidebar_position: 4
---

# REST API & OAuth

Use the REST API console to explore supported Wabot endpoints with a selected account. Use **OAuth & MCP** when an application or AI assistant needs scoped, revocable access.

## Open the API Console

1. Go to **CORE → REST API**.
2. Select a connected WhatsApp account. Wabot uses it to personalize the endpoint samples.
3. Copy the displayed team access token only for secure server-side use.
4. Select an endpoint category in the left panel.
5. Review the parameters, cURL sample, success response, and error responses before you call it from your application.

The console marks endpoints that are restricted to Official API or Unofficial API accounts. It also asks for confirmation before a request that could create an account, send a message, change a webhook, reconnect an instance, or cancel queued work.

## Choose the Correct Endpoint

The console groups endpoints into capabilities such as:

- **Instance API** — create, connect, check, reset, or reconnect an instance
- **Messaging API** — send text, media, templates, and group messages
- **Contacts, groups, and labels** — look up and manage audience data
- **Templates and queue** — read templates or cancel queued messages
- **Webhooks** — register a receiving endpoint for account events

:::warning Keep credentials server-side
Do not place an access token in browser JavaScript, a mobile app bundle, screenshots, or a public repository. Rotate or revoke access if it may have been exposed.
:::

## Create an OAuth or MCP Client

OAuth is the recommended option for integrations that need constrained, user-authorized access.

1. Open **Settings → OAuth & MCP**, or use **Manage OAuth clients** from the REST API page.
2. Open the **Create** tab.
3. Select a preset, then supply a client name and one or more redirect URIs.
4. Choose only the scopes and audiences the client needs.

Admin API or MCP scopes require the `wabot:admin` audience and are available only to admin users.
User API or WhatsApp scopes require either the `wabot:api` or `wabot:mcp` audience.
5. Select **Confidential** only when the application can keep a client secret on a server.
6. Create the client. If a secret is shown, copy it immediately and store it in a secret manager. It is not shown again.
7. Use the provided setup guide to complete the Authorization Code flow with PKCE.

OAuth tokens are scoped and time-limited. A token never grants access beyond the Wabot permissions already held by the approving user.

### Manage OAuth Access

- **Clients** lists each registered client with its scopes, audiences, and redirect URIs.
- **Grants** lists user/team consent grants. Revoke a grant when an integration is no longer approved, a device is lost, or its access is suspected to be exposed.
- **Setup Guide** provides the selected client's implementation details and examples.

Choose the smallest preset and scope set that supports the integration. Presets such as Analytics / Reporting, MCP Assistant, REST Read/Write, and Instance Operator have different access levels.

## Use a Webhook

1. Build and secure an HTTPS endpoint in your application.
2. In the REST API console, choose **Set Receiving Webhook** for the correct instance.
3. Enter the endpoint URL and enable delivery.
4. Confirm the change, then send a controlled test event from your Wabot account.
5. Log and validate the event payload before enabling downstream automation.

**See also:** [Automation](/docs/features/automation) · [Integrations](/docs/integrations/) · [Account Error Logs](./account-error-logs)
