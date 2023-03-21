import Items from './item';
import { fireEvent, render, screen } from '@testing-library/react';
import { goods } from '../../service/goods';
import React from 'react';

describe('Product List component Test', () => {
  it("Clicking on the 'Buy' button triggers the click handler", () => {
    render(<Items {...goods.products[0]} />);

    const button = screen.getByText('Купить');
    button.onclick = jest.fn();

    fireEvent.click(button);
    expect(button.onclick).toHaveBeenCalled();
  });
});
