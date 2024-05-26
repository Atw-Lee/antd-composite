/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:23:25
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-26 22:17:33
 * @Description:
 * @FilePath: /antd-composite/src/SortableTransfer/index.tsx
 */
import { Checkbox, Empty } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { debounce } from 'radash';
import { NumberSize, Resizable, ResizeDirection } from 're-resizable';
import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import DraggableList from './components/draggable';
import {
  LeftHeaderLeft,
  LeftHeaderRight,
  RightHeaderLeft,
  RightHeaderRight,
} from './components/headers';
import { LeftSearch } from './components/search';
import './index.less';
import type { TransferProps, TransferRef } from './type';

type ResizeCallbackParams = [
  MouseEvent | TouchEvent,
  ResizeDirection,
  HTMLElement,
  NumberSize,
];

function Index<T extends { [key: string]: any }>(
  props: TransferProps<T>,
  ref: ForwardedRef<TransferRef>,
) {
  const {
    width = 700,
    height = 375,
    transferWidth = 340,
    allowResizable = false,
    dataSource,
    fieldNames = {
      id: 'id',
      name: 'name',
    },
    sourceHeaderLeft,
    sourceHeaderRight,
    targetHeaderLeft,
    targetHeaderRight,
    onChange,
    value,
  } = props;

  const keyCode = fieldNames.id;
  const nameCode = fieldNames.name;

  const [leftWidth, setLeftWidth] = useState(transferWidth);
  const [rightWidth, setRightWidth] = useState(transferWidth);
  const leftWidthRef = useRef(transferWidth);
  const rightWidthRef = useRef(transferWidth);
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
  const [searchLeftData, setSearchLeftData] = useState<T[]>();
  const [searchRightData, setSearchRightData] = useState<T[]>();

  useEffect(() => {
    setSelectedKeys(value?.map((i) => i[keyCode]) ?? []);
  }, [value]);

  // 用map对象存一下dataSource
  const dataSourceMapMemo = useMemo(() => {
    return new Map(dataSource.map((i) => [i[keyCode], i]));
  }, [dataSource]);

  /* —————————————————————————onChange—————————————————————————————————— */
  const handleOnchange = (keys: (string | number)[]) => {
    let result: T[] = [];
    for (const key of keys) {
      if (dataSourceMapMemo.has(key)) {
        result.push(dataSourceMapMemo.get(key)!);
      }
    }
    onChange?.(result);
  };

  /* —————————————————————————拖拽的回调处理—————————————————————————————————— */
  const onLeftResize = useCallback((...rest: ResizeCallbackParams) => {
    const { width } = rest[3];
    setLeftWidth(leftWidthRef.current + width);
    setRightWidth(rightWidthRef.current - width);
  }, []);
  const onRightResize = useCallback((...rest: ResizeCallbackParams) => {
    const { width } = rest[3];
    setRightWidth(rightWidthRef.current + width);
    setLeftWidth(leftWidthRef.current - width);
  }, []);

  const onLeftResizeStop = useCallback((...rest: ResizeCallbackParams) => {
    const { width } = rest[3];
    leftWidthRef.current = leftWidthRef.current + width;
    rightWidthRef.current = rightWidthRef.current - width;
  }, []);
  const onRightResizeStop = useCallback((...rest: ResizeCallbackParams) => {
    const { width } = rest[3];
    leftWidthRef.current = leftWidthRef.current - width;
    rightWidthRef.current = rightWidthRef.current + width;
  }, []);

  /* —————————————————————————左侧—————————————————————————————————— */
  const handleClickItem = (e: CheckboxChangeEvent, keyCode: string) => {
    const checked = e.target.checked;
    if (checked) {
      const selectedKeysTemp = [...selectedKeys, keyCode];
      setSelectedKeys(selectedKeysTemp);
      handleOnchange(selectedKeysTemp);
    } else {
      const selectedKeysTemp = selectedKeys.filter((item) => item !== keyCode);
      setSelectedKeys(selectedKeysTemp);
      handleOnchange(selectedKeysTemp);
    }
  };
  const handleAllSelected = (all: boolean) => {
    if (all) {
      const selectedKeysTemp = dataSource.map((item) => item[keyCode]);
      setSelectedKeys(selectedKeysTemp);
      handleOnchange(selectedKeysTemp);
    } else {
      setSelectedKeys([]);
      handleOnchange([]);
    }
  };
  const handleLeftSearch = (searchText: string) => {
    if (searchText === '') {
      setSearchLeftData(undefined);
    } else {
      const searchResult = dataSource.filter((i) =>
        i[nameCode].includes(searchText),
      );
      setSearchLeftData(searchResult);
    }
  };
  /* —————————————————————————右侧—————————————————————————————————— */
  const handleOnClean = () => {
    setSelectedKeys([]);
    handleOnchange([]);
  };
  const handleRightSearch = (searchText: string) => {
    if (searchText === '') {
      setSearchRightData(undefined);
    } else {
      const searchResult = dataSource.filter((i) =>
        i[nameCode].includes(searchText),
      );
      setSearchRightData(searchResult);
    }
  };
  const handleDraggableListData = () => {
    if (!searchRightData) return selectedKeys;
    else {
      return searchRightData
        .filter((i) => selectedKeys.includes(i[keyCode]))
        .map((i) => i[keyCode]);
    }
  };

  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        setSelectedKeys([]);
      },
    };
  });

  return (
    <div style={{ width, height }} className="ant-sortable-transfer-container">
      <Resizable
        size={{ width: leftWidth, height }}
        onResize={onLeftResize}
        onResizeStop={onLeftResizeStop}
        enable={{
          right: allowResizable,
        }}
      >
        <div className="ant-sortable-transfer-source-wrapper">
          <div className="ant-sortable-transfer-source-header">
            <LeftHeaderLeft
              numerator={selectedKeys.length}
              denominator={dataSource.length}
              sourceHeaderLeft={sourceHeaderLeft}
              onChange={handleAllSelected}
            />
            <LeftHeaderRight sourceHeaderRight={sourceHeaderRight} />
          </div>
          <LeftSearch onChange={debounce({ delay: 300 }, handleLeftSearch)} />
          <ul className="ant-sortable-transfer-source-list">
            {(searchLeftData ?? dataSource).map((i) => (
              <li
                key={i[keyCode]}
                className="ant-sortable-transfer-source-list-item"
              >
                <Checkbox
                  checked={selectedKeys.includes(i[keyCode])}
                  onChange={(e) => handleClickItem(e, i[keyCode])}
                >
                  {i[nameCode]}
                </Checkbox>
              </li>
            ))}
            {searchLeftData?.length === 0 && <Empty />}
          </ul>
        </div>
      </Resizable>
      <Resizable
        size={{ width: rightWidth, height }}
        onResize={onRightResize}
        onResizeStop={onRightResizeStop}
        enable={{
          left: allowResizable,
        }}
      >
        <div className="ant-sortable-transfer-target-wrapper">
          <div className="ant-sortable-transfer-target-header">
            <RightHeaderLeft
              selected={selectedKeys.length}
              targetHeaderLeft={targetHeaderLeft}
            />
            <RightHeaderRight
              targetHeaderRight={targetHeaderRight}
              onClean={handleOnClean}
            />
          </div>
          <LeftSearch onChange={debounce({ delay: 300 }, handleRightSearch)} />
          <div className="ant-sortable-transfer-target-list">
            <DraggableList
              data={handleDraggableListData()}
              setSortData={setSelectedKeys}
              dataSourceMap={dataSourceMapMemo}
              nameCode={nameCode}
              handleOnchange={handleOnchange}
              disabledDraggable={!!searchRightData}
            />
          </div>
        </div>
      </Resizable>
    </div>
  );
}

export default forwardRef(Index);
