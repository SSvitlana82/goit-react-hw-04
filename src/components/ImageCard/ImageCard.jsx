import { useState } from 'react';

const ImageCard = ({ imageInfo }) => {
  return (
    <div>
      <div>
        <img src={imageInfo.urls.small} alt={imageInfo.description} />
      </div>
    </div>
  );
};

export default ImageCard;
