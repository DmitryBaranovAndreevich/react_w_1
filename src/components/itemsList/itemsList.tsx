import Item from '../item/item';
import React, { useEffect, useState } from 'react';
import styles from './itemsList.module.css';
import Spinner from 'components/spinner/spinner';
import { moviesApi } from 'service/movieService';
import { useAppSelector } from 'hooks/redux';
import IItem from 'interfaces/IItem';

const ItemsList = () => {
  const { params } = useAppSelector((state) => state.searchBarReducer);

  const { data: allMovies, isLoading: isAllMoviesLoading } = moviesApi.useFetchAllMoviesQuery('');

  const { data: searchMovies, isLoading: isSearchMoviesLoading } =
    moviesApi.useFetchSearchMoviesQuery(params ? params : 'all');

  const [movies, setMovies] = useState<IItem[]>(
    allMovies?.results.filter((el: IItem) => el.primaryImage?.url) as IItem[]
  );

  useEffect(() => {
    setMovies(allMovies?.results.filter((el: IItem) => el.primaryImage?.url) as IItem[]);
  }, [allMovies]);

  useEffect(() => {
    setMovies(searchMovies?.results.filter((el: IItem) => el.primaryImage?.url) as IItem[]);
  }, [searchMovies]);

  return params ? (
    <div className={styles.container}>
      {isSearchMoviesLoading ? (
        <Spinner />
      ) : movies && !movies.length ? (
        <h3>Nothing found</h3>
      ) : (
        movies?.map((el) => <Item {...el} key={el.id} />)
      )}
    </div>
  ) : (
    <div className={styles.container}>
      {isAllMoviesLoading ? (
        <Spinner />
      ) : (
        allMovies?.results
          .filter((el: IItem) => el.primaryImage?.url)
          .map((el) => <Item {...el} key={el.id} />)
      )}
    </div>
  );
};

export default ItemsList;
