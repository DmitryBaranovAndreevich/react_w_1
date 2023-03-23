import React, { RefObject } from 'react';
import styles from './checkBox.module.css';

class CheckBox extends React.Component<ICheckBox> {
  htmlFor = `checkBox-${Math.random()}`;
  render() {
    const { span, validation, error, setValidation, innerRef } = this.props;
    return (
      <div className={styles.container}>
        <input
          ref={innerRef as RefObject<HTMLInputElement>}
          type="checkbox"
          id={this.htmlFor}
          className={styles.input}
          onChange={setValidation}
        />
        <label htmlFor={this.htmlFor} className={styles.label}></label>
        <span className={styles.span}>{span}</span>
        {validation && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
}

export default CheckBox;
