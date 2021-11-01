import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 612 612"
      fill={props.color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M286.363,607.148l195.851-325.636c7.954-13.225-1.571-30.069-17.003-30.069H334.436L479.335,30.732
		C487.998,17.537,478.532,0,462.748,0H237.426c-8.806,0-16.558,5.804-19.039,14.253l-90.655,308.81
		c-3.73,12.706,5.796,25.431,19.039,25.431h176.915l-55.512,251.4C265.75,610.872,280.57,616.781,286.363,607.148z"
      />
    </svg>
  );
}
