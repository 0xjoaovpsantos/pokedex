import { Layout, Typography, Input, Row, Col, Button } from 'antd';
import { useState, useEffect } from 'react';

import api from '../../services/api';

import { PokemonCard } from './components/PokemonCard/PokemonCard';

interface GetPokemonProps {
  next: string;
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
  const [page, setPage] = useState(0);
  const [searchPokemon, setSearckPokemon] = useState('');
  const [specificPokemon, setSpecificPokemon] = useState<PokemonCardProps>(
    {} as PokemonCardProps,
  );
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  const { Search } = Input;

  const getPokemons = async (resetListPokemons = false) => {
    const response = await api.get<GetPokemonProps>(
      `?limit=${LIMIT}&offset=${OFFSET * page}`,
    );

    if (response.data.next) {
      console.log(response.data);
      setShowLoadMoreButton(true);
    } else {
      setShowLoadMoreButton(false);
    }

    if (resetListPokemons) {
      setListPokemons([...response.data.results]);
    } else {
      setListPokemons([...listPokemons, ...response.data.results]);
    }
  };

  const fetchPokemonName = async () => {
    try {
      const response = await api.get<PokemonCardProps>(`/${searchPokemon}`);
      setSpecificPokemon(response.data);
    } catch (error) {
      setSpecificPokemon({} as PokemonCardProps);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [page]);

  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff' }}>
        <Title level={1}>Pokdex</Title>
      </Header>
      <Content>
        <Search
          placeholder="Digite o nome do pokemon"
          onChange={(event) => setSearckPokemon(event.target.value)}
          onSearch={() => fetchPokemonName()}
        />

        <Row
          gutter={[0, 20]}
          justify="space-around"
          className="pokemon-list-container"
        >
          {Object.keys(specificPokemon).length === 0 ? (
            listPokemons.map((pokemon) => <PokemonCard pokemon={pokemon} />)
          ) : (
            <PokemonCard pokemon={specificPokemon} />
          )}
        </Row>

        {showLoadMoreButton && (
          <Button
            className="pokemon-button-load-more"
            onClick={() => setPage(page + 1)}
          >
            Carregar mais
          </Button>
        )}
      </Content>
    </Layout>
  );
};
