import React from 'react';
import MainPage from 'pages/mainPage';
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import AboutPage from 'pages/aboutPage';
import NotFoundPage from 'pages/notFoundPage';

function App() {
  return (
    <div className="App">
      <header className={styles.appHeader}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
