import ItemsList from 'components/itemsList/itemsList';
import SeachBar from 'components/searchBar/searchBar';
import React from 'react';
import { goods } from 'service/goods';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SeachBar />
        <ItemsList goodsList={goods.products} />
      </div>
    );
  }
}

export default MainPage;
