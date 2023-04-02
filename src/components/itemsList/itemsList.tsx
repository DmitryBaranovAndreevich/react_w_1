import Item from '../item/item';
import IItemsList from '../../interfaces/IItemsList';
import React, { FC } from 'react';
import styles from './itemsList.module.css';

const ItemsList: FC<IItemsList> = ({ goodsList }) => {
  return (
    <div className={styles.container}>
      {goodsList.map((el) => (
        <Item {...el} key={el.id} />
      ))}
    </div>
  );
};

export default ItemsList;
