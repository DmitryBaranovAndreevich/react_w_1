import Items from './item';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, getByTestId } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import { goods } from '../../service/goods';

describe('Product List component Test', () => {
  it('The product card is rendered without problems', () => {
    const item = renderer.create(<Items {...goods.products[0]} />).toJSON();
    expect(item).toMatchSnapshot();
  });

  it("Clicking on the 'Buy' button triggers the click handler", () => {
    render(<Items {...goods.products[0]} />);

    const button = screen.getByText('Купить');
    button.onclick = jest.fn();

    fireEvent.click(button);
    expect(button.onclick).toHaveBeenCalled();
  });
});


