import { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ gallery }) => {
  console.log(gallery[0]?.urls.small);
  return (
    <div>
      <ul>
        {gallery.map(imageInfo => {
          return (
            <li key={imageInfo.id}>
              <ImageCard imageInfo={imageInfo}></ImageCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
