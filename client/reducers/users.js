import Users from '../actions/users';

const defaultState = {
  userList: []
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case Users.FETCH_USERS: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
