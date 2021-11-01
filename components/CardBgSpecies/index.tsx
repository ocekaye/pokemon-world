import { PokemonTypes } from "~/client/Pokemon";
import BgLoading from "~/components/CardBgSpecies/BgLoading";
import Normal from "~/components/CardBgSpecies/Normal";
import Flying from "~/components/CardBgSpecies/Flying";
import Fighting from "~/components/CardBgSpecies/Fighting";
import Poison from "~/components/CardBgSpecies/Poison";
import Ground from "~/components/CardBgSpecies/Ground";
import Rock from "~/components/CardBgSpecies/Rock";
import Bug from "~/components/CardBgSpecies/Bug";
import Ghost from "~/components/CardBgSpecies/Ghost";
import Steel from "~/components/CardBgSpecies/Steel";
import Fire from "~/components/CardBgSpecies/Fire";
import Water from "~/components/CardBgSpecies/Water";
import Grass from "~/components/CardBgSpecies/Grass";
import Electric from "~/components/CardBgSpecies/Electric";
import Psychic from "~/components/CardBgSpecies/Psychic";
import Ice from "~/components/CardBgSpecies/Ice";
import Dragon from "~/components/CardBgSpecies/Dragon";
import Dark from "~/components/CardBgSpecies/Dark";
import Fairy from "~/components/CardBgSpecies/Fairy";
import Unknown from "~/components/CardBgSpecies/Unknown";
import Shadow from "~/components/CardBgSpecies/Shadow";
interface BackgroundSpeciesProps {
  type: PokemonType;
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
      <Dark />;
    case PokemonTypes.fairy:
      <Fairy />;
    case PokemonTypes.unknown:
      return <Unknown />;
    case PokemonTypes.shadow:
      return <Shadow />;
    default:
      return <BgLoading />;
  }
}
