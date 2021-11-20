import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import RadioWidget from './RadioWidget';

test('renders radio widget', () => {
  render(
    <Provider store={store}>
      <RadioWidget />
    </Provider>,
  );

  expect(screen.getByTestId('radio-widget')).toBeInTheDocument();
});
