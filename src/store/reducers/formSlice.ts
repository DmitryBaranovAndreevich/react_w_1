import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IStateValidation from 'interfaces/IStateValidation';
import TDataForm from 'interfaces/TDataForm';

interface IFormState {
  valid: IStateValidation;
  formData: TDataForm;
}

const initialState: IFormState = {
  valid: {
    validation: {
      nameUser: false,
      surName: false,
      date: false,
      select: false,
      checkBox: false,
      file: false,
    },
    items: [],
    isSend: false,
    formValid: false,
  },
  formData: {
    userName: '',
    surName: '',
    date: '',
    select: 'default',
    checkBox: false,
    file: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValid(state, action: PayloadAction<IStateValidation>) {
      state.valid = action.payload;
    },
    setFormData(state, action: PayloadAction<TDataForm>) {
      state.formData = action.payload;
    },
  },
});

export default formSlice.reducer;
