import Items from './item';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, getByTestId } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import { goods } from '../../service/goods';

describe('Тест компонента списка товаров', () => {
  it('Карточка товара рендерится без проблем', () => {
    const item = renderer.create(<Items {...goods.products[0]} />).toJSON();
    expect(item).toMatchSnapshot();
  });

  it("Клик на кноку 'Купить' вызывает обработчик клика", () => {
      render(<Items {...goods.products[0]} />);

    const button = screen.getByText('Купить');
    button.onclick = jest.fn();

    fireEvent.click(button);
    expect(button.onclick).toHaveBeenCalled();
  });
});

