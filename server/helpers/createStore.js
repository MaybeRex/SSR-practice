import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../client/reducers/rootReducer';

export default (initialState = {}) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
)
