import React from 'react';
import App from './client/App';
import Home from './client/pages/Home'
import UserList from './client/pages/UserList';

export default [{
  component: App,
  routes: [{
    path: '/',
    component: Home,
    exact: true
  }, {
    path: '/users',
    component: UserList,
    loadData: UserList.loadData,
  }]
}];
