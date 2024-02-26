export const SET_PAGE = 'SET_PAGE';
export const SET_ROWS_PER_PAGE = 'SET_ROWS_PER_PAGE';

export const setPage = (page: number) => ({
  type: SET_PAGE,
  payload: page,
});

export const setRowsPerPage = (rowsPerPage: number) => ({
  type: SET_ROWS_PER_PAGE,
  payload: rowsPerPage,
});
