import {
  ReactChild,
  ReactChildren,
  Fragment,
  useState,
  useEffect,
} from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import ModalBackDrop, { ModalProps } from "~/components/modals/ModalBackDrop";
import ModalContainer, {
  ModalContainerProps,
} from "~/components/modals/ModalContainer";

export default function Modal(props: ModalProps) {
  const [open, setOpen] = useState(props.open);
  useEffect(() => {
    setOpen(props.open);
  });
  return (
    <ModalBackDrop open={open} onClose={props.onClose}>
      <ModalContainer>{props.children}</ModalContainer>
    </ModalBackDrop>
  );
}

const Container = (props: ModalContainerProps) => (
  <Fragment>{props.children}</Fragment>
);

enum ModalType {
  normal = "normal",
  error = "error",
  warning = "warning",
  succes = "succes",
}
interface IModal {
  type?: ModalType | string;
}
const ModalHeader = styled.div<IModal>(({ type }) => [
  tw`py-1 px-3 text-lg font-bold text-gray-900`,
  type == ModalType.error && tw`text-red-600`,
  type == ModalType.warning && tw`text-yellow-400`,
  type == ModalType.succes && tw`text-blue-600`,
]);

const ModalContent = styled.div(() => [tw`py-2 px-3 text-sm text-gray-900`]);
const ModalFooter = styled.div(() => [
  tw`flex justify-end py-3 px-3 text-sm text-gray-900 gap-2`,
]);

export {
  ModalContainer,
  ModalBackDrop,
  Modal,
  ModalHeader,
  Container,
  ModalContent,
  ModalFooter,
};
