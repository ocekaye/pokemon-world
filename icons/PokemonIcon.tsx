import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M491.859 156.348C478.968 125.865 460.517 98.483 437.017 74.976C413.501 51.476 386.113 33.016 355.644 20.126C324.084 6.775 290.553 0.000999451 255.992 0.000999451C221.438 0.000999451 187.909 6.774 156.347 20.126C125.864 33.016 98.482 51.477 74.974 74.976C51.475 98.483 33.015 125.865 20.124 156.348C6.774 187.91 0 221.44 0 255.993C0 290.553 6.773 324.084 20.125 355.645C33.015 386.114 51.476 413.502 74.975 437.002C98.482 460.518 125.864 478.969 156.348 491.859C187.91 505.203 221.439 511.984 255.993 511.984C290.554 511.984 324.085 505.203 355.645 491.859C386.114 478.968 413.502 460.517 437.018 437.002C460.518 413.502 478.969 386.113 491.86 355.645C505.204 324.084 511.985 290.553 511.985 255.993C511.984 221.44 505.203 187.91 491.859 156.348Z"
        fill="#ED5564"
      />
      <path
        d="M0.10199 263.18C0.97699 295.194 7.69499 326.272 20.125 355.645C33.015 386.114 51.476 413.502 74.975 437.002C98.482 460.518 125.864 478.969 156.348 491.859C187.91 505.203 221.439 511.984 255.993 511.984C290.554 511.984 324.085 505.203 355.645 491.859C386.114 478.968 413.502 460.517 437.018 437.002C460.518 413.502 478.969 386.113 491.86 355.645C504.298 326.272 511.016 295.194 511.891 263.18H0.10199V263.18Z"
        fill="#E6E9ED"
      />
      <path
        d="M510.765 281.211C511.577 272.867 511.984 264.461 511.984 255.993C511.984 246.477 511.468 237.04 510.453 227.704C497.734 229.665 479.469 232.22 456.455 234.758C412.767 239.578 342.551 245.328 255.992 245.328C169.44 245.328 99.216 239.578 55.537 234.758C32.515 232.219 14.257 229.665 1.539 227.704C0.516 237.04 0 246.478 0 255.993C0 264.461 0.406 272.868 1.219 281.211C42.749 287.461 134.246 298.647 255.992 298.647C377.738 298.647 469.234 287.461 510.765 281.211Z"
        fill="#434A54"
      />
      <path
        d="M309.334 266.656C309.334 296.115 285.443 319.99 255.992 319.99C226.54 319.99 202.658 296.115 202.658 266.656C202.658 237.203 226.54 213.329 255.992 213.329C285.443 213.33 309.334 237.204 309.334 266.656Z"
        fill="#E6E9ED"
      />
      <path
        d="M255.992 170.66C203.056 170.66 159.995 213.729 159.995 266.657C159.995 319.585 203.057 362.645 255.992 362.645C308.927 362.645 351.988 319.584 351.988 266.657C351.988 213.729 308.928 170.66 255.992 170.66ZM255.992 309.335C232.47 309.335 213.329 290.179 213.329 266.657C213.329 243.134 232.469 223.994 255.992 223.994C279.523 223.994 298.646 243.134 298.646 266.657C298.646 290.178 279.523 309.335 255.992 309.335Z"
        fill="#434A54"
      />
      <path
        opacity="0.2"
        d="M491.859 156.348C478.968 125.865 460.517 98.483 437.017 74.976C413.501 51.476 386.113 33.016 355.644 20.126C324.084 6.775 290.553 0.000999451 255.992 0.000999451C252.422 0.000999451 248.867 0.0789994 245.328 0.219999C276.117 1.47 305.99 8.15 334.302 20.126C364.8 33.016 392.175 51.477 415.673 74.976C439.173 98.483 457.642 125.865 470.53 156.348C483.889 187.91 490.639 221.44 490.639 255.994C490.639 290.554 483.889 324.085 470.53 355.646C457.641 386.115 439.173 413.503 415.673 437.003C392.175 460.519 364.8 478.97 334.302 491.86C305.99 503.829 276.116 510.516 245.328 511.766C248.867 511.907 252.421 511.985 255.992 511.985C290.553 511.985 324.084 505.204 355.644 491.86C386.113 478.969 413.501 460.518 437.017 437.003C460.517 413.503 478.968 386.114 491.859 355.646C505.203 324.085 511.984 290.554 511.984 255.994C511.984 221.44 505.203 187.91 491.859 156.348Z"
        fill="white"
      />
      <path
        opacity="0.1"
        d="M20.125 355.645C33.015 386.114 51.476 413.502 74.975 437.002C98.482 460.518 125.864 478.969 156.348 491.859C187.91 505.203 221.439 511.984 255.993 511.984C259.563 511.984 263.118 511.906 266.657 511.765C235.868 510.515 205.987 503.827 177.675 491.859C147.192 478.968 119.818 460.517 96.311 437.002C72.804 413.502 54.351 386.113 41.453 355.645C28.101 324.085 21.336 290.554 21.336 255.993C21.336 221.439 28.101 187.909 41.452 156.347C54.35 125.864 72.803 98.481 96.31 74.983C119.817 51.476 147.191 33.015 177.674 20.125C205.986 8.149 235.867 1.469 266.656 0.218999C263.117 0.0789994 259.562 0.000999451 255.992 0.000999451C221.438 0.000999451 187.909 6.774 156.347 20.126C125.864 33.016 98.482 51.477 74.974 74.984C51.475 98.483 33.015 125.865 20.124 156.348C6.774 187.91 0 221.44 0 255.993C0 290.553 6.774 324.085 20.125 355.645Z"
        fill="black"
      />
    </svg>
  );
}