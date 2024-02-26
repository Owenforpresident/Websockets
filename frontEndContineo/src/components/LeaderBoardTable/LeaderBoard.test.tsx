import { render } from '@testing-library/react';
import LeaderboardTable from './LeaderBoardTable';

const mockData = [
  { country: 'Ireland', player: 'Conor Murray', tries: 5, rank: 1 },
  { country: 'Ireland', player: 'Johnny Sexton', tries: 3, rank: 2 },
];

test('renders LeaderboardTable component', () => {
  const { getByText } = render(
    <LeaderboardTable data={mockData} page={0} rowsPerPage={5} />
  );
  const playerConor = getByText('Conor Murray');
  const playerJohnny = getByText('Johnny Sexton');
  expect(playerConor).toBeInTheDocument();
  expect(playerJohnny).toBeInTheDocument();
});

test('renders correct number of rows based on pagination', () => {
  const { getAllByTestId } = render(
    <LeaderboardTable data={mockData} page={0} rowsPerPage={1} />
  );
  const tableRows = getAllByTestId('table-row');
  expect(tableRows.length).toBe(1);
});

test('renders correct data in each row', () => {
  const { getByText, getAllByTestId } = render(
    <LeaderboardTable data={mockData} page={0} rowsPerPage={5} />
  );
  const tableRows = getAllByTestId('table-row');
  expect(tableRows.length).toBe(2);
  expect(getByText('Conor Murray')).toBeInTheDocument();
  expect(getByText('Johnny Sexton')).toBeInTheDocument();
});


