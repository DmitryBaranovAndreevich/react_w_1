import ItemsList from './itemsList';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { goods } from '../../service/goods';

describe('Тест компонента списка товаров', () => {
  it('Компонент списка товаров рендерится без проблем с пустым списком', () => {
    const searchBar = renderer.create(<ItemsList goodsList={[]} />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });

  it('Компонент списка товаров рендерится без проблем со списком товаров', () => {
    const { container } = render(
      <BrowserRouter>
        <ItemsList goodsList={goods.products} />
      </BrowserRouter>
    );

    const items = container.firstChild.childNodes;
    expect(items.length).toBe(goods.products.length);
  });
});
