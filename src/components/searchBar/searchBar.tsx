import SeachIcon from '../seachIcon/searchIcon';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { Context } from 'service/context';
import { apiConfig } from 'service/constans';
import IItem from 'interfaces/IItem';

const SeachBar = () => {
  const init = JSON.parse(localStorage.getItem('inputState') as string) || { mainInput: '' };
  const [state, setState] = useState(init);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useContext(Context);
  const hadleInput = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState({ ...state, [input.name]: input.value });
  };

  const componentCleanup = () => {
    localStorage.setItem('inputState', JSON.stringify(state));
  };

  useEffect(() => {
    fetch(`${apiConfig.baseUrl}/titles/search/title/${state.mainInput}`, {
      headers: apiConfig.headers,
    })
      .then((res) => res.json())
      .then((res) => setMovies(res.results.filter((el: IItem) => el.primaryImage?.url)))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    componentCleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
