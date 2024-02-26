import { render } from '@testing-library/react';
import Title from './Title';

test('renders Title component', () => {
  const { getByText } = render(<Title />);
  const titleElement = getByText('Real-time Leaderboard');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.tagName).toBe('H5');
  expect(titleElement).toHaveClass('title');
});
