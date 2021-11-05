import tw, { styled } from "twin.macro";

const Footer = styled.div(tw`
    flex flex-col 
    bg-gray-600
    bg-opacity-40
    p-4
    rounded-xl
    text-white
    justify-start
    items-center
    mx-4
    text-xs
`);

const Image = styled.img(tw`
    h-4
`);

const FooterItem = styled.div(
  tw`flex flex-wrap gap-2 gap-y-0 items-center justify-center`
);

const FooterLink = styled.a(tw`
flex items-center transition-all hover:scale-105 hover:text-blue-600
`);

export default function Information() {
  return (
    <Footer>
      <FooterItem>
        Source Code:{" "}
        <FooterLink href="https://github.com/ocekaye/pokemon-world">
          <Image src="/GitHub-Mark-Light-64px.png" /> Github
        </FooterLink>
      </FooterItem>

      <FooterItem>
        Framework:{" "}
        <FooterLink href="https://nextjs.org/">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" />{" "}
          Nextjs
        </FooterLink>
      </FooterItem>
      <FooterItem>
        Css Framework:{" "}
        <FooterLink href="https://tailwindcss.com">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />{" "}
          Tailwindcss
        </FooterLink>
      </FooterItem>
      <FooterItem>
        Icons from:{" "}
        <FooterLink href="https://www.svgrepo.com">
          https://www.svgrepo.com
        </FooterLink>
        <FooterLink href="https://www.iconfinder.com">
          https://www.iconfinder.com
        </FooterLink>
        <FooterLink href="https://freeicons.io">
          https://freeicons.io
        </FooterLink>
        <FooterLink href="https://www.onlinewebfonts.com">
          https://www.onlinewebfonts.com
        </FooterLink>
      </FooterItem>
    </Footer>
  );
}
