import { FETCH_CHARS } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH_CHARS:
      return {
        ...state,
        fetching: true,
        error: ''
      };
      
    default:
      return state;
  }
};
