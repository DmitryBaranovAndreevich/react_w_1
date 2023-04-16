import AdressForm from './adressForm';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, getByTestId, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

const store = setupStore();

describe('Product List component Test', () => {
  it("Clicking on the 'Save' button triggers the click handler", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AdressForm />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      const button = screen.getByTestId('submitButton');
      button.onclick = jest.fn();

      fireEvent.click(button);
      expect(button.onclick).toHaveBeenCalled();
    });
  });

  it('Input for user name is rendered without problems', async () => {
    const { container } = render(
      <Provider store={store}>
        <AdressForm />
      </Provider>
    );
    await waitFor(() => {
      const name = getByTestId(container, 'inputName');

      expect(name.textContent).toBe('Имя');
    });
  });
});
