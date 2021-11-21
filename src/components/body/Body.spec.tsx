import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Body from './Body';

test('renders Body', () => {
  render(
    <Provider store={store}>
      <Body />
    </Provider>,
  );

  expect(screen.getByTestId('body-container')).toBeInTheDocument();
});