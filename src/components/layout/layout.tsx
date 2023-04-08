import React from 'react';
import styles from './layout.module.css';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return (
    <div className={styles.container} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Layout;
