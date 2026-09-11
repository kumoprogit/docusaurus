// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kumopro',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://kumoprogit.github.io/',
  baseUrl: '/docusaurus/',

  organizationName: 'kumoprogit',
  projectName: 'docusaurus',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
           'https://github.com/kumoprogit/docusaurus/tree/main/kumopro/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
           'https://github.com/kumoprogit/docusaurus/tree/main/kumopro/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'top',
      // static/img/banner-icon.png を表示し、static/docs/special-coupon.pdf にリンクする例
      content: `
      <span style="font-size: 24px; font-weight: bold;">
        <img src="/docusaurus/img/kumo_icon.png" width="40" height="40" style="vertical-align: middle; margin-right: 12px;" />
        メンバー向け情報
      </span>
      `,
      backgroundColor: '#ffffff',
      textColor: '#091e42',
      isCloseable: false,
    },
//    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: true,
    },

    navbar: {
      title:'',
      items:[],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kumopro. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }
};

export default config;
