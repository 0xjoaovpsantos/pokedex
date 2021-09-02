//React
import { useState, useEffect } from 'react';

//Components Ant Design
import { Typography, Row, Col } from 'antd';

//Services
import api from '../../../../services/api';

//Components created
import { ModalPokemonInformations } from '../ModalPokemonInformations/ModalPokemonInformations';

//Shared
import { PokemonInformationProps } from '../../../../shared/Interfaces';

//Utils
import { handleError } from '../../../../utils/handleError';

//Custom CSS
import '../../listPokemons.css';

interface PokemonCardProps {
  pokemon: PokemonInformationProps;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  //Components Ant Design
  const { Text } = Typography;

  //States
  const [pokemonInformations, setPokemonInformations] =
    useState<PokemonInformationProps>({} as PokemonInformationProps);
  const [showModalPokemonInformation, setShowModalPokemonInformation] =
    useState<boolean>(false);

  const fetchPokemonInformation = async () => {
    try {
      const response = await api.get<PokemonInformationProps>(
        `/${pokemon.name}`,
      );

      setPokemonInformations(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchPokemonInformation();
  }, []);

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
