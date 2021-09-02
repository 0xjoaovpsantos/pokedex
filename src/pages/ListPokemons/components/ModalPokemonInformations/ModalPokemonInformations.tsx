import { Col, Modal, Row, Typography, Slider } from 'antd';
import { Dispatch, SetStateAction } from 'react';

interface ModalPokemonInformations {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  pokemon: PokemonInformationsProps;
}

interface PokemonInformationsProps {
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
}

export const ModalPokemonInformations = ({
  visible,
  setVisible,
  pokemon,
}: ModalPokemonInformations) => {
  const { Text } = Typography;

  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      closable={false}
      footer={false}
    >
      {pokemon.stats.map((information) => {
        return (
          <>
            <Row justify="space-around" align="middle">
              <Text className="pokemon-stat">
                {information.stat.name.toUpperCase()}
              </Text>
              <Text>{information.base_stat}</Text>
              <Slider
                className="pokemon-base-state"
                defaultValue={information.base_stat}
              />
              <Text>100</Text>
            </Row>
          </>
        );
      })}
    </Modal>
  );
};
