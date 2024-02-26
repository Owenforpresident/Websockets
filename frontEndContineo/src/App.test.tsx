import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import mock store
import App from './App';

const mockStore = configureStore([]);

const mockData = [
  { country: 'Ireland', player: 'Conor Murray', tries: 5, rank: 1 },
  { country: 'Ireland', player: 'Johnny Sexton', tries: 3, rank: 2 },
];

jest.mock('./customHooks/useWebSocket', () => () => ({
  data: mockData,
  error: null,
  isLoading: false,
}));

test('renders App component', () => {
  const initialState = {
    pagination: { page: 0, rowsPerPage: 5 },
  };
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const conorMurray = getByText('Conor Murray');
  const johnnySexton = getByText('Johnny Sexton');
  expect(conorMurray).toBeInTheDocument();
  expect(johnnySexton).toBeInTheDocument();
});
