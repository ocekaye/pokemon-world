import { FC } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import BackIcon from "~/icons/BackIcon";

const BackStyled = styled.div(tw`
    h-9
    w-9
    bg-green-900 
    rounded-full
    p-1
    cursor-pointer
`);

interface IBackButton {
  onClick?: Function;
}
const BackButton: FC<IBackButton> = ({ onClick }) => (
  <BackStyled
    onClick={() => {
      onClick?.();
    }}
  >
    <BackIcon color="#FFF" />
  </BackStyled>
);
export default BackButton;
