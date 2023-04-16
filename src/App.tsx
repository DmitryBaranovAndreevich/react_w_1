import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import AboutPage from './pages/aboutPage';
import NotFoundPage from './pages/notFoundPage';
import AdressForm from './components/adressForm/adressForm';
import MainPage from './pages/mainPage';
import ItemPage from 'pages/itemPage';

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
        <NavLink className={styles.link} to="/user">
          To form
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="person/:id" element={<ItemPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<AdressForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
