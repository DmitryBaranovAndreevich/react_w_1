import BigItem from 'components/bigItem/bigItem';
import Layout from 'components/layout/layout';
import Popup from 'components/popup/popup';
import IGood from 'interfaces/IItem';
import React from 'react';

const ItemPage = () => {
  return (
    <Layout>
      <Popup>
        <BigItem />
      </Popup>
    </Layout>
  );
};

export default ItemPage;
