import React, { FC } from 'react';
import styles from './radioInput.module.css';

const RadioInput: FC<{ spanLeft: string; spanRight: string }> = ({ spanLeft, spanRight }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="radio" name="switch" id="1" defaultChecked />
      <label className={styles.label} htmlFor="1">
        {spanLeft}
      </label>
      <input className={styles.input} type="radio" name="switch" id="2" />
      <label className={styles.label} htmlFor="2">
        {spanRight}
      </label>
    </div>
  );
};

export default RadioInput;
