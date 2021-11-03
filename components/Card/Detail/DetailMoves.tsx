import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import {
  DetailInfoItemTitle,
  DetailInfoContainer,
} from "~/components/Card/Detail";

const MovesStayled = styled.div(tw`
  flex 
  flex-wrap
  justify-center
  gap-1
  p-4 pt-1
`);

const Move = styled.div(tw`
  bg-gray-700
  text-white
  text-xs
  rounded-lg
  px-3
  py-1
`);

export default function DetailMoves() {
  return (
    <DetailInfoContainer>
      <DetailInfoItemTitle title="Moves" />
      <MovesStayled>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
        <Move>asdsd</Move>
      </MovesStayled>
    </DetailInfoContainer>
  );
}
