import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 32 32"
      fill={props.color || "#000"}
      stroke={props.color || "#000"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M20.8,20.8c4.3-4.3,4.3-11.3,0-15.6c-4.3-4.3-11.3-4.3-15.6,0c-4.3,4.3-4.3,11.3,0,15.6c2.1,2.1,5,3.2,7.8,3.2   S18.6,22.9,20.8,20.8z" />
        <path d="M18.9,24.6l4.5,4.5c0.9-0.4,1.8-0.9,2.6-1.6l-4.6-4.6C20.7,23.5,19.8,24.1,18.9,24.6z" />
        <path d="M13,26c-0.9,0-1.8-0.1-2.7-0.3c0.3,0.4,0.6,0.7,0.9,1.1c2.1,2.1,5,3.2,7.8,3.2c0.8,0,1.5-0.1,2.3-0.2l-4.3-4.4   C15.7,25.8,14.4,26,13,26z" />
        <path d="M26.8,11.2c-0.3-0.3-0.7-0.6-1.1-0.9c0.5,2.2,0.4,4.5-0.3,6.6l4.4,4.3C30.5,17.8,29.5,13.9,26.8,11.2z" />
        <path d="M22.9,21.4l4.6,4.6c0.7-0.8,1.2-1.7,1.6-2.6l-4.5-4.5C24.1,19.8,23.5,20.7,22.9,21.4z" />
      </g>
    </svg>
  );
}
