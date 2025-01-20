'use client';
import { FormEvent, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import CustomButton from '../CustomButton';
import classes from './searchBar.module.css';

const SearchBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/?name=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    setSearchTerm('');
  }, [pathName]);

  return (
    <form className={classes.searchForm} onSubmit={handleSubmit}>
      <label htmlFor="character" className="visually-hidden">
        Search for a character
      </label>
      <input
        id="character"
        className={classes.searchBox}
        type='text'
        placeholder='Type a character'
        name='character'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CustomButton aria-label='Search' type='submit'>Search</CustomButton>
    </form>
  );
};

export default SearchBar;
