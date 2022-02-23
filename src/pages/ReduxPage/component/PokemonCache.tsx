import { Image, Space, Typography } from "antd";
import { pokemon } from "../app/types";

const { Title } = Typography;

interface IRenderUserProps {
  data: pokemon[];
  handleItemClick: (pokemonName: string) => void;
}

export default function PokemonCache({
  data,
  handleItemClick,
}: IRenderUserProps) {
  return (
    <Space>
      <Title level={2}>Cache: </Title>
      {data.map((pokemon) => {
        return (
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(pokemon.name)}
            preview={false}
            key={pokemon.name}
            alt={`pokemon-${pokemon.name}`}
            src={pokemon.img}
          />
        );
      })}
    </Space>
  );
}
