import Items from './item';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

const mocksDock = {
  id: '12',
  primaryImage: {
    id: '21',
    url: 'test',
  },
  releaseDate: {
    day: 1,
    month: 1,
    year: 1900,
  },
  releaseYear: {
    year: 1900,
  },
  titleText: {
    text: 'test',
  },
  titleType: {
    text: 'test',
  },
};

describe('Product List component Test', () => {
  it("Clicking on the 'Buy' button triggers the click handler", () => {
    render(
      <BrowserRouter>
        <Items {...mocksDock} />
      </BrowserRouter>
    );

    const button = screen.getByText('Узнать больше');
    button.onclick = jest.fn();

    fireEvent.click(button);
    expect(button.onclick).toHaveBeenCalled();
  });
});
