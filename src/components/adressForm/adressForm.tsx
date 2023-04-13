import AdressItem from '../adressItem/adressItem';
import CheckBox from '../checkBox/checkBox';
import Input from '../input/input';
import RadioInput from '../radioInput/radioInput';
import Select from '../select/select';
import React, { FormEvent, useEffect, useState } from 'react';
import styles from './adressForm.module.css';
import useForm from 'hooks/useForm';
import TDataForm from '../../interfaces/TDataForm';
import IStateValidation from '../../interfaces/IStateValidation';
import validationForm from '../../service/validateForm';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { formSlice } from '../../store/reducers/formSlice';

const AdressForm = () => {
  const dispatch = useAppDispatch();
  const { setFormValid, setFormData } = formSlice.actions;
  const { valid: validState, formData } = useAppSelector((state) => state.formReducer);
  // const initStateValidation = {
  //   validation: {
  //     nameUser: false,
  //     surName: false,
  //     date: false,
  //     select: false,
  //     checkBox: false,
  //     file: false,
  //   },
  //   items: [],
  //   isSend: false,
  //   formValid: false,
  // };

  const initFormValues = {
    userName: '',
    surName: '',
    date: '',
    select: 'default',
    checkBox: false,
    file: '',
  };

  const { state: formState, handleChange, setState: setFormState } = useForm<TDataForm>(formData);

  const [valid, setValid] = useState<IStateValidation>(validState);

  useEffect(() => {
    dispatch(setFormValid(valid));
    dispatch(setFormData(formState));
  }, [valid, formState]);

  const changeValidState = (key: string, value: boolean) => {
    setValid((priv) => {
      const res = {
        ...priv,
        validation: { ...priv.validation, [key]: value },
      };
      return res;
    });
  };

  useEffect(() => {
    changeValidState('nameUser', false);
  }, [formState.userName]);

  useEffect(() => {
    changeValidState('surName', false);
  }, [formState.surName]);

  useEffect(() => {
    changeValidState('date', false);
  }, [formState.date]);

  useEffect(() => {
    changeValidState('select', false);
  }, [formState.select]);

  useEffect(() => {
    changeValidState('checkBox', false);
  }, [formState.checkBox]);

  useEffect(() => {
    changeValidState('file', false);
  }, [formState.file]);

  const clearForm = () => {
    setFormState(initFormValues);
  };

  const validateForm = async () => {
    const { validName, validSurName, validDate, validSelect, validCheckBox, validFile } =
      validationForm(formState);
    changeValidState('nameUser', validName);
    changeValidState('surName', validSurName);
    changeValidState('date', validDate);
    changeValidState('select', validSelect);
    changeValidState('checkBox', validCheckBox);
    changeValidState('file', validFile);
    return !Object.values(validationForm(formState)).some((el) => el === true);
  };

  const handleSubmitButtonclick = async (e: FormEvent) => {
    e.preventDefault();
    const validate = await validateForm();
    if (validate) {
      setValid((priv) => {
        return { ...priv, items: [...priv.items, formState], isSend: true };
      });
      setTimeout(() => {
        setValid((priv) => {
          return { ...priv, isSend: false };
        });
        clearForm();
      }, 3000);
    }
  };
  return (
    <div className={styles.layout}>
      {valid.isSend && <p className={styles.sendMessage}>☑ Форма успешно отправлена</p>}
      <form className={styles.form} noValidate onSubmit={handleSubmitButtonclick}>
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <span className={styles.fieldName} data-testid={'inputName'}>
              Имя
            </span>
            <Input
              type="text"
              error="Введите имя с большой буквы"
              validation={valid.validation.nameUser}
              name={'userName'}
              value={formState.userName}
              setChange={handleChange}
            />
          </div>
          <div className={styles.flexContainer}>
            <span className={styles.fieldName}>Фамилия</span>
            <Input
              type="text"
              error="Введите фамилию с большой буквы"
              validation={valid.validation.surName}
              name={'surName'}
              value={formState.surName}
              setChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.flexContainer}>
          <span className={styles.fieldName}>Дата</span>
          <Input
            type="date"
            error="Выберете дату"
            validation={valid.validation.date}
            name={'date'}
            value={formState.date}
            setChange={handleChange}
          />
        </div>
        <div>
          <div className={styles.container}>
            <Select
              value={formState.select}
              name={'select'}
              label="Ваш пол"
              options={[
                { text: 'мужской', value: 'мужской' },
                { text: 'женский', value: 'женский' },
              ]}
              validation={valid.validation.select}
              error="Выберете один из пунктов"
              setChange={handleChange}
            />
            <CheckBox
              value={formState.checkBox}
              name={'checkBox'}
              span="Я соглашаюсь на обработку персональных данных в соответствии с Условиями использования сайта, Политикой обработки персональных данных и на получнение сообщений в процессе обработки"
              validation={valid.validation.checkBox}
              error="Необходимо согласие"
              setChange={setFormState}
            />
          </div>
          <div className={styles.flexContainer}>
            <span className={styles.fieldName}>
              Хотите ли вы срыть вашу информацию от всех пользователей?
            </span>
            <RadioInput spanLeft="Да" spanRight="Нет" />
          </div>
        </div>
        <Input
          value={formState.file}
          type="file"
          error="Выберете файл"
          validation={valid.validation.file}
          name={'file'}
          setChange={handleChange}
        />
        <button type="submit" className={styles.submitButton} data-testid={'submitButton'}>
          Сохранить
        </button>
      </form>
      <div className={styles.itemsContainer}>
        {valid.items.map((item, index) => (
          <AdressItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AdressForm;
