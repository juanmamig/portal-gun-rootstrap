const graphqlEndpoint = 'https://rickandmortyapi.com/graphql';

export const fetchGraphQLData = async (query: string) => {
    const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });
    if (!response.ok) throw new Error('server');
    return response.json();
};
