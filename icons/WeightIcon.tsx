import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 299.799 299.799"
      fill={props.color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M287.2,282.152l-31.829-177.579c-1.281-7.149-7.501-12.353-14.765-12.353h-52.935c9.925-9.776,16.093-23.357,16.093-38.356
	C203.764,24.163,179.601,0,149.9,0S96.035,24.163,96.035,53.864c0,14.999,6.168,28.58,16.093,38.356H59.193
	c-7.264,0-13.483,5.204-14.765,12.353L12.599,282.152c-0.783,4.372,0.41,8.866,3.261,12.272c2.85,3.406,7.063,5.374,11.504,5.374
	h245.071c4.441,0,8.654-1.968,11.504-5.374C286.789,291.018,287.983,286.524,287.2,282.152z M149.9,30
	c13.159,0,23.864,10.705,23.864,23.864c0,13.159-10.705,23.865-23.864,23.865c-13.159,0-23.865-10.706-23.865-23.865
	C126.035,40.705,136.741,30,149.9,30z M145.98,232.126c-0.781,1.44-2.289,2.337-3.927,2.337h-7.076c-1.586,0-3.054-0.841-3.856-2.21
	l-17.512-29.895L102.41,213.79v13.767c0,3.814-3.092,6.906-6.906,6.906c-3.814,0-6.906-3.092-6.906-6.906V172.96
	c0-3.814,3.092-6.906,6.906-6.906c3.814,0,6.906,3.092,6.906,6.906v23.471l26.579-28.932c0.846-0.921,2.04-1.445,3.29-1.445h6.073
	c1.794,0,3.413,1.072,4.114,2.723c0.7,1.651,0.345,3.561-0.901,4.85l-18.436,19.07l22.67,34.861
	C146.692,228.933,146.762,230.685,145.98,232.126z M214.023,223.016c0,1.358-0.62,2.648-1.681,3.495
	c-2.756,2.199-6.387,4.173-10.893,5.921c-5.492,2.131-11.053,3.196-16.683,3.196c-7.156,0-13.391-1.5-18.713-4.503
	c-5.318-3.001-9.317-7.294-11.992-12.879c-2.676-5.584-4.013-11.657-4.013-18.222c0-7.123,1.493-13.455,4.48-18.991
	c2.986-5.538,7.357-9.783,13.113-12.74c4.384-2.27,9.845-3.407,16.378-3.407c8.493,0,15.126,1.782,19.902,5.344
	c2.069,1.543,3.818,3.342,5.247,5.396c1.366,1.963,1.643,4.484,0.737,6.696c-0.906,2.213-2.871,3.818-5.222,4.258l-0.016,0.003
	c-2.754,0.515-5.546-0.705-7.037-3.077c-0.954-1.518-2.171-2.817-3.648-3.898c-2.661-1.944-5.982-2.916-9.963-2.916
	c-6.036,0-10.835,1.914-14.395,5.739c-3.562,3.828-5.343,9.505-5.343,17.033c0,8.12,1.803,14.209,5.413,18.269
	c3.608,4.059,8.336,6.089,14.186,6.089c2.892,0,5.793-0.567,8.702-1.703c2.907-1.136,5.404-2.513,7.489-4.129v-8.681h-10.055
	c-3.183,0-5.762-2.58-5.762-5.762c0-3.183,2.58-5.762,5.762-5.762h19.539c2.468,0,4.468,2.001,4.468,4.468V223.016z"
      />
    </svg>
  );
}