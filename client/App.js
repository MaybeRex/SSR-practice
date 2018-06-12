import React from 'react';
import { renderRoutes } from 'react-router-config';
import Users from './actions/users';

import Header from './components/Header';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.loadData = ({ dispatch }) => dispatch(Users.getAuthStatus())

export default App;
