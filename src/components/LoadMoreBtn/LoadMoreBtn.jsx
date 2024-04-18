import { useState } from 'react';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div>
      <button onClick={loadMore}>LOAD MORE</button>
    </div>
  );
};

export default LoadMoreBtn;
