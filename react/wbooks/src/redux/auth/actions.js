import api from '../../app/config/api';

export const actions = {
  SET_ACCESS_TOKEN: '@@AUTH/SET_ACCESS_TOKEN',
  REMOVE_ACCESS_TOKEN: '@@AUTH/REMOVE_ACCESS_TOKEN'
};

export const actionCreators = {
  setAccessToken: accessToken => {
    api.setHeader('Authorization', accessToken);
    localStorage.setItem('accessToken', accessToken);
    return {
      type: actions.SET_ACCESS_TOKEN,
      payload: accessToken
    };
  },
  removeAccessToken: () => {
    localStorage.removeItem('accessToken');
    return {
      type: actions.REMOVE_ACCESS_TOKEN
    };
  },
  checkAuth: () => (dispatch, getState) => {
    const { accessToken } = getState().auth;
    dispatch(actionCreators.setAccessToken(accessToken));
  }
};
