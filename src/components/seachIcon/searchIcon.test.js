import SeachIcon from './searchIcon';
import renderer from 'react-test-renderer';

describe('Тест компонента иконки поиска', () => {
  it('Компонент иконки поиска рендерится без проблем', () => {
    const searchBar = renderer.create(<SeachIcon />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });
});
