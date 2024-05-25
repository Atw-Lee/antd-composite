/*
 * @Author: atwlee
 * @Date: 2024-05-13 11:38:26
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 14:52:20
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/components/AlphabetList.tsx
 */
import { Col, Empty, Row, theme } from 'antd';
import React, { useMemo } from 'react';
import { AlphabetSelectProps, Value } from '../type';
const { useToken } = theme;
function Index(props: {
  data?: Value[];
  fieldNames: {
    id: string;
    name: string;
  };
  rowProps?: AlphabetSelectProps['rowProps'];
  colProps?: AlphabetSelectProps['colProps'];
  value?: Value[];
  onClick: (value: Value) => void;
  notFoundContent?: React.ReactNode;
  listHeight?: number;
}) {
  const {
    data,
    fieldNames,
    rowProps,
    colProps,
    value,
    onClick,
    notFoundContent,
    listHeight,
  } = props;
  const { token } = useToken();

  const selectKey = useMemo(() => {
    return new Set<string>(value?.map((i) => i[fieldNames.id]));
  }, [value]);

  return (
    <div className="ant-alphabet-select-data-wrapper">
      <Row
        gutter={[8, 8]}
        {...rowProps}
        style={{
          maxWidth: '400px',
          maxHeight: listHeight + 'px',
          overflow: 'auto',
          ...rowProps?.style,
        }}
      >
        {data?.map((item) => {
          const active = selectKey.has(item[fieldNames.id]);
          return (
            <Col
              key={item[fieldNames.id]}
              span={6}
              {...colProps}
              onClick={() => {
                onClick?.(item);
              }}
            >
              <div
                className="ant-alphabet-select-item"
                style={{
                  borderRadius: token.borderRadius,
                  ...(active && {
                    backgroundColor: token.colorPrimary,
                    color: '#fff',
                  }),
                }}
                title={item[fieldNames.name]}
              >
                {item[fieldNames.name]}
              </div>
            </Col>
          );
        })}
        {(data?.length === 0 && notFoundContent) ?? (
          <Empty style={{ margin: 'auto' }} />
        )}
      </Row>
    </div>
  );
}

export default Index;
