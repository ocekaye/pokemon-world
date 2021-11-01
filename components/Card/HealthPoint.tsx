import tw from "twin.macro";
import styled from "@emotion/styled";
import HeartIcon from "~/icons/HeartIcon";

const HealthPoint = styled.div(tw`
  flex w-full justify-start items-center pr-2 pl-2
`);

const HealtBarContainer = styled.div(tw`
  bg-gray-500 flex-grow h-4 ml-1 mr-1 rounded-md overflow-hidden relative
`);

interface HealtBarProps {
  curentHealth: number;
  maxHealth: number;
}
const HealtBarCurrent = styled.div<HealtBarProps>`
  ${tw`bg-gradient-to-r from-green-800 via-green-600 to-green-600 h-full`}
  ${({ curentHealth = 100, maxHealth = 100 }) =>
    `width: ${(curentHealth / maxHealth) * 100}%;`}
`;

const HealthText = styled.span`
  ${tw`text-white absolute top-0 left-0 bottom-0 right-0 font-bold w-full text-center`}
  font-size: 0.65rem;
`;

export default function () {
  return (
    <HealthPoint>
      <HeartIcon size="16px" color="#F00" />
      <HealtBarContainer>
        <HealtBarCurrent curentHealth={100} maxHealth={100} />
        <HealthText>100/100</HealthText>
      </HealtBarContainer>
    </HealthPoint>
  );
}
