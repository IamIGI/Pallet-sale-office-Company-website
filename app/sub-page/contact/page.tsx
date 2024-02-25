'use client';

import FormInput from '@/components/Input/Input';
import classes from './page.module.scss';
import data from '@/assets/data/contactUsPage.json';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import sendIcon from '@/assets/icons/SendMessage.svg';

export default function ContactPage() {
  const initialFormValues: { [key: string]: string } = { message: '' };
  Object.keys(data.form).forEach((fieldName) => {
    initialFormValues[fieldName] = '';
  });

  const [formValues, setFormValues] =
    useState<typeof initialFormValues>(initialFormValues);

  function handleInputValue(id: string, value: string) {
    setFormValues((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function handleMessageChange(value: string) {
    setFormValues((prevData) => ({
      ...prevData,
      message: value,
    }));
  }

  useEffect(() => console.log(formValues), [formValues]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.upperWrapper}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <form className={classes.formWrapper}>
        <div className={classes.leftFormWrapper}>
          <FormInput
            formData={data.form.name}
            handleValueChange={handleInputValue}
          />
          <FormInput
            formData={data.form.company}
            handleValueChange={handleInputValue}
          />
          <FormInput
            formData={data.form.phone}
            handleValueChange={handleInputValue}
          />
          <FormInput
            formData={data.form.email}
            handleValueChange={handleInputValue}
          />
        </div>
        <div className={classes.rightFormWrapper}>
          <FormInput
            formData={data.form.topic}
            handleValueChange={handleInputValue}
          />
          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            onChange={(e) => handleMessageChange(e.target.value)}
          ></textarea>
        </div>
      </form>
      <div className={classes.bottomWrapper}>
        <Button
          text={data.buttonText}
          href="/sub-page/success-page"
          icon={sendIcon}
        ></Button>
        <p>lub</p>
        <p>
          <span>{data.email}</span> <br /> kopiuj
        </p>
      </div>
    </div>
  );
}
