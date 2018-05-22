import axios from 'axios';

class Users {
  static FETCH_USERS = 'FETCH_USERS';

  static fetchUsers = () => async dispatch => {
    let res;
    try {
      res = await axios.get('https://react-ssr-api.herokuapp.com/users');
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
