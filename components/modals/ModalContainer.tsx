import { useState, useEffect, ReactChild, ReactChildren } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const ContainerStyled = styled.div(tw`
    flex
    flex-col
    bg-gray-300
    rounded-xl
    max-w-xs
    sm:max-w-sm
    md:max-w-md
    lg:max-w-lg
    xl:max-w-xl
`);

export interface ModalContainerProps {
  children: JSX.Element | JSX.Element[] | undefined;
}
export default function ModalContainer(props: ModalContainerProps) {
  return <ContainerStyled>{props.children}</ContainerStyled>;
}
