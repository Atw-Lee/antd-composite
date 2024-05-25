/*
 * @Author: atwlee
 * @Date: 2024-05-13 11:10:16
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-13 22:08:26
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/hooks/useAlphabetData.ts
 */
import { useEffect, useMemo, useState } from 'react';
import type { RadioGroupValue } from '../components/RadioGroup';
import type { Value } from '../type';
function useAlphabetData(allData: Value[] | undefined, key: RadioGroupValue) {
  const [data, setData] = useState<Value[]>([]);
  const concludeData = useMemo(() => {
    const obj: { [name in RadioGroupValue]: Value[] } = {
      ABCDE: [],
      FGHIJ: [],
      KLMNO: [],
      PQRST: [],
      UVWXYZ: [],
    };

    allData?.forEach((element) => {
      switch (element.alphabet) {
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
          obj.ABCDE.push(element);
          break;
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
          obj.FGHIJ.push(element);
          break;
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
          obj.KLMNO.push(element);
          break;
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
          obj.PQRST.push(element);
          break;
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
          obj.UVWXYZ.push(element);
          break;
      }
    });

    return obj;
  }, [allData]);
  useEffect(() => {
    setData(concludeData[key]);
  }, [concludeData, key]);

  return data;
}

export default useAlphabetData;
