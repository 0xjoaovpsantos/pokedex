export interface PokemonInformationProps {
  name: string;
  sprites?: {
    front_default: string;
  };
  stats?: PokemonStats[];
  types?: PokemonTypes[];
}

interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonTypes {
  type: {
    name: string;
  };
}
