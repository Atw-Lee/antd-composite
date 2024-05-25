/*
 * @Author: atwlee
 * @Date: 2023-09-25 16:34:25
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-22 23:32:05
 * @Description:
 * @FilePath: /antd-composite/src/SortableTransfer/components/draggable.tsx
 */
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import React, { useState } from 'react';

import { Empty, theme } from 'antd';
import classNames from 'classnames';
import { isEmpty } from 'radash';
import { SortableItem } from './sortItem';
const { useToken } = theme;

interface DraggableListProps<T> {
  data: (string | number)[];
  setSortData: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  dataSourceMap: Map<string | number, T>;
  nameCode: string;
  handleOnchange: (keys: (string | number)[]) => void;
  disabledDraggable?: boolean;
}

export default function Index<T extends { [key: string]: any }>(
  props: DraggableListProps<T>,
) {
  const {
    data,
    setSortData,
    dataSourceMap,
    nameCode,
    handleOnchange,
    disabledDraggable,
  } = props;

  const { token } = useToken();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDeleteItem = (id: string | number) => {
    setSortData((items) => {
      const keys = items.filter((item) => item !== id);
      handleOnchange(keys);
      return keys;
    });
  };
  const [activeId, setActiveId] = useState<string | number | null>(null);

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id && over) {
      setSortData((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over?.id);
        const keys = arrayMove(items, oldIndex, newIndex);
        handleOnchange(keys);
        return keys;
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]}
    >
      <SortableContext
        items={data}
        strategy={verticalListSortingStrategy}
        disabled={disabledDraggable}
      >
        {data.map((i) => (
          <SortableItem
            key={i}
            id={i}
            name={dataSourceMap.get(i)?.[nameCode]}
            deleteItem={handleDeleteItem}
            className={classNames({
              'ant-sortable-transfer-target-list-item-disabled-draggable':
                disabledDraggable,
            })}
          />
        ))}
        {isEmpty(data) && <Empty />}
      </SortableContext>
      <DragOverlay>
        {activeId ? (
          <SortableItem
            key={activeId}
            id={activeId}
            name={dataSourceMap.get(activeId)?.[nameCode]}
            className={classNames([
              'ant-sortable-transfer-target-list-item-overlay',
            ])}
            styles={{
              borderColor: token.colorPrimaryHover,
            }}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
