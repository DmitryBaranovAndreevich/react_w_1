import Like from 'components/like/like';
import IGood from 'interfaces/IGood';
import React from 'react';
import styles from './item.module.css';
import image from '../../icons/picture.jpg';
import { Link } from 'react-router-dom';

class Item extends React.Component<IGood> {
  state = { likeStatus: false };
  toggleLike = () => {
    this.setState({ ...this.state, likeStatus: !this.state.likeStatus });
  };
  render() {
    const { price, title, stock, rating } = this.props;
    return (
      <div className={styles.container}>
        <Like active={this.state.likeStatus} onClick={this.toggleLike} />
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
  }
}

export default Item;
