/*
 * @Author: atwlee
 * @Date: 2023-09-25 13:52:44
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-21 23:32:28
 * @Description:
 * @FilePath: /antd-composite/src/SortableTransfer/components/headers.tsx
 */
import { Checkbox } from 'antd';
import React from 'react';
interface LeftHeaderLeftProps {
  sourceHeaderLeft?: (
    numerator: number,
    denominator: number,
  ) => React.ReactNode;
  numerator: number;
  denominator: number;
  onChange: (all: boolean) => void;
}

export const LeftHeaderLeft = (props: LeftHeaderLeftProps) => {
  const { sourceHeaderLeft, numerator, denominator, onChange } = props;
  return (
    <div className="ant-sortable-transfer-source-header-left">
      <Checkbox
        indeterminate={numerator > 0 && denominator !== numerator}
        checked={numerator === denominator}
        onChange={(e) => onChange(e.target.checked)}
      >
        {sourceHeaderLeft
          ? sourceHeaderLeft(numerator, denominator)
          : `${numerator}/${denominator}`}
      </Checkbox>
    </div>
  );
};

export const LeftHeaderRight = ({
  sourceHeaderRight,
}: {
  sourceHeaderRight?: React.ReactNode;
}) => {
  return sourceHeaderRight ? (
    <div>{sourceHeaderRight}</div>
  ) : (
    <span className="ant-sortable-transfer-source-header-right">Source</span>
  );
};

export const RightHeaderLeft = ({
  selected,
  targetHeaderLeft,
}: {
  selected: number;
  targetHeaderLeft?: (selected: number) => React.ReactNode;
}) => {
  return targetHeaderLeft && <div>{targetHeaderLeft(selected)}</div>;
};

export const RightHeaderRight = ({
  targetHeaderRight,
  onClean,
}: {
  targetHeaderRight?: React.ReactNode;
  onClean: () => void;
}) => {
  return targetHeaderRight ? (
    <div>{targetHeaderRight}</div>
  ) : (
    <span
      className="ant-sortable-transfer-target-header-right"
      onClick={onClean}
    >
      Clear
    </span>
  );
};
