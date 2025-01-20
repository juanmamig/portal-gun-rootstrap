import { Metadata } from 'next';
import { Suspense } from 'react';

import { getSingleCharacter } from '@/utils/lib/lib';
import ErrorMessage from '@/app/components/ErrorMesage';
import CharacterDetailCard from '@/app/components/CharacterDetailCard';
// import { generateMetadataDynamicText } from '@/utils/metadata/metadata';
import { ErrorType } from '@/utils/interfaces/errors';
import SkeletonDetailsCard from '@/app/components/SkeletonDetailsCard';

// Hi Rootstrap! Quick heads-up regarding metadata: Generating dynamic metadata
// cause blocking before the UI is rendered, because of this the Suspense fallback will
// delay creating a NOT-SO-GOOD UX.

// For this challenge I will leave the static metadata uncommented, knowing
// that in a real project dynamic meta is a must. On the README.md I explain what
// I would do.

/*
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const character = await getSingleCharacter(id);
  return generateMetadataDynamicText(
    'type' in character ? undefined : character
  );
};
*/

export const metadata: Metadata = {
  description: 'Detailed Character Page',
};

const CharacterDetailContent = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await getSingleCharacter(id);
  if ('type' in response)
    return <ErrorMessage type={response.type as ErrorType} />;
  return <CharacterDetailCard character={response} />;
};

const CharacterPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<SkeletonDetailsCard />}>
      <CharacterDetailContent params={params} />
    </Suspense>
  );
};

export default CharacterPage;
