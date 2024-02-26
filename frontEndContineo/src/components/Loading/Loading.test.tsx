import { render } from '@testing-library/react';
import Loading from './Loading';

test('renders Loading component', () => {
  const { getByTestId } = render(<Loading />);
  const loadingElement = getByTestId('loading-component');
  expect(loadingElement).toBeInTheDocument();
});

test('renders CircularProgress component', () => {
  const { getByTestId } = render(<Loading />);
  const circularProgress = getByTestId('circular-progress');
  expect(circularProgress).toBeInTheDocument();
});
