/*
 * @Author: atwlee
 * @Date: 2024-05-12 20:55:09
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 15:00:40
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/index.tsx
 */
import { Divider, Select } from 'antd';
import classNames from 'classnames';
import React, {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AlphabetList from './components/AlphabetList';
import RadioGroup, { RadioGroupValue } from './components/RadioGroup';
import useAlphabetData from './hooks/useAlphabetData';
import useValue from './hooks/useValue';
import './index.less';
import type { AlphabetSelectProps, Value } from './type';

function Index(props: AlphabetSelectProps) {
  const {
    onChange,
    data,
    fieldNames = { id: 'id', name: 'name' },
    rowProps,
    colProps,
    notFoundContent,
    listHeight = 232,
    defaultOpen,
    ...restProps
  } = props;
  const [radioValue, setRadioValue] = useState<RadioGroupValue>('ABCDE');
  const [open, setOpen] = useState(defaultOpen);
  const deferredOpen = useDeferredValue(open);
  const alphabetData = useAlphabetData(data, radioValue);
  const { value, onClick, setValue } = useValue(
    restProps.value,
    fieldNames,
    setOpen,
    onChange,
    restProps.mode,
  );

  const RadioGroupMemo = useMemo(
    () => (
      <RadioGroup
        size={restProps.size}
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
      />
    ),
    [restProps.size, radioValue],
  );

  useEffect(() => {
    if (open !== undefined) setOpen(restProps.open);
  }, [restProps.open]);

  const dropdownRender = useCallback(
    () => (
      <div>
        {RadioGroupMemo}
        <Divider style={{ margin: '6px 0' }} />
        <AlphabetList
          fieldNames={fieldNames}
          data={alphabetData}
          onClick={onClick}
          notFoundContent={notFoundContent}
          value={value}
          listHeight={listHeight}
          rowProps={rowProps}
          colProps={colProps}
        />
      </div>
    ),
    [
      RadioGroupMemo,
      fieldNames,
      alphabetData,
      value,
      notFoundContent,
      listHeight,
      rowProps,
      colProps,
    ],
  );

  return (
    <Select
      popupMatchSelectWidth={false}
      showSearch={false}
      {...restProps}
      fieldNames={{
        label: fieldNames.name,
        value: fieldNames.id,
      }}
      value={value.map((i) => i[fieldNames.id])}
      open={deferredOpen}
      options={data}
      popupClassName={classNames([
        'ant-alphabet-select-popup',
        restProps.popupClassName,
      ])}
      dropdownRender={dropdownRender}
      onChange={(_, option) => {
        setValue((option ?? []) as Value[]);
        onChange?.((option ?? []) as Value[]);
      }}
      onDropdownVisibleChange={(open) => {
        setOpen(open);
        restProps.onDropdownVisibleChange?.(open);
      }}
    />
  );
}

export default Index;
