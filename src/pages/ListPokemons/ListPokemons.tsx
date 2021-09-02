import { Layout, Typography, Input, Row, Col } from 'antd';
import { useState, useEffect } from 'react';

import api from '../../services/api';

import { PokemonCard } from './components/PokemonCard/PokemonCard';

interface GetPokemonProps {
  results: PokemonCardProps[];
}

interface PokemonCardProps {
  name: string;
  url: string;
}

export const ListPokemons = () => {
  const LIMIT = 20;
  const OFFSET = 20;
  const [listPokemons, setListPokemons] = useState<PokemonCardProps[]>([]);
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  const { Search } = Input;

  const getPokemons = async () => {
    const response = await api.get<GetPokemonProps>(
      `?limit=${LIMIT}&offset${OFFSET}`,
    );

    setListPokemons([...listPokemons, ...response.data.results]);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff' }}>
        <Title level={1}>Pokdex</Title>
      </Header>
      <Content>
        <Search placeholder="Digite o nome do pokemon" />

        <Row gutter={[0, 20]} justify="space-around">
          {listPokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </Row>
      </Content>
    </Layout>
  );
};
