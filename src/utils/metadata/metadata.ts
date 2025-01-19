import { ICharacter } from '../interfaces/characters';

export const generateMetadataDynamicText = (character?: ICharacter) => {
  if (!character)
    return {
      title: 'Portal Gun | Rootstrap',
      description:
        'Ooops. The character you are trying to find does not exist or we cannot find it',
      openGraph: {
        title: `Portal Gun - Rootstrap`,
      },
    };

  const { name, origin, status, species, image } = character;

  return {
    title: `Portal Gun - Rootstrap | ${name}`,
    description: `${name} is a ${species} from ${origin.name}. ${status === 'Alive' ? 'Thankfully' : 'Unfortunately'} this beautiful ${species} is ${status}`,
    openGraph: {
      title: `Portal Gun - Rootstrap | ${name}'s Info`,
      images: [image],
    },
  };
};
