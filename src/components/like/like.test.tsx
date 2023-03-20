import Like from './like';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

describe('Like icon component test', () => {
  it('Clicking on the like icon button triggers the click handler', () => {
    const { container } = render(<Like active={false} onClick={() => {}} />);

    const like = container.firstChild as HTMLElement;
    like.onclick = jest.fn();

    fireEvent.click(like);
    expect(like.onclick).toHaveBeenCalled();
  });
});
