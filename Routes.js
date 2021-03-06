import React from 'react';
import App from './client/App';
import Home from './client/pages/Home'
import UserList from './client/pages/UserList';
import NotFound from './client/pages/NotFound';
import Admin from './client/pages/Admin';

import withAuth from './client/hoc/withAuth'

export default [{
  component: App,
  loadData: App.loadData,
  routes: [{
    path: '/',
    component: Home,
    exact: true
  }, {
    path: '/users',
    component: UserList,
    loadData: UserList.loadData,
  }, {
    path: '/admins',
    component: withAuth(Admin),
    loadData: Admin.loadData,
  }, {
    component: NotFound
  }]
}];
