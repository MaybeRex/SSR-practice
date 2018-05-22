import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Home from '../../client/components/Home';

export default ({ path }) => {
  const content = renderToString(
    <StaticRouter location={path} context={{}}>
      <Home />
    </StaticRouter>
  );

  return`
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
