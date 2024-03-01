'use client';

import FormInput from '@/components/Input/Input';
import classes from './page.module.scss';
import data from '@/assets/data/contactUsPage.json';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import sendIcon from '@/assets/icons/SendMessage.svg';
import copyTextUtil from '@/utils/copyText.util';
import formValidationUtil from '@/utils/formValidation.util';
import { sendContactFrom } from '@/utils/api.util';
import { useRouter } from 'next/navigation';

interface FieldConfig {
  id: string;
  label: string;
  required: boolean;
  type: 'text' | 'tel' | 'email';
  pattern?: string;
}

export default function ContactPage() {
  const router = useRouter();
  const initialFormValues: { [key: string]: string } = { message: '' };
  const initialFormErrorValues: { [key: string]: boolean } = { message: false };

  Object.keys(data.form).forEach((fieldName) => {
    const object = data.form[fieldName as keyof typeof data.form];
    initialFormValues[object.id] = '';
    initialFormErrorValues[object.id] = false;
  });

  const [formValues, setFormValues] =
    useState<typeof initialFormValues>(initialFormValues);

  const [formValuesError, setFormValuesError] = useState<
    typeof initialFormErrorValues
  >(initialFormErrorValues);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleInputValue(id: string, value: string) {
    let sanitizedValue: string;

    switch (id) {
      case data.form.nameObj.id:
        sanitizedValue = formValidationUtil.allowOnlyLetters(value);
        break;
      case data.form.phoneObj.id:
        sanitizedValue = formValidationUtil.allowOnlyNumbers(value);
        break;

      default:
        sanitizedValue = value;
        break;
    }

    setFormValues((prevData) => ({
      ...prevData,
      [id]: sanitizedValue,
    }));
  }

  async function handleSubmit() {
    const formConfigArray = Object.values(data.form);
    const currentErrorsState = formValuesError;
    formConfigArray.forEach((inputData) => {
      if (inputData.required) {
        const inputValue = formValues[inputData.id];
        currentErrorsState[inputData.id] = inputValue.length <= 0;
      }
    });
    currentErrorsState.message = formValues.message.length <= 10;

    setFormValuesError({ ...currentErrorsState });

    if (!Object.values(currentErrorsState).includes(true)) {
      setIsLoading(true);
      try {
        await sendContactFrom(formValues);
        setFormValues(initialFormValues);
        setFormValuesError(initialFormErrorValues);
        router.push('/sub-page/success-page');
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  }

  function handleMessageChange(value: string) {
    setFormValues((prevData) => ({
      ...prevData,
      message: value,
    }));
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.upperWrapper}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <form className={classes.formWrapper}>
        <div className={classes.leftFormWrapper}>
          <FormInput
            formData={data.form.nameObj}
            inputValue={formValues[data.form.nameObj.id]}
            handleValueChange={handleInputValue}
            error={formValuesError[data.form.nameObj.id]}
          />
          <FormInput
            formData={data.form.companyObj}
            inputValue={formValues[data.form.companyObj.id]}
            handleValueChange={handleInputValue}
            error={formValuesError[data.form.companyObj.id]}
          />
          <FormInput
            formData={data.form.phoneObj}
            inputValue={formValues[data.form.phoneObj.id]}
            handleValueChange={handleInputValue}
            error={formValuesError[data.form.phoneObj.id]}
          />
          <FormInput
            formData={data.form.emailObj}
            inputValue={formValues[data.form.emailObj.id]}
            handleValueChange={handleInputValue}
            error={formValuesError[data.form.emailObj.id]}
          />
        </div>
        <div className={classes.rightFormWrapper}>
          <FormInput
            formData={data.form.topicObj}
            inputValue={formValues[data.form.topicObj.id]}
            handleValueChange={handleInputValue}
            error={formValuesError[data.form.topicObj.id]}
          />
          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            value={formValues.message}
            onChange={(e) => handleMessageChange(e.target.value)}
            required={true}
            style={{ borderColor: formValuesError.message ? 'red' : 'initial' }}
          ></textarea>
        </div>
      </form>
      <div className={classes.errorWrapper}>
        {Object.values(formValuesError).includes(true) ? (
          <p>Wypełnij podświetlone pola </p>
        ) : (
          <p></p>
        )}
      </div>
      <div
        className={classes.bottomWrapper}
        style={{
          marginTop: Object.values(formValuesError).includes(true)
            ? '0px'
            : '24px',
        }}
      >
        <Button
          text={data.buttonText}
          href="/sub-page/success-page"
          icon={sendIcon}
          handleClick={handleSubmit}
        ></Button>
        <p>lub</p>
        <p onClick={() => copyTextUtil.copy(data.email)}>
          <span>{data.email}</span> <br /> kopiuj
        </p>
      </div>
    </div>
  );
}
