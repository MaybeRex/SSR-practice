class Users {
  static FETCH_USERS = 'FETCH_USERS';
  static FETCH_AUTH_STATUS = 'FETCH_AUTH_STATUS'

  // custom axios instance
  static fetchUsers = () => async (dispatch, getState, axios) => {
    let res;
    try {
      res = await axios.get('https://react-ssr-api.herokuapp.com/users/xss');
    } catch (e) {
      console.error(e);
    }

    dispatch({
      type: Users.FETCH_USERS,
      payload: res.data
    });
  }

  static getAuthStatus = () => async (dispatch, getState, axios) => {
    try {
      const res = await axios.get('/current_user');

      dispatch({
        type: Users.FETCH_AUTH_STATUS,
        payload: res.data === '' ? false : res.data
      });
    } catch (e) {
      throw e;
    }
  }
}

export default Users;
