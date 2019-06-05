import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./userActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function userReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_USERS_BEGIN: //Can show a spinner or any loading symbol
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      // replacing and set loading to false
      return {
        ...state,
        loading: false,
        items: action.payload.users
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default://default case, if required
      return state;
  }
}
