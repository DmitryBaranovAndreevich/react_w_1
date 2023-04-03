import SeachIcon from '../seachIcon/searchIcon';
import React, { FormEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';

const SeachBar = () => {
  const init = JSON.parse(localStorage.getItem('inputState') as string) || { mainInput: '' };
  const [state, setState] = useState(init);
  const hadleInput = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState({ ...state, [input.name]: input.value });
  };

  const componentCleanup = () => {
    localStorage.setItem('inputState', JSON.stringify(state));
  };

  useEffect(() => {
    componentCleanup();
  }, [state]);

  return (
    <form className={styles.form}>
      <SeachIcon />
      <input
        className={styles.input}
        type="text"
        name="mainInput"
        value={state.mainInput}
        onChange={hadleInput}
      />
    </form>
  );
};

export default SeachBar;
