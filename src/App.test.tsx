import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from 'App';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

describe('Product List component Test', () => {
  it('BigItem is render', () => {
    const store = setupStore();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
});
