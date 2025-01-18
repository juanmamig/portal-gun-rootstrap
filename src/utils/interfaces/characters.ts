export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    image: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    }
}

export interface IInfo {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface ICharactersResponse {
    info: IInfo,
    results: ICharacter[]
}

export interface ICharacterResponse {
    character: ICharacter,
}