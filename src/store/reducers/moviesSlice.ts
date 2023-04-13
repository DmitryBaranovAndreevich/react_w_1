import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IMoviesState {
  params: string;
}

const initialState: IMoviesState = { params: '' };

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getRequest(state, action: PayloadAction<string>) {
      state.params = action.payload;
    },
  },
});

export default moviesSlice.reducer;
