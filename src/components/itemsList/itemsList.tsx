import Item from '../item/item';
import React, { useContext } from 'react';
import styles from './itemsList.module.css';
import { Context } from 'service/context';
import Spinner from 'components/spinner/spinner';

const ItemsList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useContext(Context);
  return (
    <div className={styles.container}>
      {movies.isLoad ? (
        <Spinner />
      ) : !movies.item.length ? (
        <h3>Nothing found</h3>
      ) : (
        movies.item.map((el) => <Item {...el} key={el.id} />)
      )}
    </div>
  );
};

export default ItemsList;
