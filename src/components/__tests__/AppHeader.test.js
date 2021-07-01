import renderer from 'react-test-renderer';
import AppHeader from "../AppHeader";

describe('AppHeader ', () => {
  it('renders as expected ', () => {
    const tree = renderer
      .create(<AppHeader />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})