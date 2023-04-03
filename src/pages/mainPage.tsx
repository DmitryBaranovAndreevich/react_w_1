import ItemsList from 'components/itemsList/itemsList';
import SeachBar from 'components/searchBar/searchBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { goods } from 'service/goods';

const MainPage = () => {
  return (
    <div>
      <SeachBar />
      <Outlet />
      <ItemsList goodsList={goods.products} />
    </div>
  );
};

export default MainPage;
