import { Layout, Typography, Input, Row, Col } from 'antd';

import api from '../../../../services/api';

import { ModalPokemonInformations } from '../ModalPokemonInformations/ModalPokemonInformations';

import { PokemonInformationProps } from '../../../../shared/Interfaces';

import { useState, useEffect } from 'react';

import '../../listPokemons.css';

interface PokemonCardProps {
  pokemon: PokemonInformationProps;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { Title, Text } = Typography;
  const [pokemonId, setPokemonId] = useState('');
  const [pokemonInformations, setPokemonInformations] =
    useState<PokemonInformationProps>({} as PokemonInformationProps);
  const [showModalPokemonInformation, setShowModalPokemonInformation] =
    useState(false);

  const getPokemonId = async () => {
    const response = await api.get<PokemonInformationProps>(`/${pokemon.name}`);

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
