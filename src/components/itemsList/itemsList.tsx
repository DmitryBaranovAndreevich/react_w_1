import Item from '../item/item';
import IItemsList from '../../interfaces/IItemsList';
import React, { FC } from 'react';
import styles from './itemsList.module.css';

const ItemsList: FC<IItemsList> = ({ docks }) => {
  return (
    <div className={styles.container}>
      {docks.map((el) => (
        <Item {...el} key={el.id} />
      ))}
    </div>
  );
};

export default ItemsList;
