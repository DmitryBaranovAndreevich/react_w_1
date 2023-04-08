import ItemsList from 'components/itemsList/itemsList';
import SeachBar from 'components/searchBar/searchBar';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { apiConfig } from 'service/constans';
import { Context } from 'service/context';
import styles from './main.module.css';
import IItem from 'interfaces/IItem';

const MainPage = () => {
  const [personals, setPersonals] = useState<Array<IItem>>([]);

  useEffect(() => {
    fetch(`${apiConfig.baseUrl}/titles`, { headers: apiConfig.headers })
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => setPersonals(res.results.filter((el: IItem) => el.primaryImage?.url)))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h2 className={styles.title}>Please enter the name of the movie</h2>
      <Context.Provider value={[personals, setPersonals]}>
        <SeachBar />
        {personals && <ItemsList docks={personals} />}
        <Outlet />
      </Context.Provider>
    </div>
  );
};

export default MainPage;
