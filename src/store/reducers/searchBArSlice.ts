import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchBarState {
  params: string;
}

const initialState: ISearchBarState = { params: '' };

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setParam(state, action: PayloadAction<string>) {
      state.params = action.payload;
    },
  },
});

export default searchBarSlice.reducer;
