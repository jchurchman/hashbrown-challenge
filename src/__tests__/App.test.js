import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App'

describe('App ', () => {
  it('renders as expected ', () => {
    const renderer = new ShallowRenderer()
    const tree = renderer
      .render(<App />)
    const output = renderer
      .getRenderOutput()

    expect(output).toMatchSnapshot()
  })
})