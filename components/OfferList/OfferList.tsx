'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import classes from './OfferList.module.scss';
import localStorageUtil, { lsKeys } from '@/utils/localStorage.util';

interface OfferListInterface {
  data: string[];
}
export default function OfferList({ data }: OfferListInterface) {
  console.log(data);
  const [isChecked, setIsChecked] = useState<boolean[]>(
    Array.from({ length: data.length }, () => false)
  );
  const [itemValue, setItemValue] = useState<number[]>(
    Array.from({ length: data.length }, () => 0)
  );

  function handleCheckboxChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setIsChecked((prev) => {
      const newCheckedState = [...prev];
      newCheckedState[index] = e.target.checked;

      return newCheckedState;
    });
  }

  function handleItemValueChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const value = Number(e.target.value);
    setItemValue((prev) => {
      const newArray = [...prev];
      newArray[index] = value;

      return newArray;
    });
  }

  useEffect(() => {
    localStorageUtil.saveToLocalStorage(lsKeys.offerData, itemValue);
  }, [itemValue]);

  return (
    <div className={classes.wrapper}>
      <ul>
        {data.map((item, index) => (
          <>
            <li key={index}>
              <div className={classes.itemWrapper}>
                <p dangerouslySetInnerHTML={{ __html: item }} />
                <input
                  type="checkbox"
                  checked={isChecked[index]}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </div>
              {isChecked[index] && (
                <div className={classes.amountWrapper}>
                  <p>Ilość</p>
                  <input
                    value={itemValue[index]}
                    onChange={(e) => handleItemValueChange(e, index)}
                  />
                </div>
              )}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
