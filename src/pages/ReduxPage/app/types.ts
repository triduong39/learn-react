export type user = {
    name: string;
    email: string;
};

export type pokemon = {
    name: string;
    img: string;
    species: string;
    type: string;
    hp: string;
    atack: string;
    defense: string;
};

export type pokemonState = {
    status: 'idle' | 'pending' | 'success' | 'error';
    pokemon?: pokemon;
};
