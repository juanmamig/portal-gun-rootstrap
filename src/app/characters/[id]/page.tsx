import { Metadata } from 'next';
import { Suspense } from 'react';

import { getSingleCharacter } from '@/utils/lib/lib';
import ErrorMessage from '@/app/components/ErrorMesage';
import CharacterDetailCard from '@/app/components/CharacterDetailCard';
import { generateMetadataDynamicText } from '@/utils/metadata/metadata';
import { ErrorType } from '@/utils/interfaces/errors';

export const generateMetadata = async ({ params }: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const character = await getSingleCharacter(id);
  return generateMetadataDynamicText(
    'type' in character ? undefined : character
  );
};

const CharacterDetailContent = async ({ id }: { id: string }) => {
  const response = await getSingleCharacter(id);
  if ('type' in response)
    return <ErrorMessage type={response.type as ErrorType} />;
  return <CharacterDetailCard character={response} />;
};

const Loading = () => <div>Loading character details...</div>;

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <CharacterDetailContent id={id} />
    </Suspense>
  );
}
