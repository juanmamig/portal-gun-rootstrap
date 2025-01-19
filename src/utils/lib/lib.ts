import { ICharacter, ICharactersResponse } from '../interfaces/characters';
import { ErrorResponse, ErrorType } from '../interfaces/errors';
import { fetchGraphQLData } from '../graphql/fetch';

import {
  IGraphqlAllCharacters,
  IGraphqlSingleCharacter,
} from '@/utils/interfaces/graphql';
import {
  allCharactersQuery,
  singleCharacterQuery,
} from '@/utils/graphql/queries';

enum ErrorTypes {
  character = 'character',
  server = 'sever',
  unknown = 'unknown',
  notFound = 'notFound',
}

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return { type: error.message as ErrorType };
  }
  return { type: ErrorTypes.character as ErrorType };
};

export const getAllCharacters = async (
  page: string = '1',
  name: string = ''
): Promise<ICharactersResponse | ErrorResponse> => {
  const query = allCharactersQuery(page, name);
  try {
    const data: IGraphqlAllCharacters = await fetchGraphQLData(query);
    if (!data.data.characters.results.length) {
      throw new Error(ErrorTypes.character);
    }
    return data.data.characters;
  } catch (error) {
    return handleError(error);
  }
};

export const getSingleCharacter = async (
  id: string
): Promise<ICharacter | ErrorResponse> => {
  const query = singleCharacterQuery(id);

  try {
    const data: IGraphqlSingleCharacter = await fetchGraphQLData(query);

    if (!data.data.character) {
      throw new Error(ErrorTypes.character);
    }

    return data.data.character;
  } catch (error) {
    return handleError(error);
  }
};
