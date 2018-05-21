import React from 'react';
import ReactDOM from 'react-dom';

import Routes from '../Routes';

ReactDOM.hydrate(
  <Routes />,
  document.body.querySelector('#root')
);
