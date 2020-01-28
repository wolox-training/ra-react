import { actions } from './actions';

const initialState = {
  accessToken: localStorage.getItem('accessToken')
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    case actions.REMOVE_ACCESS_TOKEN:
      localStorage.removeItem('accessToken');
      return { ...state, accessToken: null };
    default:
      return state;
  }
}

export default reducer;
