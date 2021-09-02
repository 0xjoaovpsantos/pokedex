import { Layout, Typography, Input, Row, Col, Button } from 'antd';
import { useState, useEffect } from 'react';

import api from '../../services/api';

import { PokemonCard } from './components/PokemonCard/PokemonCard';

import { PokemonInformationProps } from '../../shared/Interfaces';

import Fade from 'react-reveal/Fade';

interface GetPokemonProps {
  next: string;
  results: PokemonInformationProps[];
}

export const ListPokemons = () => {
  const LIMIT = 20;
  const OFFSET = 20;
  const [listPokemons, setListPokemons] = useState<PokemonInformationProps[]>(
    [],
  );
  const [page, setPage] = useState<number>(0);
  const [searchPokemon, setSearckPokemon] = useState<string>('');
  const [specificPokemon, setSpecificPokemon] =
    useState<PokemonInformationProps>({} as PokemonInformationProps);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(false);
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  const { Search } = Input;

  const getPokemons = async (resetListPokemons = false) => {
    const response = await api.get<GetPokemonProps>(
      `?limit=${LIMIT}&offset=${OFFSET * page}`,
    );

    if (response.data.next) {
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
      const response = await api.get<PokemonInformationProps>(
        `/${searchPokemon}`,
      );
      setSpecificPokemon(response.data);
    } catch (error) {
      setSpecificPokemon({} as PokemonInformationProps);
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

        {(listPokemons.length > 0 ||
          Object.keys(specificPokemon).length > 0) && (
          <Fade bottom>
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
          </Fade>
        )}

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
