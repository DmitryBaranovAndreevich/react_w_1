import ISelect from '../../interfaces/ISelect';
import React, { RefObject } from 'react';
import styles from './select.module.css';

class Select extends React.Component<ISelect, { select: string }> {
  htmlFor = `${this.props.label}-${Math.random()}`;

  render(): React.ReactNode {
    const { options, label, validation, error, innerRef, setValidation } = this.props;
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={this.htmlFor}>
          {label}
        </label>
        <select
          ref={innerRef as RefObject<HTMLSelectElement>}
          className={styles.select}
          id={this.htmlFor}
          defaultValue={'default'}
          onChange={setValidation}
        >
          <option value={'default'} disabled>
            -Ваш пол-
          </option>
          {options.map((option, index: number) => {
            return (
              <option value={option.value} key={option.value + index}>
                {option.text}
              </option>
            );
          })}
        </select>
        {validation && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
}

export default Select;
