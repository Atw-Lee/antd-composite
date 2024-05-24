/*
 * @Author: atwlee
 * @Date: 2024-05-12 20:55:09
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-24 23:21:35
 * @Description:
 * @FilePath: /antd-composite/.fatherrc.ts
 */
import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist', ignores: ['**/demo/*'] },
});
