import { SET_PAGE, SET_ROWS_PER_PAGE } from '../actions/paginationActions';

interface Action {
  type: string;
  payload: number;
}

interface PaginationState {
  page: number;
  rowsPerPage: number;
}

const initialState: PaginationState = {
  page: 0,
  rowsPerPage: 10,
};

const paginationReducer = (state: PaginationState = initialState, action: Action): PaginationState => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.payload,
      };
    default:
      return state;
  }
};

export default paginationReducer;
