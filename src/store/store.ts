import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import searchBarReducer from './reducers/searchBArSlice';
import formReducer from './reducers/formSlice';
import { moviesApi } from 'service/movieService';

const rootreducer = combineReducers({
  moviesReducer,
  searchBarReducer,
  formReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootreducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
  });
};

export type TRootState = ReturnType<typeof rootreducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
