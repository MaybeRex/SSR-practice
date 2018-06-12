import Admins from '../actions/admin';

const defaultState = {
  adminList: []
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case Admins.FETCH_ADMINS: {
      return {
        ...state,
        adminList: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
