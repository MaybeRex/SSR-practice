import React from 'react';
import Home from './client/pages/Home'
import UserList from './client/pages/UserList';

export default [{
  path: '/',
  component: Home,
  exact: true
}, {
  path: '/users',
  component: UserList,
  loadData: UserList.loadData,
}];
