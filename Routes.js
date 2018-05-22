import React from 'react';
import Home from './client/components/Home'
import UserList from './client/components/UserList';

export default [{
  path: '/',
  component: Home,
  exact: true
}, {
  path: '/users',
  component: UserList,
  loadData: UserList.loadData,
}];
