import SearchBar from './searchBar';
import renderer from 'react-test-renderer';

describe('Тест компонента поисковой строки', () => {
  it('Компонент поисковой строки рендерится без проблем', () => {
    const searchBar = renderer.create(<SearchBar />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });
});



