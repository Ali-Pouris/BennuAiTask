import type { TNumberRange } from "../types/global";

export const translateRank = (rank: TNumberRange<2, 15>): string => {
  if (rank < 11) return rank.toString();
  if (rank === 11) return "J";
  if (rank === 12) return "Q";
  if (rank === 13) return "K";
  if (rank === 14) return "A";
  return "rank not valid!";
};
