export const actions = {
  LOG_IN: '@@AUTH/LOG_IN'
};  

export default {
  login: (email, token) => ({
    type: actions.LOG_IN,
    payload: {
      email,
      token
    }
  })
};
