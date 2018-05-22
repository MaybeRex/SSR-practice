import express from 'express';
import renderer from './helpers/renderer';

import Home from '../client/components/Home';

const app = express();

// middleware
app.use(express.static('public'));

// endpoint
app.get('/', (req, res) => {
  res.send(renderer(req));
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
