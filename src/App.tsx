import React from 'react';
import MainPage from 'pages/mainPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from 'pages/aboutPage';
import NotFoundPage from 'pages/notFoundPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
