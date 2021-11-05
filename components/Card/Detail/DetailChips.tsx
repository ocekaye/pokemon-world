import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import {
  DetailInfoItemTitle,
  DetailInfoContainer,
} from "~/components/Card/Detail";

const ChipsStayled = styled.div(tw`
  flex 
  flex-wrap
  justify-center
  gap-1
  p-4 pt-1
`);

const Chip = styled.div<ChipItemProps>(({ type, clicked }) => [
  tw`
bg-gray-700
text-white
  text-xs
  rounded-lg
  px-3
  py-1
`,
  type == CHIP.ABILITY && tw`bg-green-400 text-gray-900`,
  type == CHIP.MOVE && tw`bg-gray-700 text-white`,
  clicked && tw`cursor-pointer`,
]);

enum CHIP {
  ABILITY,
  MOVE,
}

interface ChipItemProps {
  type: CHIP;
  clicked: Boolean;
}

interface ChipsProps {
  title: string;
  chipFor: CHIP;
  chips: string[];
  onChipClick?: Function;
}
export default function DetailChips(props: ChipsProps) {
  return (
    <DetailInfoContainer>
      <DetailInfoItemTitle title={props.title} />
      <ChipsStayled>
        {props.chips.map((chip) => (
          <Chip
            key={chip}
            clicked={!!props.onChipClick}
            type={props.chipFor}
            onClick={() => {
              props.onChipClick?.();
            }}
          >
            {chip}
          </Chip>
        ))}
      </ChipsStayled>
    </DetailInfoContainer>
  );
}

export { CHIP };
