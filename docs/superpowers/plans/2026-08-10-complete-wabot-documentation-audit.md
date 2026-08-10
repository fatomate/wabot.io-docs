# Complete Wabot Documentation Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce current, bilingual, user-facing documentation for every customer-accessible Wabot page, workflow, control, state, and permission-gated capability.

**Architecture:** The live authenticated Wabot dashboard is the source of truth for labels, information architecture, and visible workflows. The Wabot v4 frontend maps all customer routes and controls; the backend v3 routes establish state transitions, permissions, destructive-action safeguards, and provider-specific behavior. Documentation is updated only after those three sources agree, or is explicitly marked availability- or permission-dependent.

**Tech Stack:** Docusaurus 3, Markdown, TypeScript sidebar configuration, Orca authenticated browser, React/TypeScript frontend source, Node.js backend source.

## Global Constraints

- Do not create accounts, send messages, save settings, authorize integrations, delete records, or trigger any destructive action in the live dashboard.
- Treat Wabot production UI as the authoritative source for user-visible labels and routes.
- Use `/Users/izzuddinibrahim/Sites/fatomate/wabot-v4` and `/Users/izzuddinibrahim/Sites/fatomate/wabot-backend-v3` to resolve behavior not visible without mutation.
- Keep English and Malay navigation and documentation coverage aligned.
- Do not claim completion until every customer-facing route in the inventory has a checked audit result.

---

### Task 1: Build and maintain the customer-route inventory

**Files:**
- Create: `docs/superpowers/plans/2026-08-10-complete-wabot-documentation-audit.md`
- Modify: `sidebars.ts`
- Modify: `docs/**/*.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/**/*.md`

**Interfaces:**
- Consumes: frontend customer routes in `app/(dashboard)/dashboard/**/page.tsx`, sidebar navigation, live dashboard navigation.
- Produces: a checked inventory grouped by GENERAL, CORE, SUPPORT, and nested customer-facing routes.

- [ ] **Step 1: Enumerate customer routes**

Run:

```bash
rg --files '/Users/izzuddinibrahim/Sites/fatomate/wabot-v4/app/(dashboard)/dashboard' -g 'page.tsx'
```

Record each non-admin page and dynamic child page in the audit checklist.

- [ ] **Step 2: Match routes to documentation**

Compare the inventory with `sidebars.ts` and `docs/**/*.md`. Add a dedicated page or a clearly named section when a customer route has no discoverable documentation.

- [ ] **Step 3: Confirm live navigation**

Open each sidebar destination in the authenticated dashboard, snapshot it, and record current page titles, visible tabs, controls, empty states, permissions, and Coming Soon states.

### Task 2: Audit campaign, audience, and contact workflows

**Files:**
- Modify: `docs/features/broadcast.md`
- Modify: `docs/contacts/audience.md`
- Modify: `docs/contacts/all-contacts.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/features/broadcast.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/contacts/audience.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/contacts/all-contacts.md`

**Interfaces:**
- Consumes: Broadcast list/detail/report routes, contact People, labels, groups, Follow-Up Center, Broadcast Lists, analytics, frontend report components, and backend broadcast/contact routes.
- Produces: verified procedures for creating, reporting, retargeting, exporting, recovering, and managing audiences.

- [ ] **Step 1: Inspect all Broadcast report controls**

Check Report, Retarget, export-to-group, reply refresh, status filters, search, Clone, Resume, Restart, Force Restart, Reprocess Failed, Retry Unknown, and Delete. Record the status and provider conditions for every action.

- [ ] **Step 2: Inspect all Audience Hub subpages**

Check People, labels, groups, Follow-Up Center, Broadcast Lists, and analytics. Record imports, exports, filters, profile actions, group/list creation, and unavailable states without submitting changes.

- [ ] **Step 3: Write recipient-state guidance**

Document Retarget as `Broadcast → Report → Retarget`, including Read, Not Reply, delivery-state, and failed-recipient targeting. State that Wabot creates a new draft with a locked temporary retarget audience.

### Task 3: Audit messaging, chatbot, and automation workflows

**Files:**
- Modify: `docs/features/chatbots.md`
- Modify: `docs/features/automation.md`
- Modify: `docs/features/autoresponder.md`
- Modify: `docs/features/live-chat.md`
- Modify: `docs/features/templates.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/features/*.md`

**Interfaces:**
- Consumes: Chatbots, chatbot instance, AI settings, versions, knowledge, tools, widget, playground, templates, automation, autoresponder, and Live Chat routes.
- Produces: accurate setup, edit, test, handoff, and troubleshooting documentation.

- [ ] **Step 1: Audit Chatbots and its nested pages**

Inspect chatbot list status controls, instance summary, AI settings, knowledge dashboard, version management, tools, widget settings, playground, templates, and follow-up routing. Separate account-wide Run Chatbot controls from individual bot configuration.

- [ ] **Step 2: Audit Automations and Autoresponder**

Inspect automation list, creation, editor, actions, logs, and duplication controls. Inspect the current Autoresponder Default Reply configuration, targeting, text/media, AI mode, exclusions, lead handling, forwarding, webhook, and contact-group options.

- [ ] **Step 3: Audit Live Chat and Templates**

Inspect conversation panels, agent actions, internal notes, attachments, schedules, statuses, template tabs, filters, previews, sync, and each template form. Mark account, role, and provider dependencies explicitly.

### Task 4: Audit account, integration, platform, and support workflows

**Files:**
- Modify: `docs/getting-started/dashboard.md`
- Modify: `docs/getting-started/connect-account.md`
- Modify: `docs/getting-started/manage-accounts.md`
- Modify: `docs/tools/*.md`
- Modify: `docs/integrations/*.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/getting-started/*.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/tools/*.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/integrations/*.md`

**Interfaces:**
- Consumes: Dashboard, Accounts, account tabs, File Manager, Queue, Link Generator, REST API, Captions, Settings, Account Error Logs, Tools, and Integrations routes plus backend permission/behavior routes.
- Produces: verified operational, integration, security, and support guidance.

- [ ] **Step 1: Audit account connection and management**

Inspect Add Account choices, connected/disconnected actions, Overview, Settings, Developers, credentials controls, profile actions, reconnection, provider changes, and destructive-action warnings.

- [ ] **Step 2: Audit tools and technical access**

Inspect File Manager, Queue, Link Generator, Caption, REST API, OAuth & MCP clients, Settings, and Account Error Logs. Document required role, scope, secret-handling, and irreversible-action warnings.

- [ ] **Step 3: Audit every integration card and settings dialog**

Inspect Google Spreadsheets, Telegram Notification, WooCommerce, WordPress Plugin, Funnelkit, Pabbly, Make, KlikSini, and Google OAuth. Record visible setup fields, existing connection state, external authorization, and Coming Soon restrictions.

### Task 5: Publish the bilingual documentation update

**Files:**
- Modify: `sidebars.ts`
- Modify: `docs/**/*.md`
- Modify: `i18n/ms/docusaurus-plugin-content-docs/current/**/*.md`

**Interfaces:**
- Consumes: completed route audit findings from Tasks 1-4.
- Produces: discoverable English and Malay documentation with matching coverage.

- [ ] **Step 1: Apply verified English changes**

Use current UI names, ordered steps, expected results, provider/permission conditions, and safe warnings. Remove stale route names and claims that cannot be verified.

- [ ] **Step 2: Apply matching Malay changes**

Translate all added and materially changed user-facing instructions, preserving product labels that appear in English in the application.

- [ ] **Step 3: Update navigation**

Add any missing pages to `sidebars.ts` and ensure every added document has a valid title, route, and cross-link.

### Task 6: Validate and close the audit

**Files:**
- Modify: `docs/superpowers/plans/2026-08-10-complete-wabot-documentation-audit.md`

**Interfaces:**
- Consumes: all updated documentation and source inventory.
- Produces: a verified build and a final inventory in which every customer route is marked inspected, unavailable, or permission-gated.

- [ ] **Step 1: Run documentation validation**

Run:

```bash
npm run build
npm run build -- --locale ms
npm run typecheck
git diff --check
```

Expected: all commands exit with code `0`; Docusaurus may emit its existing deprecated `onBrokenMarkdownLinks` warning.

- [ ] **Step 2: Review the final diff**

Run:

```bash
git diff -- docs sidebars.ts i18n
git status --short
```

Confirm that no unrelated user changes were overwritten and that all new docs correspond to verified audit findings.

- [ ] **Step 3: Mark audit status**

Only mark each route complete after its live screen and relevant frontend/backend behavior have been reviewed. For role-, plan-, account-, or provider-gated pages, document the gate and mark the route as inspected rather than omitting it.
