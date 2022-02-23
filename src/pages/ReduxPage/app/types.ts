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
    isLoading: boolean;
    pokemons: pokemon[];
};
