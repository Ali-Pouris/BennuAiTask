import type { CardSuitType } from "../../pages/home/components/CardComponent";

const suits: CardSuitType[] = ["heart", "club", "spade", "diamond"];

export const getRandomSuit = (): CardSuitType => {
  const index = Math.floor(Math.random() * suits.length);
  return suits[index];
};
