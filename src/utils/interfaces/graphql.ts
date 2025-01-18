import { ICharacter, IInfo } from "./characters"

export interface IGraphqlAllCharacters {
    data: {
        characters: {
            info: IInfo,
            results: ICharacter[]
        }
    }
}

export interface IGraphqlSingleCharacter {
    data: {
        character: ICharacter
    }
}