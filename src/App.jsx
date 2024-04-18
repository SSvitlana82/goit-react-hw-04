import { useEffect, useState } from 'react';

import './App.css';
import { searchImages } from './unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';

function App() {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = query => {
    setPage(1);
    setQuery(query);
    setGallery([]);
  };

  useEffect(() => {
    async function fetchImage() {
      if (query === '') {
        return;
      }
      setIsLoading(true);
      const data = await searchImages(query, page);
      console.log(data);
      setGallery([...gallery, ...data.results]);
      console.log(gallery);
      setIsLoading(false);
    }
    fetchImage();
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };
  const showLoadMore = gallery.length > 0;

  return (
    <>
      {isLoading && <Loader></Loader>}
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <ImageGallery gallery={gallery}></ImageGallery>
      {showLoadMore && <LoadMoreBtn loadMore={loadMore}></LoadMoreBtn>}
    </>
  );
}

export default App;
