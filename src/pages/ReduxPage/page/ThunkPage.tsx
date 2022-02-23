import { Alert, Space, Spin, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/store";
import Pokemon from "../component/Pokemon";
import PokemonCache from "../component/PokemonCache";
import PokemonForm from "../component/PokemonForm";
import {
  fetchPokemonByName,
  setPokemonInput,
} from "../features/pokemon/pokemonSlice";

const { Title } = Typography;

export default function ThunkPage() {
  const dispatch = useDispatch();

  const { status, pokemons, pokemonInput, error } = useAppSelector(
    (state) => state.pokemon
  );

  const handleSubmit = () => {
    dispatch(fetchPokemonByName());
  };

  const handleInputChange = (pokemonName: string) => {
    dispatch(setPokemonInput(pokemonName));
  };
  const handleItemClick = (pokemonName: string) => {
    dispatch(setPokemonInput(pokemonName));
  };

  const pokemonData = pokemons.find((pokemon) => pokemon.name === pokemonInput);

  return (
    <Space size={"middle"} direction="vertical">
      <Title level={1}>Search your pokemon!</Title>
      <PokemonForm
        inputValue={pokemonInput}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <PokemonCache data={pokemons} handleItemClick={handleItemClick} />
      {status === "pending" && <Spin tip="Loading..." />}
      {status === "success" && pokemonData && <Pokemon data={pokemonData} />}
      {status === "error" && <Alert message={error} type="error" />}
    </Space>
  );
}
