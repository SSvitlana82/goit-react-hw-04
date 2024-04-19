import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ gallery, openModal }) => {
  console.log(gallery[0]?.urls.small);
  return (
    <div>
      <ul>
        {gallery.map(imageInfo => {
          return (
            <li key={imageInfo.id}>
              <ImageCard
                openModal={openModal}
                imageInfo={imageInfo}
              ></ImageCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
