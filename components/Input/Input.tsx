'use client';

import React, { useEffect, useState } from 'react';
import classes from './Input.module.scss';

interface FormData {
  id: string;
  label: string;
  required: boolean;
  type: string;
  pattern?: string;
  placeholder?: string;
}

interface FormInputProps {
  formData: FormData;
  handleValueChange: (id: string, value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  formData,
  handleValueChange,
}) => {
  const { id, label, required, type, pattern, placeholder } = formData;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    handleValueChange(formData.id, inputValue);
  }, [inputValue]);

  return (
    <div className={classes.wrapper}>
      <label htmlFor={id} className={`${inputValue ? classes.active : ''}`}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder || label}
        pattern={pattern}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default FormInput;
