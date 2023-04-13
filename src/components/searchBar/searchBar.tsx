import SeachIcon from '../seachIcon/searchIcon';
import React, { FormEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { moviesSlice } from 'store/reducers/moviesSlice';
import { searchBarSlice } from 'store/reducers/searchBArSlice';

const SeachBar = () => {
  const { params } = useAppSelector((state) => state.moviesReducer);
  const { params: fetchParams } = useAppSelector((state) => state.searchBarReducer);
  const [state, setState] = useState({ mainInput: params });
  const dispatch = useAppDispatch();
  const { getRequest } = moviesSlice.actions;
  const { setParam } = searchBarSlice.actions;

  const hadleInput = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState({ ...state, [input.name]: input.value });
  };

  const request = (url: string) => {
    dispatch(setParam(url));
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    request(state.mainInput);
  };

  useEffect(() => {
    request(fetchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getRequest(state.mainInput));
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
