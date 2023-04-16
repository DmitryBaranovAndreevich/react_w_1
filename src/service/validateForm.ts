import TDataForm from '../interfaces/TDataForm';

function validationForm({ userName, surName, date, select, checkBox, file }: TDataForm) {
  const validateFirstLetterToUpperCase = (str: string) =>
    !str ? true : !(str[0].toUpperCase() === str[0]);

  const validateDate = (date: string) => !date;

  const validateCheckBox = (value: boolean) => !value;

  const validateSelect = (value: string) => (value === 'default' ? true : false);

  const validateFile = (value: string) => !value;

  return {
    validName: validateFirstLetterToUpperCase(userName),
    validSurName: validateFirstLetterToUpperCase(surName),
    validDate: validateDate(date),
    validSelect: validateSelect(select),
    validCheckBox: validateCheckBox(checkBox),
    validFile: validateFile(file),
  };
}

export default validationForm;
