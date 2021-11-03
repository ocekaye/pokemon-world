import { useState, useEffect, ReactChild, ReactChildren } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Modals = styled.div<ModalsProps>`
  ${tw`fixed flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-50 left-0 right-0 top-0 bottom-0`}
  ${({ open }) => (!open ? tw`hidden` : null)}
`;

interface ModalsProps {
  open: boolean;
}

interface ModalProps {
  open: boolean;
  onClose: Function;
  children: ReactChild | ReactChildren;
}
export default function ModalContainer(props: ModalProps) {
  const [open, setOpen] = useState(props.open);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  useEffect(() => {
    if (document)
      document.body.setAttribute(
        "style",
        `overflow:${open ? "hidden" : "auto"}`
      );
  }, [open]);
  const close = () => {
    if (props.onClose) props.onClose();
  };
  return (
    <Modals open={open} onClick={close}>
      {props.children}
    </Modals>
  );
}
