import Users from '../actions/users';

const defaultState = {
  isAuth: null
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case Users.FETCH_AUTH_STATUS: {
      return {
        ...state,
        isAuth: action.payload || false
      };
    }
    default: {
      return {...state};
    }
  }
}
