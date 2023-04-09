import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Popup from './popup';

describe('Product List component Test', () => {
  it('The component of the list of products is rendered without problems with the list of products', () => {
    render(
      <BrowserRouter>
        <Popup>
          <p>test</p>
        </Popup>
      </BrowserRouter>
    );

    const items = screen.getByText('test');
    expect(items).toBeInTheDocument();
  });
});
