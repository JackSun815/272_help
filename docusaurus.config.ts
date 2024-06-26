import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ruby on Rails',
  tagline: 'This is a guide to using Ruby on Rails for 67-272',
  favicon: 'img/Designer.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/272_help/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JackSun815', // Usually your GitHub org/user name.
  projectName: '272_help', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
  
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Designer.png',
    navbar: {
      title: 'Ruby on Rails',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Designer.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/JackSun815/272_help',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Tutorial',
          items: [
            {
              label: 'Get Started',
              to: '/docs/Key-Concepts',
            },
          ],
        },
        {
          title: 'More Resources',
          items: [
            {
              label: '272 Schedule',
              href: 'https://67272.cmuis.net',
            },
            {
              label: 'Rails Website',
              href: 'https://rubyonrails.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/rails?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/Key-Concepts',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JackSun815/272_help',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JackSun, JoshWashington`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
