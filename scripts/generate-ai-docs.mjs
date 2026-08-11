import {mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import {join, relative, sep} from 'node:path';

const root = process.cwd();
const defaultSiteUrl =
  process.env.CF_PAGES === '1'
    ? 'https://docs.wabot.io'
    : 'https://fatomate.github.io/wabot.io-docs';
const siteUrl = (process.env.DOCS_URL ?? defaultSiteUrl).replace(/\/$/, '');
const sources = [
  {locale: 'en', directory: join(root, 'docs')},
  {locale: 'ms', directory: join(root, 'i18n', 'ms', 'docusaurus-plugin-content-docs', 'current')},
];

async function markdownFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return markdownFiles(path);
      return entry.isFile() && entry.name.endsWith('.md') ? [path] : [];
    }),
  );
  return files.flat();
}

function parseDocument(markdown, sourcePath, directory, locale) {
  const withoutFrontMatter = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const title = withoutFrontMatter.match(/^#\s+(.+)$/m)?.[1] ?? sourcePath;
  const id = relative(directory, sourcePath).split(sep).join('/').replace(/\.md$/, '');
  const route = id === 'intro' ? '/docs/intro' : `/docs/${id}`;
  const prefix = locale === 'ms' ? '/ms' : '';
  return {
    title,
    url: `${siteUrl}${prefix}${route}`,
    markdown: withoutFrontMatter.trim(),
    rawPath: `${locale === 'ms' ? 'ms/' : ''}ai/docs/${id}.md`,
  };
}

await Promise.all([
  rm(join(root, 'static', 'ai'), {recursive: true, force: true}),
  rm(join(root, 'static', 'ms', 'ai'), {recursive: true, force: true}),
]);

const allDocuments = [];
for (const source of sources) {
  const files = await markdownFiles(source.directory);
  const documents = await Promise.all(
    files
      .filter((file) => !file.includes(`${sep}superpowers${sep}`))
      .map(async (file) =>
        parseDocument(await readFile(file, 'utf8'), file, source.directory, source.locale),
      ),
  );

  for (const document of documents) {
    const destination = join(root, 'static', document.rawPath);
    await mkdir(join(destination, '..'), {recursive: true});
    await writeFile(destination, document.markdown);
  }
  allDocuments.push({locale: source.locale, documents});
}

const index = [
  '# Wabot.io Documentation',
  '',
  '> Wabot.io documentation for AI assistants and developers.',
  '',
  '## English',
  ...allDocuments[0].documents.map((doc) => `- [${doc.title}](${doc.url})`),
  '',
  '## Bahasa Melayu',
  ...allDocuments[1].documents.map((doc) => `- [${doc.title}](${doc.url})`),
  '',
].join('\n');

const fullText = allDocuments
  .flatMap(({locale, documents}) =>
    documents.map((doc) => `# ${doc.title}\n\nSource: ${doc.url}\nLanguage: ${locale}\n\n${doc.markdown}`),
  )
  .join('\n\n---\n\n');

await writeFile(join(root, 'static', 'llms.txt'), index);
await writeFile(join(root, 'static', 'llms-full.txt'), `${index}\n\n---\n\n${fullText}\n`);
