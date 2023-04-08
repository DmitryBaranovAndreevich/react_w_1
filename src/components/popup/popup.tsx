import { ReactNode } from 'react';
import styles from './popup.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <button className={styles.button} type="button" onClick={handleClick}>
        X
      </button>
      {children}
    </div>
  );
};

export default Popup;
