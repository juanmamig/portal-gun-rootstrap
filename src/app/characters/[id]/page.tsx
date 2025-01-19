import { Metadata } from 'next';
import { Suspense } from 'react';

import { getSingleCharacter } from '@/utils/lib/lib';
import ErrorMessage from '@/app/components/ErrorMesage';
import CharacterDetailCard from '@/app/components/CharacterDetailCard';
import { generateMetadataDynamicText } from '@/utils/metadata/metadata';
import { ErrorType } from '@/utils/interfaces/errors';
import SkeletonDetailsCard from '@/app/components/SkeletonDetailsCard';

// Hi Rootstrap! Quick heads-up regarding this function: Generating dynamic metadata can
// cause some blocking before the UI is rendered, which may result in a slight delay
// when accessing a detailed page. I've opted to keep the dynamic metadata because,
// in a blog scenario, it would significantly boost SEO performance.
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

const CharacterDetailContent = async ({ id }: { id: string }) => {
  const response = await getSingleCharacter(id);
  if ('type' in response)
    return <ErrorMessage type={response.type as ErrorType} />;
  return <CharacterDetailCard character={response} />;
};

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<SkeletonDetailsCard />}>
      <CharacterDetailContent id={id} />
    </Suspense>
  );
}
