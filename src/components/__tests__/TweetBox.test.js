import renderer from 'react-test-renderer';
import TweetBox from '../TweetBox';

describe('TweetBox ', () => {
  it('renders as expected ', () => {
    const tree = renderer
      .create(<TweetBox text={'foo'} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})