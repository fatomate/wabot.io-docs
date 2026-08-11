import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';

function AiDocActions(): ReactNode {
  const {metadata} = useDoc();
  const {i18n, siteConfig} = useDocusaurusContext();
  const [copyLabel, setCopyLabel] = useState('Copy page');
  const labels =
    i18n.currentLocale === 'ms'
      ? {
          title: 'Guna halaman ini dengan AI',
          copy: 'Salin halaman',
          copied: 'Sudah disalin',
          failed: 'Salin gagal',
          markdown: 'Lihat Markdown',
          chatgpt: 'Buka dalam ChatGPT',
          claude: 'Buka dalam Claude',
          note: 'Ejen AI juga boleh menggunakan',
        }
      : {
          title: 'Use this page with AI',
          copy: 'Copy page',
          copied: 'Copied',
          failed: 'Copy failed',
          markdown: 'View Markdown',
          chatgpt: 'Open in ChatGPT',
          claude: 'Open in Claude',
          note: 'AI agents can also use',
        };
  const localePrefix =
    i18n.currentLocale === i18n.defaultLocale ? '' : `${i18n.currentLocale}/`;
  const markdownPath = useBaseUrl(`${localePrefix}ai/docs/${metadata.id}.md`);
  const prompt = `Use this Wabot.io documentation page as context: ${siteConfig.url}${markdownPath}`;

  async function copyPage() {
    try {
      const response = await fetch(markdownPath);
      await navigator.clipboard.writeText(await response.text());
      setCopyLabel(labels.copied);
      window.setTimeout(() => setCopyLabel(labels.copy), 1800);
    } catch {
      setCopyLabel(labels.failed);
      window.setTimeout(() => setCopyLabel(labels.copy), 1800);
    }
  }

  return (
    <section className="ai-doc-actions" aria-label="AI-ready documentation">
      <p className="ai-doc-actions__title">{labels.title}</p>
      <div className="ai-doc-actions__buttons">
        <button type="button" className="button button--secondary button--sm" onClick={copyPage}>
          {copyLabel === 'Copy page' ? labels.copy : copyLabel}
        </button>
        <a className="button button--secondary button--sm" href={markdownPath} target="_blank" rel="noreferrer">
          {labels.markdown}
        </a>
        <a
          className="button button--secondary button--sm"
          href={`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`}
          target="_blank"
          rel="noreferrer">
          {labels.chatgpt}
        </a>
        <a
          className="button button--secondary button--sm"
          href={`https://claude.ai/new?q=${encodeURIComponent(prompt)}`}
          target="_blank"
          rel="noreferrer">
          {labels.claude}
        </a>
      </div>
      <p className="ai-doc-actions__note">
        {labels.note} <a href={useBaseUrl('llms.txt')}>llms.txt</a> or{' '}
        <a href={useBaseUrl('llms-full.txt')}>llms-full.txt</a>.
      </p>
    </section>
  );
}

export default function DocItemFooter(): ReactNode {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  return (
    <>
      <AiDocActions />
      {(canDisplayTagsRow || canDisplayEditMetaRow) && (
        <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
          {canDisplayTagsRow && (
            <div className={clsx('row margin-top--sm', ThemeClassNames.docs.docFooterTagsRow)}>
              <div className="col">
                <TagsListInline tags={tags} />
              </div>
            </div>
          )}
          {canDisplayEditMetaRow && (
            <EditMetaRow
              className={clsx('margin-top--sm', ThemeClassNames.docs.docFooterEditMetaRow)}
              editUrl={editUrl}
              lastUpdatedAt={lastUpdatedAt}
              lastUpdatedBy={lastUpdatedBy}
            />
          )}
        </footer>
      )}
    </>
  );
}
