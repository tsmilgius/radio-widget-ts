import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import TopBar from './TopBar';

test('renders TopBar ', () => {
  render(
    <Provider store={store}>
      <TopBar />
    </Provider>,
  );

  expect(screen.getByText(/STATIONS/i)).toBeInTheDocument();
});