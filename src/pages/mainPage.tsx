import ItemsList from 'components/itemsList/itemsList';
import SeachBar from 'components/searchBar/searchBar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from 'service/context';
import styles from './main.module.css';
import { IState } from 'service/context';

const MainPage = () => {
  const [personals, setPersonals] = useState<IState>({ item: [], isLoad: false });

  return (
    <div>
      <h2 className={styles.title}>Please enter the name of the movie</h2>
      <Context.Provider value={[personals, setPersonals]}>
        <SeachBar />
        <ItemsList />
        <Outlet />
      </Context.Provider>
    </div>
  );
};

export default MainPage;
