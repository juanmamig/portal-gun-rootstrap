import Image from 'next/image';
import Link from 'next/link';

import classes from './characterCard.module.css';

import { ICharacter } from '@/utils/interfaces/characters';
import Status from '../Status';

const CharacterCard = ({ character }: { character: ICharacter }) => {
  return (
    <div className={classes.characterCard}>
      <Link className={classes.cardLink} href={`/characters/${character.id}`}>
        <div className={classes.imageWrapper}>
          <Image
            fill
            objectFit='cover'
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
    </div>
  );
};

export default CharacterCard;
