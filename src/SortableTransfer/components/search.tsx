/*
 * @Author: atwlee
 * @Date: 2023-09-25 14:21:41
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-19 18:47:22
 * @Description:
 * @FilePath: /antd-composite/src/Transfer/components/search.tsx
 */
import { Input } from 'antd';
import React from 'react';
export function LeftSearch({
  placeholder = 'search',
  onChange,
}: {
  onChange: (searchText: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="ant-sortable-transfer-search-container">
      <Input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
