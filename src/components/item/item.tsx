import Like from '../like/like';
import IItem from '../../interfaces/IItem';
import React, { FC, useState } from 'react';
import styles from './item.module.css';
import { Link } from 'react-router-dom';

const Item: FC<IItem> = ({ id, primaryImage, titleText }) => {
  const [state, setState] = useState({ likeStatus: false });
  const toggleLike = () => {
    setState({ ...state, likeStatus: !state.likeStatus });
  };
  return (
    <div className={styles.container}>
      <Like active={state.likeStatus} onClick={toggleLike} />
      <img className={styles.image} src={primaryImage.url} alt="Foto" />
      <p className={styles.text}>{titleText.text}</p>
      <Link to={`person/${id}`} className={styles.button}>
        Узнать больше
      </Link>
    </div>
  );
};

export default Item;
