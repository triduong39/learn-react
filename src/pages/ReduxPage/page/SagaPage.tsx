import * as React from 'react';
import { Alert, Collapse, Space, Spin, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../app/store';
import Pokemon from '../component/Pokemon';
import PokemonCache from '../component/PokemonCache';
import PokemonForm from '../component/PokemonForm';
import { fetchPokemon } from '../features/pokemonSaga/pokemonSagaSlice';

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function SagaPage() {
    const [pokemonInput, setPokemonInput] = React.useState('');
    const [pokemonError, setPokemonError] = React.useState(false);
    const dispatch = useAppDispatch();
    const { isLoading, pokemons } = useAppSelector((state) => state.pokemonSaga);

    const handleSubmit = () => {
        dispatch(fetchPokemon(pokemonInput));
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
        <Space size={'middle'} direction="vertical" style={{ width: '100%' }}>
            <Title level={1}>Search your pokemon!</Title>
            <Collapse>
                <Panel header="Todo" key="1">
                    <Space size={'middle'} direction="vertical">
                        <Text>
                            Todo: Nếu lưu <Text type="warning">input value</Text> và{' '}
                            <Text type="warning">error state</Text> vào redux thì state sẽ vẫn dữ nguyên khi quay lại
                            trang =&gt; trải nghiệm người dùng nên mình đã xóa và đem{' '}
                            <Text type="warning">input value</Text> và <Text type="warning">error state</Text> bỏ vô
                            component
                        </Text>
                        <Text>
                            Còn về vấn đề <Text type="warning">handling error</Text> khi fetch ko thành công thì chưa
                            biết cách giải quyết.
                        </Text>
                        <Text>
                            Ta có thể sử dụng <Text type="warning">react-query</Text> để fetch dữ liệu thay cho việc sử
                            dụng Thunk và Saga thì sẽ dễ dàng hơn ( &quot;i think =))&quot; )
                        </Text>
                    </Space>
                </Panel>
            </Collapse>
            <PokemonForm inputValue={pokemonInput} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <PokemonCache data={pokemons} handleItemClick={handleItemClick} />
            {isLoading && <Spin tip="Loading..." />}
            {!isLoading && pokemonData && <Pokemon data={pokemonData} />}
            {pokemonError && <Alert message={`Cant fetch pokemon name: ${pokemonInput}`} type="error" />}
        </Space>
    );
}
