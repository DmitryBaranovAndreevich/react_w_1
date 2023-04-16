import TDataForm from './TDataForm';

interface IStateValidation {
  validation: {
    nameUser: boolean;
    surName: boolean;
    date: boolean;
    select: boolean;
    checkBox: boolean;
    file: boolean;
  };
  items: Array<TDataForm>;
  isSend: boolean;
  formValid: boolean;
}

export default IStateValidation;
