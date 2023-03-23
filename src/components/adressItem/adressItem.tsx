import React from 'react';
import TDataRef from '../../interfaces/TDataRef';
import styles from './adressItem.module.css';

class AdressItem extends React.Component<TDataRef> {
  render() {
    const { nameUser, surName, date, select, file } = this.props;
    return (
      <div className={styles.container}>
        <p className={styles.text}>Имя : {nameUser}</p>
        <p className={styles.text}>Фамилия: {surName}</p>
        <p className={styles.text}>Дата регистрации: {date}</p>
        <p className={styles.text}>Пол: {select}</p>
        <p className={styles.text}>Согласие на обработку данных: получено</p>
        <p className={styles.text}>Загруженный файл: {file}</p>
      </div>
    );
  }
}

export default AdressItem;
