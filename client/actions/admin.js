class Admin {
  static FETCH_ADMINS = 'FETCH_ADMINS';

  static fetchAdmins = () => async (dispatch, getState, axios) => {
    const res = await axios.get('/admins');

    dispatch({
      type: Admin.FETCH_ADMINS,
      payload: res.data
    });
  }
}

export default Admin;
