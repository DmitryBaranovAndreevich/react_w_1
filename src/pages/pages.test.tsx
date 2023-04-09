import MainPage from './mainPage';
import AboutPage from './aboutPage';
import NotFoundPage from './notFoundPage';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Product List component Test', () => {
  it('The main page is rendered without problems', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/Please enter the name of the movie/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('The about page is rendered without problems', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );

    const text = screen.getByText(/About Page/i);
    expect(text).toBeInTheDocument();
  });

  it('The about page is rendered without problems', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const text = screen.getByText(/Not Found Page/i);
    expect(text).toBeInTheDocument();
  });
});
