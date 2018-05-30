class Users {
  static FETCH_USERS = 'FETCH_USERS';
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
}

export default Users;
