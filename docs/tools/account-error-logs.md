---
title: Account Error Logs
sidebar_position: 7
---

# Account Error Logs

Account Error Logs is an owner-only troubleshooting workspace for account-facing failures. It provides a safe summary of what failed, where it happened, and how often it has occurred.

## Review an Error

1. Open **SUPPORT → Account Error Logs**.
2. Select an **Account** to narrow the view, or leave it on all accounts.
3. Select a **Surface** such as Chatbot, Broadcast, Playground, API, RAG, Widget, or System.
4. Review the log row:
   - **Last seen** shows the most recent occurrence.
   - **Surface / area** identifies the product area.
   - **Message** is the safe owner-facing explanation.
   - **Error** includes the error type and, when available, an error code or HTTP status.
   - **Occurrences** shows how often the issue has repeated.
5. Expand **Technical details** only when you need it for support or engineering triage.
6. Use **Refresh** after reproducing or resolving a problem.

## Clear Resolved Logs

1. Filter to the account and surface that you have verified.
2. Select individual rows, then choose **Delete selected**.
3. Use **Delete all filtered** only after confirming that the active filters show exactly the logs you intend to remove.

:::warning
Deleting logs removes troubleshooting history. Resolve or capture the information you need before clearing it.
:::

## When to Contact Support

Include the account name, surface, error type, time last seen, and any correlation information shown in Technical details. Do not include access tokens, passwords, or full customer conversation data.

**See also:** [Chatbots](/docs/features/chatbots) · [Broadcast](/docs/features/broadcast) · [REST API & OAuth](./rest-api)
