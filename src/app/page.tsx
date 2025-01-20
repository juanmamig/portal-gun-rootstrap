import { Metadata } from 'next';
import CharacterGrid from './components/CharactersGrid';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMesage';

import { getAllCharacters } from '@/utils/lib/lib';
import { ICharactersResponse } from '@/utils/interfaces/characters';
import { ISearchParams } from '@/utils/interfaces/searchParams';
import { Suspense } from 'react';

export const metadata: Metadata = {
  description: 'Discover your favorite Rick and Morty characters!',
};

const CharactersContent = async ({
  searchParams,
}: {
  searchParams: Promise<ISearchParams>;
}) => {
  const { page, name } = await searchParams;
  const response = await getAllCharacters(page, name);
  if ('type' in response)
    return <ErrorMessage type={response.type} name={name} />;
  const { results, info } = response as ICharactersResponse;
  return (
    <>
      <CharacterGrid characters={results} />
      <Pagination info={info} />
    </>
  );
};

const Characters = ({
  searchParams,
}: {
  searchParams: Promise<ISearchParams>;
}) => {
  const number = Math.floor(Math.random() * 10000); // Hack to force Suspense re-render.

  return (
    <Suspense key={number} fallback={<CharacterGrid isLoading />}>
      <CharactersContent searchParams={searchParams} />
    </Suspense>
  );
};

export default Characters;
