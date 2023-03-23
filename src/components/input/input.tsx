import IInput from 'interfaces/IInput';
import React, { RefObject } from 'react';
import styles from './input.module.css';

class Input extends React.Component<IInput> {
  render() {
    const { type, error, validation, innerRef, setValidation } = this.props;
    return (
      <div className={styles.container}>
        <input
          type={type}
          className={styles.input}
          ref={innerRef as RefObject<HTMLInputElement>}
          onChange={setValidation}
        />
        {validation && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
}

export default Input;
