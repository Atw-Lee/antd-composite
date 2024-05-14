/*
 * @Author: atwlee
 * @Date: 2024-05-13 09:28:06
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-13 16:04:16
 * @Description:
 * @FilePath: /antd-composite/.dumirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'Ant Design Composite',
  themeConfig: {
    name: 'antd-composite',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
});
