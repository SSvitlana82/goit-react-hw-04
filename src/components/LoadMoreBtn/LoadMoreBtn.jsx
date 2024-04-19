import { useState } from 'react';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div>
      <button onClick={loadMore}>LOAD MORE</button>
    </div>
  );
};

export default LoadMoreBtn;
