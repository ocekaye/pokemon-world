import { PokemonTypes } from "~/client/Pokemon";
import BgLoading from "~/components/Card/CardBgSpecies/BgLoading";
import Normal from "~/components/Card/CardBgSpecies/Normal";
import Flying from "~/components/Card/CardBgSpecies/Flying";
import Fighting from "~/components/Card/CardBgSpecies/Fighting";
import Poison from "~/components/Card/CardBgSpecies/Poison";
import Ground from "~/components/Card/CardBgSpecies/Ground";
import Rock from "~/components/Card/CardBgSpecies/Rock";
import Bug from "~/components/Card/CardBgSpecies/Bug";
import Ghost from "~/components/Card/CardBgSpecies/Ghost";
import Steel from "~/components/Card/CardBgSpecies/Steel";
import Fire from "~/components/Card/CardBgSpecies/Fire";
import Water from "~/components/Card/CardBgSpecies/Water";
import Grass from "~/components/Card/CardBgSpecies/Grass";
import Electric from "~/components/Card/CardBgSpecies/Electric";
import Psychic from "~/components/Card/CardBgSpecies/Psychic";
import Ice from "~/components/Card/CardBgSpecies/Ice";
import Dragon from "~/components/Card/CardBgSpecies/Dragon";
import Dark from "~/components/Card/CardBgSpecies/Dark";
import Fairy from "~/components/Card/CardBgSpecies/Fairy";
import Unknown from "~/components/Card/CardBgSpecies/Unknown";
import Shadow from "~/components/Card/CardBgSpecies/Shadow";
interface BackgroundSpeciesProps {
  type: PokemonTypes | string;
}

export default function CardBackgroundSpecies(props: BackgroundSpeciesProps) {
  switch (props.type) {
    case PokemonTypes.flying:
      return <Flying />;
    case PokemonTypes.fighting:
      return <Fighting />;
    case PokemonTypes.normal:
      return <Normal />;
    case PokemonTypes.poison:
      return <Poison />;
    case PokemonTypes.ground:
      return <Ground />;
    case PokemonTypes.rock:
      return <Rock />;
    case PokemonTypes.bug:
      return <Bug />;
    case PokemonTypes.ghost:
      return <Ghost />;
    case PokemonTypes.steel:
      return <Steel />;
    case PokemonTypes.fire:
      return <Fire />;
    case PokemonTypes.water:
      return <Water />;
    case PokemonTypes.grass:
      return <Grass />;
    case PokemonTypes.electric:
      return <Electric />;
    case PokemonTypes.psychic:
      return <Psychic />;
    case PokemonTypes.ice:
      return <Ice />;
    case PokemonTypes.dragon:
      return <Dragon />;
    case PokemonTypes.dark:
      return <Dark />;
    case PokemonTypes.fairy:
      return <Fairy />;
    case PokemonTypes.unknown:
      return <Unknown />;
    case PokemonTypes.shadow:
      return <Shadow />;
    default:
      return <BgLoading />;
  }
}
