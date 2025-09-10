import { twMerge } from "tailwind-merge";
import Tilt from "react-parallax-tilt";
import AceIcon from "../../../components/icons/AceIcon";
import JackIcon from "../../../components/icons/JackIcon";
import KingIcon from "../../../components/icons/KingIcon";
import QueenIcon from "../../../components/icons/QueenIcon";
import { translateRank } from "../../../utils/functions/translateRank";
import { translateSuit } from "../../../utils/functions/translateSuit";
import type { TNumberRange } from "../../../utils/types/global";

export type CardSuitType = "heart" | "club" | "spade" | "diamond";

type CardComponentProps = {
  rank?: TNumberRange<2, 15>;
  suit?: CardSuitType;
};

const CardComponent = ({ rank = 2, suit = "club" }: CardComponentProps) => {
  let suitClassNames =
    (suit == "heart" || suit == "diamond") && "text-red-500 fill-red-500 ";
  let cardBorderClassNames =
    suit == "heart" || suit == "diamond"
      ? "border-red-100/0 group-hover:border-red-500"
      : "border-gray-100/0 group-hover:border-gray-500";

  return (
    <Tilt
      className={twMerge(
        `parallax-effect group flex h-56 w-40 items-center justify-center rounded-2xl bg-white fill-gray-800 text-gray-800 shadow-sm shadow-gray-800/10 select-none hover:shadow-xl`,
        suitClassNames,
      )}
      perspective={3000}
      glareEnable={false}
      glareMaxOpacity={0}
      scale={1.02}
    >
      <div className="parallax-effect-inner-element relative h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full p-2">
          <div
            className={twMerge(
              "relative h-full w-full rounded-2xl border-2",
              cardBorderClassNames,
            )}
          >
            <div
              className={twMerge(
                "absolute -top-[2px] -left-[2px] h-10 w-4 bg-white",
                rank === 10 && "w-5",
              )}
            ></div>
            <div
              className={twMerge(
                "absolute -right-[2px] -bottom-[2px] h-10 w-4 bg-white",
                rank === 10 && "w-5",
              )}
            ></div>
          </div>
        </div>
        <div className="absolute top-0 left-1 flex flex-col items-center justify-center pr-3 pb-3">
          <span>{translateRank(rank)}</span>
          <span className="text-[12px]">{translateSuit(suit)}</span>
        </div>
        <div className="absolute right-1 bottom-0 flex scale-x-[-1] scale-y-[-1] flex-col items-center justify-center pr-3 pb-3">
          <span>{translateRank(rank)}</span>
          <span className="text-[12px]">{translateSuit(suit)}</span>
        </div>
        {rank >= 11 && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-8xl font-semibold">
            <span className="relative group-hover:text-shadow-lg">
              {rank === 11 && <JackIcon />}
              {rank === 12 && <QueenIcon />}
              {rank === 13 && <KingIcon />}
              {rank === 14 && <AceIcon />}
            </span>
          </div>
        )}
        {rank == 2 && (
          <div className="flex h-full w-full flex-col items-center justify-between p-8 text-3xl">
            <span className="items-center justify-center">
              {translateSuit(suit)}
            </span>
            <span className="scale-x-[-1] scale-y-[-1] items-center justify-center">
              {translateSuit(suit)}
            </span>
          </div>
        )}
        {rank == 3 && (
          <div className="flex h-full w-full flex-col items-center justify-between p-8 text-3xl">
            <span className="items-center justify-center">
              {translateSuit(suit)}
            </span>
            <span className="items-center justify-center">
              {translateSuit(suit)}
            </span>
            <span className="scale-x-[-1] scale-y-[-1] items-center justify-center">
              {translateSuit(suit)}
            </span>
          </div>
        )}
        {rank == 4 && (
          <div className="flex h-full w-full flex-col items-center justify-between p-8 text-3xl">
            <div className="flex w-full flex-row justify-between">
              <span className="flex items-center justify-center text-center align-middle">
                {translateSuit(suit)}
              </span>
              <span className="flex items-center justify-center text-center align-middle">
                {translateSuit(suit)}
              </span>
            </div>
            <div className="flex w-full scale-x-[-1] scale-y-[-1] flex-row justify-between">
              <span className="flex items-center justify-center text-center align-middle">
                {translateSuit(suit)}
              </span>
              <span className="flex items-center justify-center text-center align-middle">
                {translateSuit(suit)}
              </span>
            </div>
          </div>
        )}
        {rank == 5 && (
          <div className="flex h-full w-full flex-col items-center justify-between p-8 text-3xl">
            <div className="flex w-full flex-row justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
            </div>
            <span>{translateSuit(suit)}</span>
            <div className="flex w-full scale-x-[-1] scale-y-[-1] flex-row justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
            </div>
          </div>
        )}
        {rank == 6 && (
          <div className="flex h-full w-full flex-row justify-between p-8 text-3xl">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
          </div>
        )}
        {rank == 7 && (
          <div className="flex h-full w-full flex-row justify-between p-8 text-3xl">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
              <span className="flex max-h-1/5 min-h-1/5 flex-1">
                {translateSuit(suit)}
              </span>
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
          </div>
        )}
        {rank == 8 && (
          <div className="flex h-full w-full flex-row justify-between p-8 text-3xl">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
              <span className="flex max-h-1/5 min-h-1/5 flex-1 items-center justify-center">
                {translateSuit(suit)}
              </span>
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
              <span className="flex max-h-1/5 min-h-1/5 flex-1 scale-x-[-1] scale-y-[-1] items-center justify-center">
                {translateSuit(suit)}
              </span>
              <i className="flex max-h-1/5 min-h-1/5 flex-1"></i>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
          </div>
        )}
        {rank == 9 && (
          <div className="flex h-full w-full flex-row justify-between p-8 text-3xl">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <span>{translateSuit(suit)}</span>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
          </div>
        )}
        {rank == 10 && (
          <div className="flex h-full w-full flex-row justify-between p-8 text-3xl">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <i className="flex max-h-1/6 min-h-1/6 flex-1"></i>
              <span className="flex max-h-1/6 min-h-1/6 flex-1 items-center justify-center">
                {translateSuit(suit)}
              </span>
              <i className="flex max-h-1/6 min-h-1/6 flex-1"></i>

              <i className="flex max-h-1/6 min-h-1/6 flex-1"></i>

              <span className="flex max-h-1/6 min-h-1/6 flex-1 scale-x-[-1] scale-y-[-1] items-center justify-center">
                {translateSuit(suit)}
              </span>
              <i className="flex max-h-1/6 min-h-1/6 flex-1"></i>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between">
              <span>{translateSuit(suit)}</span>
              <span>{translateSuit(suit)}</span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
              <span className="scale-x-[-1] scale-y-[-1]">
                {translateSuit(suit)}
              </span>
            </div>
          </div>
        )}
      </div>
    </Tilt>
  );
};

export default CardComponent;
