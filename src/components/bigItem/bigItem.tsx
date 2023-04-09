import React, { useContext } from 'react';
import styles from './bigItem.module.css';
import { useParams } from 'react-router-dom';
import { Context } from 'service/context';
import IItem from 'interfaces/IItem';

const BigItem = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useContext(Context);
  const movie = movies.item.find((el) => el.id === id) as IItem;
  return (
    movie && (
      <div className={styles.container}>
        <img className={styles.img} src={movie.primaryImage.url} alt="Movie" />
        <h3 className={styles.title}>{movie.titleText.text}</h3>
        <p className={styles.text}>
          Release date: {movie.releaseDate?.day}.{movie.releaseDate?.month}.
          {movie.releaseDate?.year}
        </p>
        <p className={styles.death}>Type: {movie.titleType.text}</p>
      </div>
    )
  );
};

export default BigItem;
