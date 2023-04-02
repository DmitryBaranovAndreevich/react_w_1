import ICheckBox from '../../interfaces/ICheckBox';
import React, { FC, FormEvent, RefObject } from 'react';
import styles from './checkBox.module.css';

const CheckBox: FC<ICheckBox> = ({ span, validation, error, setChange, name, value }) => {
  const htmlFor = `checkBox-${Math.random()}`;

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setChange((priv) => {
      const res = {
        ...priv,
        checkBox: input.checked,
      };
      return res;
    });
  };

  return (
    <div className={styles.container}>
      <input
        checked={value}
        name={name}
        type="checkbox"
        id={htmlFor}
        className={styles.input}
        onChange={handleChange}
      />
      <label htmlFor={htmlFor} className={styles.label}></label>
      <span className={styles.span}>{span}</span>
      {validation && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default CheckBox;
