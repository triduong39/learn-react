export type user = {
    name: string;
    email: string;
};

export type pokemon = {
    name: string;
    img: string;
    species: string;
    type: string;
    hp: number;
    atack: number;
    defense: number;
};

type sprites = {
    front_default: string;
};
type species = {
    name: string;
};
type types = {
    type: {
        name: string;
    };
};
type stats = {
    base_stat: number;
    stat: {
        name: string;
    };
};

export type pokemonDataFetch = {
    name: string;
    sprites: sprites;
    species: species;
    types: types[];
    stats: stats[];
};

export type pokemonState = {
    isLoading: boolean;
    pokemons: pokemon[];
};

export type PaginationParams = {
    _limit: number;
    _page: number;
    _totalRows: number;
};

export type ListResponse<T> = {
    data: T;
    pagination: PaginationParams;
};
