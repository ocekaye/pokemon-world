import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 1000 1000"
      fill={props.color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M763.2,67.4h217.4L655.3,406.2H37L763.2,67.4z" />
        <path d="M10,414.3h653.3v77l-288.9,51.3v266l288.9,49.9v74.2H10v-76.9l257.8-45.9V546.6L10,495.3V414.3z" />
        <path d="M990,67.4L671.5,406.2v78.3l318.5-378V67.4z" />
        <path d="M254.3,656v133.6L46.5,831.4L254.3,656z" />
        <path d="M390.7,549.3v228.2l225.5-261.9L390.7,549.3z" />
        <path d="M632.3,508.8L397.4,792.3l257.8,39.2l325.3-594.7l-71.5-14.1L676.9,502.3L632.3,508.8z" />
        <path d="M990,251v16.2L683.6,905.6v-63.5L990,251z" />
      </g>
    </svg>
  );
}
