import ItemsList from './itemsList';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('Product List component Test', () => {
  it('The component of the list of products is rendered without problems with the list of products', () => {
    const { container } = render(
      <BrowserRouter>
        <ItemsList docks={[]} />
      </BrowserRouter>
    );

    const items = container.firstChild?.childNodes;
    expect(items?.length).toBe(0);
  });
});
