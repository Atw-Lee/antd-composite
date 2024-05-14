/*
 * @Author: atwlee
 * @Date: 2024-05-13 09:28:06
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 23:13:01
 * @Description:
 * @FilePath: /antd-composite/.dumirc.ts
 */
import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
  themeConfig: defineThemeConfig({
    title: 'Ant Design Composite',
    name: 'antd-composite',
    github: 'https://github.com/Atw-Lee/antd-composite',
    description: {
      'zh-CN': '一个基于antd的复合组件库',
      'en-US': 'A composite components library with antd',
    },
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中' },
      { id: 'en-US', switchPrefix: 'EN' },
    ],
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide' },
        { title: '组件', link: '/components/alphabet-select' },
      ],
      'en-US': [
        { title: 'Guide', link: '/guide-en' },
        { title: 'Components', link: '/components/alphabet-select-en' },
      ],
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide',
        },
        {
          text: '组件',
          link: '/components/alphabet-select',
        },
      ],
      'en-US': [
        {
          type: 'primary',
          text: 'Start',
          link: '/guide-en',
        },
        {
          text: 'Components',
          link: '/components/alphabet-select-en',
        },
      ],
    },
    features: {
      'zh-CN': [
        {
          title: '继承Ant Design',
          details: '基于Ant Design，进行复合组件的封装，使业务组件更易使用。',
        },
        {
          title: '样式风格统一',
          details:
            '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。',
        },
        {
          title: '开箱即用',
          details:
            '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。',
        },
      ],
      'en-US': [
        {
          title: 'Extends Ant Design',
          details:
            'Based on Ant Design, encapsulation of composite components makes business components easier to use.',
        },
        {
          title: 'Uniform style',
          details:
            "Based on antd 5.0 CSS-in-JS style support, it fully unifies dumi's built-in styles and supports custom theme loading.",
        },

        {
          title: 'Simple Use',
          details:
            'Easy access, installation and use, fully integrated into Ant Design style, built-in theme switching, compact mode and other functions.',
        },
      ],
    },
  }),
});
