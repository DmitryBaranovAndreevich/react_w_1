import ItemsList from 'components/itemsList/itemsList';
import SeachBar from 'components/searchBar/searchBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './main.module.css';

const MainPage = () => {
  return (
    <div>
      <h2 className={styles.title}>Please enter the name of the movie</h2>
      <SeachBar />
      <ItemsList />
      <Outlet />
    </div>
  );
};

export default MainPage;
