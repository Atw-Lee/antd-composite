/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:27:44
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-22 22:34:31
 * @Description:
 * @FilePath: /antd-composite/src/SortableTransfer/type.ts
 */
import React from 'react';
export interface TransferProps<T> {
  width?: number;
  height?: number;
  transferWidth?: number;
  dataSource: T[];
  fieldNames?: {
    id: string;
    name: string;
  };
  sourceHeaderLeft?: (
    numerator: number,
    denominator: number,
  ) => React.ReactNode;
  sourceHeaderRight?: React.ReactNode;
  targetHeaderLeft?: (selected: number) => React.ReactNode;
  targetHeaderRight?: React.ReactNode;
  allowResizable?: boolean;
  onChange?: (data: T[]) => void;
}

export interface TransferRef {
  clear: () => void;
}
