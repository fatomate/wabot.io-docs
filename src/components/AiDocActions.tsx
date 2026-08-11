import {useState, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function AiDocActions(): ReactNode {
  const {metadata} = useDoc();
  const {i18n, siteConfig} = useDocusaurusContext();
  const [isOpen, setIsOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Copy');
  const labels =
    i18n.currentLocale === 'ms'
      ? {
          copy: 'Salin',
          copied: 'Disalin',
          failed: 'Gagal disalin',
          menu: 'Buka pilihan AI',
          markdown: 'Lihat sebagai Markdown',
          markdownNote: 'Buka halaman ini sebagai teks biasa',
          chatgpt: 'Buka dalam ChatGPT',
          chatgptNote: 'Tanya ChatGPT tentang halaman ini',
          claude: 'Buka dalam Claude',
          claudeNote: 'Tanya Claude tentang halaman ini',
          llms: 'Dokumen untuk AI',
          llmsNote: 'Buka indeks llms.txt',
        }
      : {
          copy: 'Copy',
          copied: 'Copied',
          failed: 'Copy failed',
          menu: 'Open AI options',
          markdown: 'View as Markdown',
          markdownNote: 'Open this page as plain text',
          chatgpt: 'Open in ChatGPT',
          chatgptNote: 'Ask ChatGPT about this page',
          claude: 'Open in Claude',
          claudeNote: 'Ask Claude about this page',
          llms: 'AI documentation index',
          llmsNote: 'Open the llms.txt index',
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
    } catch {
      setCopyLabel(labels.failed);
    }
    window.setTimeout(() => setCopyLabel(labels.copy), 1800);
  }

  return (
    <div className="ai-doc-menu">
      <div className="ai-doc-menu__trigger">
        <button type="button" onClick={copyPage}>
          {copyLabel}
        </button>
        <button
          type="button"
          className="ai-doc-menu__toggle"
          aria-label={labels.menu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}>
          <span aria-hidden="true">⌄</span>
        </button>
      </div>
      {isOpen && (
        <div className="ai-doc-menu__panel">
          <a href={markdownPath} target="_blank" rel="noreferrer">
            <strong>{labels.markdown}</strong>
            <span>{labels.markdownNote}</span>
          </a>
          <a
            href={`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`}
            target="_blank"
            rel="noreferrer">
            <strong>{labels.chatgpt}</strong>
            <span>{labels.chatgptNote}</span>
          </a>
          <a
            href={`https://claude.ai/new?q=${encodeURIComponent(prompt)}`}
            target="_blank"
            rel="noreferrer">
            <strong>{labels.claude}</strong>
            <span>{labels.claudeNote}</span>
          </a>
          <a href={useBaseUrl('llms.txt')} target="_blank" rel="noreferrer">
            <strong>{labels.llms}</strong>
            <span>{labels.llmsNote}</span>
          </a>
        </div>
      )}
    </div>
  );
}
