import tw from "twin.macro";
import styled from "@emotion/styled";
import BackpackIcon from "~/icons/BackpackIcon";
import { useRouter } from "next/router";

const BackpackButton = styled.div(tw`
fixed 
bottom-0 
right-0 
mb-2 mr-2 
md:mb-4 md:mr-4 
z-30 
bg-gradient-to-b
from-pokemon-red
via-pokemon-red
to-white

shadow-md 
ring-4
ring-gray-900
ring-opacity-75
rounded-full 
p-3
transition-all
hover:scale-110
cursor-pointer
`);
interface BackpackProps extends LinkProps {
  url: string;
  size?: string;
}
export default function Button(props: BackpackProps) {
  const router = useRouter();
  const linkClick = () => {
    router.push(props.url, props.url, { scroll: true });
  };
  return (
    <BackpackButton onClick={linkClick}>
      <BackpackIcon size={props.size || "36px"} />
    </BackpackButton>
  );
}
