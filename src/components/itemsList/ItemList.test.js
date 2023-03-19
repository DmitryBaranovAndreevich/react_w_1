import ItemsList from './itemsList';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { goods } from '../../service/goods';

describe('Product List component Test', () => {
  it('The component of the list of products is rendered without problems with an empty list', () => {
    const searchBar = renderer.create(<ItemsList goodsList={[]} />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });

  it('The component of the list of products is rendered without problems with the list of products', () => {
    const { container } = render(
      <BrowserRouter>
        <ItemsList goodsList={goods.products} />
      </BrowserRouter>
    );

    const items = container.firstChild.childNodes;
    expect(items.length).toBe(goods.products.length);
  });
});
