export const actions = {
  SET_ACCESS_TOKEN: '@@AUTH/SET_ACCESS_TOKEN'
};

export default {
  setAccessToken: accessToken => ({
    type: actions.SET_ACCESS_TOKEN,
    payload: {
      accessToken
    }
  })
};
