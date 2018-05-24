import React from 'react';

const Home = () => (
  <div>
    <div>This is home!!</div>
    <button
      onClick={() => {
        console.log('hellooo');
      }}
    >
      press me
    </button>
  </div>
);

export default Home;
