import ClubIcon from "../../components/icons/ClubIcon";
import DiamondIcon from "../../components/icons/DiamondIcon";
import HeartIcon from "../../components/icons/HeartIcon";
import SpadeIcon from "../../components/icons/SpadeIcon";
import type { CardSuitType } from "../../pages/home/components/CardComponent";

export const translateSuit = (suitType: CardSuitType): any => {
  if (suitType === "heart") return <HeartIcon className="fill-red-500" />;
  if (suitType === "spade") return <SpadeIcon />;
  if (suitType === "diamond") return <DiamondIcon className="fill-red-500" />;
  if (suitType === "club") return <ClubIcon />;
  return "not found suit!";
};
