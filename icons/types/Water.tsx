import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 402.122 402.122"
      fill={props.color || "#000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M160.713,6.974c-6.931-6.021-23.389-15.699-26.083,9.367
				c-9.673,64.829-79.324,110.136-79.324,174.054c0,53.879,43.678,97.557,97.558,97.557c53.879,0,97.557-43.678,97.557-97.557
				C250.42,141.51,230.799,67.858,160.713,6.974z M114.707,242.138c-1.511,2.022-3.824,3.092-6.164,3.092
				c-1.584,0-3.181-0.489-4.554-1.505c-0.858-0.636-21.076-15.899-25.434-44.748c-4.357-28.843,15.175-55.873,16.009-57.01
				c2.51-3.423,7.322-4.166,10.748-1.652c3.42,2.51,4.162,7.314,1.659,10.739c-0.253,0.349-16.599,23.194-13.209,45.627
				c3.378,22.368,19.246,34.584,19.406,34.705C116.546,233.938,117.242,238.749,114.707,242.138z"
        />
        <path
          fill="#BFDBFE"
          d="M113.169,231.386c-0.16-0.121-16.028-12.337-19.406-34.705
				c-3.39-22.433,12.956-45.278,13.209-45.627c2.503-3.425,1.761-8.229-1.659-10.739c-3.426-2.513-8.238-1.771-10.748,1.652
				c-0.834,1.137-20.366,28.167-16.009,57.01c4.357,28.849,24.575,44.112,25.434,44.748c1.373,1.016,2.97,1.505,4.554,1.505
				c2.34,0,4.653-1.069,6.164-3.092C117.242,238.749,116.546,233.938,113.169,231.386z"
        />
        <path
          d="M295.623,241.773c-3.956-3.437-13.348-8.96-14.885,5.346c-5.52,36.996-45.27,62.852-45.27,99.328
				c0,30.748,24.927,55.675,55.676,55.675c30.747,0,55.672-24.927,55.672-55.675C346.816,318.55,335.619,276.518,295.623,241.773z
				 M269.368,375.976c-0.862,1.154-2.181,1.765-3.518,1.765c-0.903,0-1.815-0.279-2.599-0.859
				c-0.49-0.363-12.028-9.074-14.514-25.537c-2.486-16.46,8.66-31.886,9.135-32.534c1.433-1.954,4.18-2.377,6.134-0.943
				c1.952,1.433,2.376,4.174,0.948,6.128c-0.146,0.2-9.474,13.237-7.539,26.039c1.929,12.765,10.982,19.737,11.075,19.806
				C270.417,371.296,270.814,374.042,269.368,375.976z"
        />
        <path
          fill="#BFDBFE"
          d="M268.491,369.84c-0.093-0.069-9.146-7.041-11.075-19.806c-1.935-12.801,7.393-25.839,7.539-26.039
				c1.428-1.954,1.004-4.696-0.948-6.128c-1.954-1.434-4.701-1.011-6.134,0.943c-0.475,0.648-11.621,16.074-9.135,32.534
				c2.485,16.463,14.023,25.174,14.514,25.537c0.783,0.58,1.695,0.859,2.599,0.859c1.337,0,2.655-0.61,3.518-1.765
				C270.814,374.042,270.417,371.296,268.491,369.84z"
        />
      </g>
    </svg>
  );
}
