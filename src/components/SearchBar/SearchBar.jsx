import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const search = inputRef.current.value.trim();

    if (search.length !== 0) {
      onSubmit(search);
    } else {
      toast.error("This didn't work.");
    }
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          /* autocomplete="off"
          autofocus */
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
