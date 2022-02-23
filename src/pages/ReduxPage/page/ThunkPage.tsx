import * as React from 'react';
import { Alert, Space, Spin, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../app/store';
import Pokemon from '../component/Pokemon';
import PokemonCache from '../component/PokemonCache';
import PokemonForm from '../component/PokemonForm';
import { fetchPokemonByName } from '../features/pokemon/pokemonSlice';

const { Title } = Typography;

export default function ThunkPage() {
    const [pokemonInput, setPokemonInput] = React.useState('');
    const [pokemonError, setPokemonError] = React.useState(false);
    const dispatch = useAppDispatch();
    const { isLoading, pokemons } = useAppSelector((state) => state.pokemon);

    const handleSubmit = () => {
        dispatch(fetchPokemonByName(pokemonInput))
            .unwrap()
            .catch(() => {
                setPokemonError(true);
            });
    };
    const handleInputChange = (pokemonName: string) => {
        setPokemonInput(pokemonName);
        setPokemonError(false);
    };

    const handleItemClick = (pokemonName: string) => {
        setPokemonInput(pokemonName);
        setPokemonError(false);
    };

    const pokemonData = pokemons.find((pokemon) => pokemon.name === pokemonInput);

    return (
        <Space size={'middle'} direction="vertical">
            <Title level={1}>Search your pokemon!</Title>
            <PokemonForm inputValue={pokemonInput} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <PokemonCache data={pokemons} handleItemClick={handleItemClick} />
            {isLoading && <Spin tip="Loading..." />}
            {!isLoading && pokemonData && <Pokemon data={pokemonData} />}
            {pokemonError && <Alert message={`Cant fetch pokemon name: ${pokemonInput}`} type="error" />}
        </Space>
    );
}
