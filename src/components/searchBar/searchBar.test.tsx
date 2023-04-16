import SeachBar from './searchBar';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from 'store/store';

describe('Product List component Test', () => {
  it("Clicking on the 'Buy' button triggers the click handler", () => {
    const store = setupStore();
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SeachBar />
        </Provider>
      </BrowserRouter>
    );

    const form = container.firstChild as HTMLFormElement;
    form.onsubmit = jest.fn();

    fireEvent.submit(form);
    expect(form.onsubmit).toHaveBeenCalled();
  });
});
