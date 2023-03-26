import AdressItem from '../adressItem/adressItem';
import CheckBox from '../checkBox/checkBox';
import Input from '../input/input';
import RadioInput from '../radioInput/radioInput';
import Select from '../select/select';
import BuyPopupState from '../../interfaces/BuyPopupState';
import TDataRef from '../../interfaces/TDataRef';
import React, { FormEvent, RefObject } from 'react';
import styles from './adressForm.module.css';

class AdressForm extends React.Component<Record<string, never>, BuyPopupState> {
  private nameRef = React.createRef();
  private surNameRef = React.createRef();
  private dateRef = React.createRef();
  private selectRef = React.createRef();
  private checkBoxRef = React.createRef();
  private fileRef = React.createRef();
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
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
    };
  }

  checkValid() {
    return ![...Object.values(this.state.validation)].some((el) => el === true);
  }

  setValid(key: string) {
    return () => {
      this.setState({ ...this.state, validation: { ...this.state.validation, [key]: false } });
    };
  }

  setStateConf = {
    nameUser: this.setValid('nameUser'),
    surName: this.setValid('surName'),
    date: this.setValid('date'),
    select: this.setValid('select'),
    checkBox: this.setValid('checkBox'),
    file: this.setValid('file'),
  };

  validateFirstLetterToUpperCase = (key: string) => {
    return async (str: string) => {
      if (!str) {
        this.setState({ ...this.state, validation: { ...this.state.validation, [key]: true } });
        return;
      }
      const firstLetter = str[0];
      this.setState({
        ...this.state,
        validation: { ...this.state.validation, [key]: !(firstLetter.toUpperCase() === str[0]) },
      });
    };
  };

  async validateDate(date: string) {
    if (!date)
      this.setState({ ...this.state, validation: { ...this.state.validation, date: true } });
  }

  async validateSelect(value: string) {
    if (value === 'default')
      this.setState({ ...this.state, validation: { ...this.state.validation, select: true } });
  }

  async validateCheckBox(value: boolean) {
    this.setState({ ...this.state, validation: { ...this.state.validation, checkBox: !value } });
  }

  async validateFile(value: string) {
    if (!value)
      this.setState({ ...this.state, validation: { ...this.state.validation, file: true } });
  }

  getRefData() {
    return {
      nameUser: (this.nameRef as RefObject<HTMLInputElement>).current?.value as string,
      surName: (this.surNameRef as RefObject<HTMLInputElement>).current?.value as string,
      date: (this.dateRef as RefObject<HTMLInputElement>).current?.value as string,
      select: (this.selectRef as RefObject<HTMLSelectElement>).current?.value as string,
      checkBox: (this.checkBoxRef as RefObject<HTMLInputElement>).current?.checked as boolean,
      file: (this.fileRef as RefObject<HTMLInputElement>).current?.value as string,
    };
  }
  clearForm() {
    (this.nameRef.current as HTMLInputElement).value = '';
    (this.surNameRef.current as HTMLInputElement).value = '';
    (this.dateRef.current as HTMLInputElement).value = '';
    (this.selectRef.current as HTMLSelectElement).value = 'default';
    (this.checkBoxRef.current as HTMLInputElement).checked = false;
    (this.fileRef.current as HTMLInputElement).value = '';
  }

  async validateForm(stateRef: TDataRef) {
    await this.validateFirstLetterToUpperCase('nameUser')(stateRef.nameUser);
    await this.validateFirstLetterToUpperCase('surName')(stateRef.surName);
    await this.validateDate(stateRef.date);
    await this.validateSelect(stateRef.select);
    await this.validateCheckBox(stateRef.checkBox);
    await this.validateFile(stateRef.file);
  }

  handleSubmitButtonclick = async (e: FormEvent) => {
    e.preventDefault();
    const stateRef = { ...this.getRefData(), id: String(Date.now()) };
    await this.validateForm(stateRef);
    if (this.checkValid()) {
      this.setState({ ...this.state, items: [...this.state.items, stateRef], isSend: true });
      setTimeout(() => {
        this.setState({ ...this.state, isSend: false });
        this.clearForm();
      }, 3000);
    }
  };

  render() {
    return (
      <div className={styles.layout}>
        {this.state.isSend && <p className={styles.sendMessage}>☑ Форма успешно отправлена</p>}
        <form className={styles.form} noValidate onSubmit={this.handleSubmitButtonclick}>
          <div className={styles.container}>
            <div className={styles.flexContainer}>
              <span className={styles.fieldName} data-testid={'inputName'}>
                Имя
              </span>
              <Input
                type="text"
                error="Введите имя с большой буквы"
                validation={this.state.validation.nameUser}
                innerRef={this.nameRef}
                setValidation={this.setStateConf.nameUser}
              />
            </div>
            <div className={styles.flexContainer}>
              <span className={styles.fieldName}>Фамилия</span>
              <Input
                type="text"
                error="Введите фамилию с большой буквы"
                validation={this.state.validation.surName}
                innerRef={this.surNameRef}
                setValidation={this.setStateConf.surName}
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <span className={styles.fieldName}>Дата</span>
            <Input
              type="date"
              error="Выберете дату"
              validation={this.state.validation.date}
              innerRef={this.dateRef}
              setValidation={this.setStateConf.date}
            />
          </div>
          <div>
            <div className={styles.container}>
              <Select
                innerRef={this.selectRef}
                label="Ваш пол"
                options={[
                  { text: 'мужской', value: 'мужской' },
                  { text: 'женский', value: 'женский' },
                ]}
                validation={this.state.validation.select}
                error="Выберете один из пунктов"
                setValidation={this.setStateConf.select}
              />
              <CheckBox
                innerRef={this.checkBoxRef}
                span="Я соглашаюсь на обработку персональных данных в соответствии с Условиями использования сайта, Политикой обработки персональных данных и на получнение сообщений в процессе обработки"
                validation={this.state.validation.checkBox}
                error="Необходимо согласие"
                setValidation={this.setStateConf.checkBox}
              />
            </div>
            <div className={styles.flexContainer}>
              <span className={styles.fieldName}>
                Хотите ли вы срыть вашу информацию от всех пользователей?
              </span>
              <RadioInput spanLeft="Да" spanRight="Нет" />
            </div>
          </div>
          <Input
            type="file"
            error="Выберете файл"
            validation={this.state.validation.file}
            innerRef={this.fileRef}
            setValidation={this.setStateConf.file}
          />
          <button type="submit" className={styles.submitButton} data-testid={'submitButton'}>
            Сохранить
          </button>
        </form>
        <div className={styles.itemsContainer}>
          {this.state.items.map((item, index) => (
            <AdressItem {...item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default AdressForm;
