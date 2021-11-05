import tw from "twin.macro";
import styled from "@emotion/styled";
import DeleteIcon from "~/icons/DeleteIcon";

const PokeContainer = styled.div`
  ${tw`absolute top-1 right-1 
  bg-gray-200 ring-1 ring-red-500 
  cursor-pointer rounded-full p-1
  shadow-md
  transition-all
  hover:scale-110
  `}
`;

interface DeleteButtonProps {
  onButtonClick?: Function;
}
export default function CardDeleteButton(props: DeleteButtonProps) {
  return (
    <PokeContainer
      onClick={() => {
        props.onButtonClick?.();
      }}
    >
      <DeleteIcon size="14px" color="red" />
    </PokeContainer>
  );
}
