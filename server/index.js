import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

import Routes from '../Routes';
import Home from '../client/components/Home';

const app = express();

// middleware
app.use(express.static('public'));

// endpoint
app.get('*', (req, res) => {
  const store = createStore();

  const componentFetches = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  })

  Promise.all(componentFetches).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
