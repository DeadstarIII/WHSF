// src/Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className="loading-screen">
      <video autoPlay loop muted className="loading-video">
        <source src="/loader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loading;
