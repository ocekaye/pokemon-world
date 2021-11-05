import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 330 330"
      fill={props.color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M165 330C255.981 330 330 255.98 330 164.999C330 74.019 255.981 0 165 0C74.019 0 0 74.019 0 164.999C0 255.98 74.019 330 165 330ZM165 30C239.44 30 300 90.561 300 164.999C300 239.438 239.44 300 165 300C90.56 300 30 239.438 30 164.999C30 90.561 90.561 30 165 30Z" />
      <path d="M144.394 235.605C150.251 241.462 159.749 241.462 165.607 235.605C171.465 229.748 171.465 220.25 165.607 214.392L131.212 179.997L235.002 179.991C243.286 179.991 250.002 173.274 250.001 164.99C250.001 156.706 243.284 149.991 235 149.991L131.216 149.997L165.608 115.604C171.466 109.747 171.466 100.249 165.608 94.391C162.679 91.462 158.841 89.997 155.002 89.997C151.163 89.997 147.324 91.462 144.396 94.391L84.396 154.392C81.58 157.207 80 161.021 80 165C80 168.979 81.581 172.794 84.394 175.606L144.394 235.605Z" />
    </svg>
  );
}
