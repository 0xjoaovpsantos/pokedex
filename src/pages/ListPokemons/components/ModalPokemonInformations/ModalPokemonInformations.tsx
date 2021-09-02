import { Modal } from 'antd';
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
  return (
    <Modal visible={visible} onCancel={() => setVisible(false)}>
      {pokemon.stats.map((information) => {
        return (
          <>
            <p>
              {information.stat.name.toUpperCase()} - {information.base_stat}
            </p>
          </>
        );
      })}
    </Modal>
  );
};
