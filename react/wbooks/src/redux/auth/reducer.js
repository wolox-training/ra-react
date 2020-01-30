/* eslint-disable no-case-declarations */
import api from '../../app/config/api';

import { actions } from './actions';

const initialState = {
  accessToken: localStorage.getItem('accessToken') || ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      const accessToken = action.payload;
      api.setHeader('Authorization', accessToken);
      localStorage.setItem('accessToken', accessToken || '');
      return { ...state, accessToken };
    case actions.REMOVE_ACCESS_TOKEN:
      localStorage.removeItem('accessToken');
      return { ...state, accessToken: null };
    default:
      return state;
  }
}

export default reducer;
