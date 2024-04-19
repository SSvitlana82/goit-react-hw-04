import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

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
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          ref={inputRef}
          type="text"
          /* autocomplete="off"
          autofocus */
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
