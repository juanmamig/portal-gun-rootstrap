import { Metadata } from 'next';
import { Suspense } from 'react';

import CharacterGrid from './components/CharactersGrid';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMesage';

import { getAllCharacters } from '@/utils/lib/lib';
import { ICharactersResponse } from '@/utils/interfaces/characters';
import { ISearchParams } from '@/utils/interfaces/searchParams';

export const metadata: Metadata = {
  description:
    'Discover your favorite Rick and Morty characters! Search, explore, and maybe even find someone more reliable than Jerry.',
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
  return (
    <Suspense
      key={JSON.stringify(searchParams)}
      fallback={<CharacterGrid isLoading />}
    >
      <CharactersContent searchParams={searchParams} />
    </Suspense>
  );
};

export default Characters;
