import IInput from '../../interfaces/IInput';
import React, { FC } from 'react';
import styles from './input.module.css';

const Input: FC<IInput> = ({ type, error, validation, name, setChange, value }) => {
  return (
    <div className={styles.container}>
      <input name={name} type={type} className={styles.input} onChange={setChange} value={value} />
      {validation && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
