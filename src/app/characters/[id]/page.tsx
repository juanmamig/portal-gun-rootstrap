import { getSingleCharacter } from "@/utils/lib/lib";
import ErrorMessage from "@/app/components/ErrorMesage";
import CharacterDetailCard from "@/app/components/CharacterDetailCard";
import { Metadata } from "next";
import { generateMetadataDynamicText } from "@/utils/metadata/metadata";
import { Suspense } from "react";
import { ErrorType } from "@/utils/interfaces/errors";

// Hi Rootstrap, just a heads up => Next.js will wait for data fetching inside generateMetadata to complete before streaming UI to the client. This is why IN THIS CASE Suspense wont work as it does on the previous page. If this was a blog I'd rather prioritize the SEO that dynamic metadata gives me, thats why I decided to leave it his way. Thread on https://github.com/vercel/next.js/issues/72935
export const generateMetadata = async (
    { params }: { params: { id: string } }
): Promise<Metadata> => {
    const character = await getSingleCharacter(params.id);
    return generateMetadataDynamicText(('type' in character) ? undefined : character);
};

const CharacterDetailContent = async ({ id }: { id: string }) => {
    const response = await getSingleCharacter(id);
    if ('type' in response) return <ErrorMessage type={response.type as ErrorType} />;
    return <CharacterDetailCard character={response} />;
};

const Loading = () => (
    <div>
        Loading character details...
    </div>
);

export default async function CharacterPage({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <Suspense fallback={<Loading />}>
            <CharacterDetailContent id={id} />
        </Suspense>
    );
}