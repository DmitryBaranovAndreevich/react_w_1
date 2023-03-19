import SearchBar from './searchBar';
import renderer from 'react-test-renderer';

describe('Test of the search string component', () => {
  it('The search bar component is rendered without problems', () => {
    const searchBar = renderer.create(<SearchBar />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });
});



