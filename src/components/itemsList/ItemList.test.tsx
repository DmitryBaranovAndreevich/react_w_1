import ItemsList from './itemsList';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

describe('Product List component Test', () => {
  it('The component of the list of products is rendered without problems with the list of products', () => {
    const store = setupStore();
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList />
        </Provider>
      </BrowserRouter>
    );

    const items = container.firstChild?.childNodes;
    expect(Boolean(items?.length)).toBe(true);
  });
});
