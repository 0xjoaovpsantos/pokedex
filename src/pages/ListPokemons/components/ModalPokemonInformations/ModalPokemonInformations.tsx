//React
import { Dispatch, SetStateAction } from 'react';

//Components Ant Design
import { Modal, Row, Typography, Slider } from 'antd';

//Interfaces
import { PokemonInformationProps } from '../../../../shared/Interfaces';

interface ModalPokemonInformations {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  pokemon: PokemonInformationProps;
}

export const ModalPokemonInformations = ({
  visible,
  setVisible,
  pokemon,
}: ModalPokemonInformations) => {
  //Components Ant Design
  const { Text } = Typography;

  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      closable={false}
      footer={false}
    >
      {pokemon.stats?.map((information) => {
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
