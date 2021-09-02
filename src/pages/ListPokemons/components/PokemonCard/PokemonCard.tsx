import { Layout, Typography, Input, Row, Col } from 'antd';

import api from '../../../../services/api';

import { ModalPokemonInformations } from '../ModalPokemonInformations/ModalPokemonInformations';

import { useState, useEffect } from 'react';

import '../../listPokemons.css';

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
        <Text>{pokemon.name}</Text>
        <img src={pokemonInformations?.sprites?.front_default} alt="" />
        {pokemonInformations?.types?.map((type) => (
          <p>{type.type.name}</p>
        ))}
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
