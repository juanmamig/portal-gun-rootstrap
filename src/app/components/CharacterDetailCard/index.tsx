import Image from 'next/image';

import classes from './characterDetailCard.module.css';

import { ICharacter } from '@/utils/interfaces/characters';
import Status from '../Status';

const CharacterDetailCard = ({ character }: { character: ICharacter }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          priority
          className={classes.image}
        />
      </div>
      <div className={classes.details}>
        <h1 className={classes.name}>{character.name}</h1>
        <Status status={character.status} species={character.species} />
        <p>
          <span>Origin:</span> {character.origin.name}
        </p>
        <p>
          <span>Location:</span> {character.location.name}
        </p>
        <p>
          <span>Gender:</span> {character.gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetailCard;
