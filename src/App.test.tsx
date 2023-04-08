import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from 'App';


describe('Product List component Test', () => {
  it('BigItem is render', () => {
    render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
    );
  });
});
