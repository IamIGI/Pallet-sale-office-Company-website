'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import classes from './OfferList.module.scss';
import localStorageUtil, {
  OfferListLS,
  lsKeys,
} from '@/utils/localStorage.util';

interface OfferListInterface {
  data: string[];
}

function getItemsValueInitialState(data: string[]): OfferListLS[] {
  let itemsValue = localStorageUtil.readFromLocalStorage(
    lsKeys.offerData
  ) as OfferListLS[];
  if (!itemsValue) {
    itemsValue = Array.from({ length: data.length }, (v, i) => {
      return { name: data[i].replace(/ /g, '_'), value: 0 };
    });
  }
  return itemsValue;
}

function getCheckedInitialCheckedValues(data: string[]): boolean[] {
  let currentState = localStorageUtil.readFromLocalStorage(
    lsKeys.offerData
  ) as OfferListLS[];
  if (currentState) return currentState.map((item) => item.value > 0);

  return Array.from({ length: data.length }, () => false);
}

export default function OfferList({ data }: OfferListInterface) {
  console.log(data);

  const [domLoaded, setDomLoaded] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean[]>(
    getCheckedInitialCheckedValues(data)
  );
  const [itemsValue, setItemsValue] = useState<OfferListLS[]>(
    getItemsValueInitialState(data)
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
    setItemsValue((prev) => {
      const newArray = [...prev];
      newArray[index] = { name: newArray[index].name, value };

      return newArray;
    });
  }

  useEffect(() => {
    console.log(itemsValue);
    localStorageUtil.saveToLocalStorage(lsKeys.offerData, itemsValue);
  }, [itemsValue]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className={classes.wrapper}>
          <ul>
            {data.map((item, index) => (
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
                      value={itemsValue[index].value}
                      onChange={(e) => handleItemValueChange(e, index)}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
