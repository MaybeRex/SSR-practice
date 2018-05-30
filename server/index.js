import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

import Routes from '../Routes';

const app = express();

// middleware
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqPotDecorator(opts) { // weird stuff for google auth
    opts.headers['x-forwarded-host'] = 'localhost:5000';
    return opts;
  }
}))

app.use(express.static('public'));

// endpoint
app.get('*', (req, res) => {
  const store = createStore(req);

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
