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

  const request = (url: string) => {
    setMovies({ ...movies, isLoad: true });
    fetch(`${apiConfig.baseUrl}${url}`, {
      headers: apiConfig.headers,
    })
      .then((res) => res.json())
      .then((res) =>
        setMovies({
          ...movies,
          item: res.results.filter((el: IItem) => el.primaryImage?.url),
          isLoad: false,
        })
      )
      .catch((e) => {
        console.log(e);
        setMovies({ ...movies, isLoad: false });
      });
  };

  const componentCleanup = () => {
    localStorage.setItem('inputState', JSON.stringify(state));
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    request(`/titles/search/title/${state.mainInput}`);
  };

  useEffect(() => {
    if (state.mainInput) request(`/titles/search/title/${state.mainInput}`);
    else request('/titles');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    componentCleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form className={styles.form} onSubmit={handleClick}>
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
