import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wabot.io Documentation',
  tagline: 'The complete guide to Wabot.io — the all-in-one WhatsApp automation platform.',
  favicon: 'img/favicon.svg',
  url: 'https://fatomate.github.io',
  baseUrl: '/wabot.io-docs/',
  organizationName: 'fatomate',
  projectName: 'wabot.io-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      ms: { label: 'Bahasa Melayu', direction: 'ltr' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/fatomate/wabot.io-docs/edit/main/',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Wabot.io Docs',
      logo: {
        alt: 'Wabot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/fatomate/wabot.io-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://app.wabot.io',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started/overview' },
            { label: 'Core Features', to: '/docs/features/' },
            { label: 'Integrations', to: '/docs/integrations/' },
          ],
        },
        {
          title: 'Wabot.io',
          items: [
            { label: 'Website', href: 'https://wabot.io' },
            { label: 'Dashboard', href: 'https://app.wabot.io' },
            { label: 'Pricing', href: 'https://wabot.io/#pricing' },
          ],
        },
        {
          title: 'Support',
          items: [
            { label: 'WhatsApp Support', href: 'https://wa.me/60125153307' },
            { label: 'iOS App', href: 'https://apps.apple.com/my/app/wabot-io/id6758012842' },
            { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.wabotapps' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/fatomate/wabot.io-docs' },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} Wabot.io Documentation. Not affiliated with WhatsApp Inc. or Team Fames Sdn Bhd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
