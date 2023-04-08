import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import BigItem from './bigItem';
import { Context } from 'service/context';
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
  it('BigItem is render', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={[[mocksDock], () => {}]}>
          <BigItem />
        </Context.Provider>
      </BrowserRouter>
    );
  });
});
