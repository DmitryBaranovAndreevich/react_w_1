import SeachIcon from './searchIcon';
import renderer from 'react-test-renderer';

describe('Test of the search icon component', () => {
  it('The component of the search icon is rendered without problems', () => {
    const searchBar = renderer.create(<SeachIcon />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });
});
