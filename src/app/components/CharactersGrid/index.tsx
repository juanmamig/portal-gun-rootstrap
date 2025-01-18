import { ICharacter } from "@/utils/interfaces/characters";
import classes from './characterGrid.module.css';
import CharacterCard from "../CharacterCard";
import SkeletonCard from "../SkeletonCard";

const CharacterGrid = ({ characters, isLoading = false }: { characters?: ICharacter[], isLoading?: boolean }) => {

    const loaderQuantity = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className={classes.charactersContainer}>
            <div className={classes.charactersGrid}>
                {isLoading &&
                    loaderQuantity.map((num) => (
                        <SkeletonCard key={num} />
                    ))
                }

                {!isLoading && characters &&
                    characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))
                }
            </div>
        </div>
    )
}

export default CharacterGrid;