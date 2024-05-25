/*
 * @Author: atwlee
 * @Date: 2024-05-13 11:10:16
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 14:25:24
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/hooks/useValue.ts
 */
import { isEmpty } from 'radash';
import { useEffect, useState } from 'react';
import type { AlphabetSelectProps, Value } from '../type';
function useAlphabetData(
  value: Value[] | undefined,
  fieldNames: AlphabetSelectProps['fieldNames'],
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  onChange?: (value: Value[]) => void,
  mode?: 'multiple' | 'tags',
) {
  const [values, setValues] = useState<Value[]>([]);

  useEffect(() => {
    if (isEmpty(value)) {
      setValues([]);
    } else setValues([...(value ?? [])]);
  }, [value]);

  const onClick = (v: Value) => {
    if (!mode) {
      setValues([v]);
      onChange?.([v]);
      setOpen(false);
    } else {
      const index = values.findIndex(
        (item) => item[fieldNames!.id!] === v[fieldNames!.id!],
      );
      if (index > -1) {
        const newValue = values.filter(
          (item) => item[fieldNames!.id!] !== v[fieldNames!.id!],
        );
        setValues(newValue);
        onChange?.(newValue);
      } else {
        setValues([...values, v]);
        onChange?.([...values, v]);
      }
    }
  };

  return { value: values, onClick, setValue: setValues };
}

export default useAlphabetData;
