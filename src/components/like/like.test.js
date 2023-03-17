import Like from './like';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

describe('Тест компонента иконки лайка', () => {
  it('Компонент иконки лайка рендерится без проблем', () => {
    const like = renderer.create(<Like />).toJSON();
    expect(like).toMatchSnapshot();
  });

  it('Клик на кноку иконку лайка вызывает обработчик клика', () => {
    const { container } = render(<Like />);

    const like = container.firstChild;
    like.onclick = jest.fn();

    fireEvent.click(like);
    expect(like.onclick).toHaveBeenCalled();
  });
});
