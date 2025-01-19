export const allCharactersQuery = (page: string, name: string) => `
query {
  characters(page: ${page}, filter: { name: "${name}" }) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      image
      status
      species
      type
      origin {
        name
      }
      location {
        name
      }
    }
  }
}
`;

export const singleCharacterQuery = (id: string) => `
{
  character(id: ${id}) {
    name
    gender
    image
    status
    species
    origin {
      name
    }
    location {
      name
    }
  }
}
`;
