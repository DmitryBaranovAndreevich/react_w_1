import React, { FC } from 'react';
import TDataRef from '../../interfaces/TDataForm';
import styles from './adressItem.module.css';

const AdressItem: FC<TDataRef> = ({ userName, surName, date, select, file }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Имя : {userName}</p>
      <p className={styles.text}>Фамилия: {surName}</p>
      <p className={styles.text}>Дата регистрации: {date}</p>
      <p className={styles.text}>Пол: {select}</p>
      <p className={styles.text}>Согласие на обработку данных: получено</p>
      <p className={styles.text}>Загруженный файл: {file}</p>
    </div>
  );
};

export default AdressItem;
