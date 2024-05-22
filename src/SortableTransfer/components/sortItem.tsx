/*
 * @Author: atwlee
 * @Date: 2023-09-25 16:26:51
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-22 22:33:14
 * @Description:
 * @FilePath: /antd-composite/src/SortableTransfer/components/sortItem.tsx
 */
import { DeleteOutlined, DragOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { theme } from 'antd';
import classNames from 'classnames';
import React from 'react';

const { useToken } = theme;

interface SortableItemProps {
  id: string | number;
  name: string;
  deleteItem?: (id: string | number) => void;
  className?: string;
  styles?: React.CSSProperties;
}

export function SortableItem(props: SortableItemProps) {
  const { id, name, deleteItem, className, styles } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const { token } = useToken();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    borderColor: attributes['aria-pressed'] ? token.colorPrimaryHover : '',
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...styles }}
      className={classNames([
        'ant-sortable-transfer-target-list-item',
        className,
      ])}
      {...attributes}
    >
      <div className="ant-sortable-transfer-target-list-item-name">
        <span {...listeners}>
          <DragOutlined />
        </span>
        <span style={{ marginLeft: '8px' }}>{name}</span>
      </div>
      <span className="ant-sortable-transfer-target-list-item-delete">
        <DeleteOutlined onClick={() => deleteItem?.(id)} />
      </span>
    </div>
  );
}
