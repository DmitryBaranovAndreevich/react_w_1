import SeachIcon from 'components/seachIcon/searchIcon';
import React, { FormEvent } from 'react';
import styles from './searchBar.module.css';

class SeachBar extends React.Component {
  state = JSON.parse(localStorage.getItem('inputState') as string) || { mainInput: '' };

  hadleInput = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    this.setState({ ...this.state, [input.name]: input.value });
  };

  componentCleanup = () => {
    localStorage.setItem('inputState', JSON.stringify(this.state));
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  render() {
    return (
      <form className={styles.form}>
        <SeachIcon />
        <input
          className={styles.input}
          type="text"
          name="mainInput"
          value={this.state.mainInput}
          onChange={this.hadleInput}
        />
      </form>
    );
  }
}

export default SeachBar;
