---
title: Webhooks & API
sidebar_position: 5
---

# Webhooks & API

For custom integrations, use the **REST API** console to select an account and copy the supported endpoint sample. Use automation webhooks when an external system should start a Wabot workflow.

## Use the REST API Console

1. Go to **CORE → REST API**.
2. Select the connected account the integration will use.
3. Choose the endpoint category, then review its parameter requirements, account-type support, cURL sample, and error responses.
4. Copy the sample into a server-side integration and replace the example values.
5. Test with a controlled recipient before enabling production traffic.

For scoped, revocable access or AI-assistant integrations, create an OAuth client from **Settings → OAuth & MCP**.

---

## Protect Access Tokens

The REST API console displays your team's access token. Copy it only into a server-side secret store. OAuth clients are better for integrations that need limited permissions or token revocation.

:::warning Keep your API key secret
Never expose it in client-side code, public repos, or logs.
:::

---

## Automation Webhooks

V4 Automation webhook triggers are currently Coming Soon. Continue using existing V3 Automation webhook URLs until V4 Automation is released.

```
https://app.wabot.io/api/automation/webhook/YOUR_UNIQUE_ID
```

POST any JSON payload to this URL and the automation runs. All fields in the payload become available as `{field_name}` placeholders in your automation actions.

### Example: Google Forms → Wabot

1. Continue using an existing V3 Automation webhook trigger until V4 Automation is released.
2. Copy the webhook URL.
3. In Google Forms, use Apps Script to POST form responses to the URL:

```javascript
function onFormSubmit(e) {
  var responses = e.namedValues;
  UrlFetchApp.fetch("https://app.wabot.io/api/automation/webhook/YOUR_ID", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      phone: responses["Phone"][0],
      name: responses["Name"][0],
      message: "Thanks for registering, " + responses["Name"][0] + "!"
    })
  });
}
```

4. Set up a trigger in Apps Script: **Edit → Current project's triggers → On form submit**.

---

## Rate Limits and Safe Sending

- Respect your plan's monthly message quota.
- Use pacing (don't fire thousands of API calls per second).
- If you get a `429 Too Many Requests` response, back off and retry after a delay.

---

**See also:** [REST API & OAuth](/docs/tools/rest-api) · [Automation](/docs/features/automation) · [Integrations Overview](/docs/integrations/)
