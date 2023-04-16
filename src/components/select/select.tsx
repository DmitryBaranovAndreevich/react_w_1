import ISelect from '../../interfaces/ISelect';
import React, { FC } from 'react';
import styles from './select.module.css';

const Select: FC<ISelect> = ({ options, label, validation, error, name, setChange, value }) => {
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <select value={value} name={name} className={styles.select} id={htmlFor} onChange={setChange}>
        <option value={'default'} disabled>
          -Ваш пол-
        </option>
        {options.map((option, index: number) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
      {validation && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Select;
