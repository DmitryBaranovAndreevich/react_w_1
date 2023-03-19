import Like from './like';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

describe('Like icon component test', () => {
  it('The like icon component is rendered without problems', () => {
    const like = renderer.create(<Like />).toJSON();
    expect(like).toMatchSnapshot();
  });

  it('Clicking on the like icon button triggers the click handler', () => {
    const { container } = render(<Like />);

    const like = container.firstChild;
    like.onclick = jest.fn();

    fireEvent.click(like);
    expect(like.onclick).toHaveBeenCalled();
  });
});
