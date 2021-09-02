import { Layout, Typography, Input, Row, Col } from 'antd';

import api from '../../../../services/api';

import { ModalPokemonInformations } from '../ModalPokemonInformations/ModalPokemonInformations';

import { useState, useEffect } from 'react';

import '../../listPokemons.css';

import Fade from 'react-reveal/Fade';

interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

interface PokemonInformationsProps {
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { Title, Text } = Typography;
  const [pokemonId, setPokemonId] = useState('');
  const [pokemonInformations, setPokemonInformations] =
    useState<PokemonInformationsProps>({} as PokemonInformationsProps);
  const [showModalPokemonInformation, setShowModalPokemonInformation] =
    useState(false);

  const getPokemonId = async () => {
    const response = await api.get<PokemonInformationsProps>(
      `/${pokemon.name}`,
    );

    setPokemonInformations(response.data);
  };

  // const fetchPokemonInformations = async () => {
  //   await api.get('/');
  // }

  useEffect(() => {
    getPokemonId();
  }, []);

  // useEffect(() => {
  //   fetchPokemonInformations();
  // }, [pokemonId]);

  return (
    <>
      <Col
        className="pokemon-card"
        onClick={() => setShowModalPokemonInformation(true)}
      >
        <Row justify="space-around">
          <Col className="pokemon-name-container">
            <Text className="pokemon-name">{pokemon.name}</Text>
            {pokemonInformations?.types?.map((type) => (
              <Text className="pokemon-type">{type.type.name}</Text>
            ))}
          </Col>
          <img
            src={pokemonInformations?.sprites?.front_default}
            alt=""
            className="pokemon-img"
          />
        </Row>
      </Col>
      {showModalPokemonInformation && (
        <ModalPokemonInformations
          visible={showModalPokemonInformation}
          setVisible={setShowModalPokemonInformation}
          pokemon={pokemonInformations}
        />
      )}
    </>
  );
};
