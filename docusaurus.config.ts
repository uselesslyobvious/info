import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';

const config: Config = {
  title: 'Stop hate speech',
  tagline: 'Why it is important and why changes are needed',
  url: 'https://stop-hate-speech.ie',
  baseUrl: '/',
  // future: { experimental_router: 'hash', },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'info',
          routeBasePath: 'info',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkDefinitionList],
          numberPrefixParser: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'free speech, ireland, hate speech bill, freedom of speech' },
    ],
    navbar: {
      title: 'Stop hate speech',
      items: [
        {
          type: 'html',
          position: 'left',
          value: '⚠️⚠️⚠️ Website is still under construction ⚠️⚠️⚠️',
        },
        {
          type: 'docSidebar',
          sidebarId: 'autoSidebar',
          position: 'right',
          label: 'More information',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
