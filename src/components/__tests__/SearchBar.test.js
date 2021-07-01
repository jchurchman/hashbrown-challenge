import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar';

describe('SearchBar ', () => {
  it('renders as expected ', () => {
    const tree = renderer
      .create(<SearchBar handleFormSubmit={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})