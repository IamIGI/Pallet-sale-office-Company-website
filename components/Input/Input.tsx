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
  inputValue: string;
  handleValueChange: (id: string, value: string) => void;
  error?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  formData,
  inputValue,
  handleValueChange,
  error = false,
}) => {
  const { id, label, required, type, pattern, placeholder } = formData;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(formData.id, event.target.value);
  };

  useEffect(() => {}, [inputValue]);

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
        style={{ borderColor: error ? 'red' : 'initial' }}
      />
    </div>
  );
};

export default FormInput;
