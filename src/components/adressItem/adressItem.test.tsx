import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import AdressItem from './adressItem';

describe('Product List component Test', () => {
  it('BigItem is render', () => {
    render(
      <BrowserRouter>
        <AdressItem
          userName={'test'}
          surName={'test'}
          date={'12.03.2023'}
          select={'default'}
          checkBox={false}
          file={'test.tx'}
        />
      </BrowserRouter>
    );
  });
});
