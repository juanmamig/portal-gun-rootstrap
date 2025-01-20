import Image from 'next/image';
import Link from 'next/link';

import classes from './characterCard.module.css';

import { ICharacter } from '@/utils/interfaces/characters';
import Status from '../Status';

const CharacterCard = ({ character }: { character: ICharacter }) => {
  return (
    <Link
      className={classes.characterCard}
      href={`/characters/${character.id}`}
      aria-label={`Go to ${character.name} detail page`}
    >
      <div className={classes.imageWrapper}>
        <Image
          fill
          src={character.image}
          alt={`Image of ${character.name}`}
          className={classes.characterImage}
        />
      </div>
      <div className={classes.info}>
        <h2 className={classes.characterName}>{character.name}</h2>
        <Status status={character.status} species={character.species} />
      </div>
    </Link>
  );
};

export default CharacterCard;
