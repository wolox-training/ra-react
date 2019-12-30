import { actions } from './actions';

const initialState = {
  accessToken: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload.accessToken };
    default:
      return state;
  }
}

export default reducer;
