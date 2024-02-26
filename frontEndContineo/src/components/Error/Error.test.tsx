import { render } from '@testing-library/react';
import ErrorComponent from './Error';

test('renders ErrorComponent', () => {
  const { getByText } = render(<ErrorComponent />);
  const errorElement = getByText('Error');
  expect(errorElement).toBeInTheDocument();
});

test('renders error message', () => {
  const { getByText } = render(<ErrorComponent />);
  const errorMessage = getByText('An error occurred while fetching data');
  expect(errorMessage).toBeInTheDocument();
});
