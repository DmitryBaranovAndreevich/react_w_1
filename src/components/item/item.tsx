import Like from '../like/like';
import IGood from '../../interfaces/IGood';
import React, { FC, useState } from 'react';
import styles from './item.module.css';
import image from '../../icons/picture.jpg';
import { Link } from 'react-router-dom';

const Item: FC<IGood> = ({ price, title, stock, rating }) => {
  const [state, setState] = useState({ likeStatus: false });
  const toggleLike = () => {
    setState({ ...state, likeStatus: !state.likeStatus });
  };
  return (
    <div className={styles.container}>
      <Like active={state.likeStatus} onClick={toggleLike} />
      <img className={styles.image} src={image} alt="Goods Foto" />
      <p className={styles.price}>от {price} ₽</p>
      <p className={styles.text}>{title}</p>
      <div className={styles.wrapper}>
        <p className={styles.stock}>от {stock} предложений</p>
        <p className={styles.rating}>{rating}</p>
      </div>
      <Link to="buy" className={styles.button}>
        Купить
      </Link>
    </div>
  );
};

export default Item;
