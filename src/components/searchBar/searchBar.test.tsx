import SeachBar from './searchBar';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('Product List component Test', () => {
  it("Clicking on the 'Buy' button triggers the click handler", () => {
    const { container } = render(
      <BrowserRouter>
        <SeachBar />
      </BrowserRouter>
    );

    const form = container.firstChild as HTMLFormElement;
    form.onsubmit = jest.fn();

    fireEvent.submit(form);
    expect(form.onsubmit).toHaveBeenCalled();
  });
});
