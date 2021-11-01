import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 981.25 981.25"
      fill={props.color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M946.23,206.651c-0.3-23-18-42-40.899-44.101c-190.3-17.8-345.601-119.5-396.8-156.7c-10.7-7.8-25.2-7.8-35.9,0
		c-51.1,37.2-206.4,138.9-396.7,156.7c-22.9,2.101-40.5,21.101-40.9,44.101c-2.3,150.1,21.8,659.699,444.1,773.1
		c7.5,2,15.4,2,22.9,0C924.331,866.451,948.43,356.75,946.23,206.651z"
      />
    </svg>
  );
}
