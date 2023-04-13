import React from 'react';
import styles from './bigItem.module.css';
import { useParams } from 'react-router-dom';
import IItem from 'interfaces/IItem';
import { useAppSelector } from 'hooks/redux';
import { moviesApi } from 'service/movieService';

const BigItem = () => {
  const { id } = useParams();
  const { params } = useAppSelector((state) => state.searchBarReducer);
  const { data: allMovies } = moviesApi.useFetchAllMoviesQuery('');
  const { data: searchMovies } = moviesApi.useFetchSearchMoviesQuery(params ? params : 'all');
  const movies = params ? searchMovies : allMovies;
  const movie = movies?.results.find((el) => el.id === id) as IItem;
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
