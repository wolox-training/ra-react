export const actions = {
  SET_ACCESS_TOKEN: '@@AUTH/SET_ACCESS_TOKEN',
  REMOVE_ACCESS_TOKEN: '@@AUTH/REMOVE_ACCESS_TOKEN'
};

export default {
  setAccessToken: accessToken => ({
    type: actions.SET_ACCESS_TOKEN,
    payload: accessToken
  }),
  removeAccessToken: () => ({
    type: actions.REMOVE_ACCESS_TOKEN
  })
};
