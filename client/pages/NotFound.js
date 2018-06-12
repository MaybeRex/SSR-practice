import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <h1 className="center">
      Oops, route not found!
    </h1>
  );
};

export default NotFound;
