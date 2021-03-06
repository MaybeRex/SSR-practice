import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

import Routes from '../Routes';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));

// endpoint
app.get('*', (req, res) => {
  const store = createStore(req);

  const componentFetches = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if(!promise) {
      return
    }
    return new Promise((resolve, reject) => {
      promise.then(resolve).catch(resolve)
    })
  })

  Promise.all(componentFetches).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if(context.url) {
      return res.redirect(301, context.url);
    }

    if(context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
