import { IconProps } from "~/icons/index";

export default function Icon(props: IconProps) {
  return (
    <svg
      width={props.size || "100%"}
      height={props.size || "100%"}
      viewBox="0 0 132 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.0979 71.9075C69.1501 71.9965 69.1797 72.0983 69.177 72.2175C69.1503 72.1144 69.124 72.011 69.0979 71.9075ZM69.0979 71.9075C68.9633 71.678 68.6786 71.5339 68.4099 71.3979C68.3816 71.3835 68.3535 71.3693 68.3257 71.355C66.8921 70.6168 66.8882 70.6128 67.6968 69.2144C67.7473 69.1292 67.7929 69.0391 67.8397 68.9468C67.9557 68.7179 68.0784 68.4757 68.2984 68.2613C68.542 69.5127 68.7999 70.7236 69.0979 71.9075Z"
        fill="#070808"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.8726 113.171C51.271 112.765 50.732 112.984 50.2241 113.351C49.3047 114.021 48.3539 114.651 47.4032 115.28C44.9851 116.88 42.5677 118.48 40.6695 120.753C40.4116 121.062 40.1187 121.398 39.6695 121.199C39.3428 121.054 39.3621 120.751 39.3802 120.467C39.3846 120.398 39.389 120.329 39.3882 120.265C39.3742 119.413 39.3763 118.561 39.3785 117.597C39.3794 117.214 39.3804 116.812 39.3804 116.386C37.7843 117.36 36.2206 117.867 34.6982 118.36C34.2421 118.508 33.7898 118.654 33.3413 118.812C32.1187 119.246 31.9234 118.836 32.1148 117.738C32.2798 116.781 32.4294 115.821 32.5791 114.861C32.7837 113.549 32.9883 112.237 33.232 110.933C33.4468 109.781 33.2241 109.445 31.982 109.695C26.1773 110.863 20.2866 111.144 14.3843 111.265C14.2659 111.268 14.1339 111.289 13.9985 111.311C13.5619 111.381 13.0894 111.457 12.9195 110.941C12.7592 110.454 13.158 110.196 13.5445 109.945C13.648 109.878 13.7506 109.812 13.8413 109.742C15.5601 108.394 17.1968 106.961 18.7945 105.363C18.1476 104.999 17.531 104.988 16.9326 104.977C16.7865 104.975 16.6416 104.972 16.4976 104.964C15.365 104.902 14.2323 104.838 13.0995 104.774C9.09427 104.549 5.08771 104.324 1.08352 104.132C-0.186015 104.07 -0.186014 103.609 0.302267 102.64C2.63189 98.046 4.9394 93.4395 7.24624 88.8344L7.24935 88.8282C7.85024 87.6286 8.45109 86.4292 9.05227 85.23C9.28532 84.769 9.51508 84.3063 9.80015 83.7323C9.95467 83.4211 10.1254 83.0772 10.3218 82.6832C9.68948 82.9039 9.08249 83.117 8.49367 83.3238L8.48608 83.3265C6.92078 83.8762 5.48375 84.3808 4.04055 84.8628C3.88145 84.9159 3.70652 85.0043 3.5285 85.0944C3.05086 85.3359 2.55095 85.5886 2.27492 85.1988C1.90289 84.6779 2.35272 84.3081 2.77962 83.957C2.93542 83.8289 3.08817 83.7033 3.1968 83.5738C7.17727 78.8238 10.896 73.8707 14.521 68.8472C15.0718 68.0816 15.0054 67.4332 14.771 66.6246C14.2104 64.6566 13.6836 62.6773 13.1568 60.6982C12.1015 56.7337 11.0464 52.7698 9.72023 48.898C6.29836 38.9332 9.48586 30.5621 15.3999 22.7535C18.0445 19.2613 21.4273 16.4918 24.9898 13.98C30.9116 9.80035 36.9116 5.69488 43.6695 2.97613C51.0562 0.0112877 58.8101 -0.441837 66.6695 0.335507C66.6132 1.00724 66.1393 1.02024 65.7013 1.03226C65.6222 1.03443 65.5443 1.03657 65.4702 1.04254C64.8673 1.08891 64.2611 1.08261 63.6547 1.07631C63.3418 1.07305 63.0288 1.0698 62.7163 1.07379C55.8374 1.19098 49.0484 1.82379 42.6577 4.64801C40.0187 5.8141 37.5612 7.31649 35.106 8.81748C34.7484 9.03611 34.3908 9.2547 34.0327 9.47223C29.4234 12.2808 24.9585 15.3004 20.8843 18.8746C20.0054 19.6441 19.7359 20.4839 19.6655 21.605C19.1226 30.4332 21.107 38.8746 23.5132 47.2535C23.8112 48.2911 24.1053 49.3301 24.3995 50.3693C25.2891 53.5122 26.1792 56.6564 27.1773 59.7652C27.7437 61.523 27.8101 61.5308 29.396 60.4879C39.1304 54.0933 49.3843 48.773 60.5405 45.2886C67.2437 43.1949 74.0718 41.9254 81.1109 41.5582C85.107 41.3511 89.0991 41.2418 93.0835 41.3746C97.3648 41.5152 101.654 41.9019 105.748 43.3746C106.013 43.6493 106.315 43.5984 106.617 43.5476C106.804 43.516 106.991 43.4844 107.169 43.5308C107.274 44.1592 107.741 44.3347 108.227 44.5172C108.303 44.5457 108.379 44.5744 108.455 44.605C111.837 45.98 115.119 47.5582 118.084 49.7105C118.193 49.79 118.307 49.8699 118.423 49.9509C119.426 50.6537 120.552 51.4431 120.173 52.8511C119.844 54.0682 118.709 54.218 117.629 54.3606C117.378 54.3938 117.13 54.4265 116.896 54.4722C116.685 54.5129 116.472 54.5404 116.254 54.5683C115.782 54.629 115.291 54.6922 114.767 54.898C115.157 55.0674 115.549 55.2361 115.94 55.4049L115.941 55.4055C116.939 55.8361 117.938 56.2673 118.931 56.7105C119.473 56.9524 120.017 57.1925 120.561 57.4326L120.565 57.4344C122.346 58.221 124.13 59.0084 125.876 59.8668C127.392 60.6129 127.376 60.8824 126.439 62.1988C126.249 62.4681 125.995 62.7335 125.742 62.9985C125.169 63.5981 124.598 64.1962 124.763 64.8355C124.897 65.3604 125.626 65.7322 126.351 66.1022C126.663 66.261 126.973 66.4194 127.236 66.5894C128.501 67.4097 129.607 68.4019 130.615 69.5269C131.314 70.3043 131.349 70.8785 130.544 71.6597C129.305 72.8694 127.965 73.9532 126.624 75.0373C126.181 75.3956 125.738 75.7539 125.298 76.1168C124.775 76.5503 124.611 76.7496 125.275 77.2925C126.533 78.3199 126.459 78.7027 125.236 79.9058C121.533 83.5503 117.541 86.8628 113.474 90.0933C112.853 90.5855 112.482 91.0543 112.462 91.9293C112.412 94.0543 111.376 95.8472 110.201 97.5425C107.764 101.066 104.86 104.19 101.957 107.313C100.749 108.612 99.5422 109.911 98.3687 111.238C98.2729 111.347 98.1676 111.45 98.0601 111.555C97.7379 111.87 97.396 112.204 97.232 112.793C95.1546 114.695 90.7 118.7 89.5 119.5C88 120.5 85 121 84.5 121C84 121 80 120.5 78 120.203C76.4 119.965 70.6755 119.104 68.0132 118.703C66.0088 118.156 61.5 116.928 59.5 116.39L51.8726 113.171ZM91.0601 117.062C88.8023 119.222 86.1655 120.5 82.9429 120.203C78.5596 119.801 74.2387 118.995 69.918 118.189C69.2832 118.071 68.6483 117.953 68.0132 117.836C66.2161 117.502 64.4598 117.011 62.7039 116.52C61.3378 116.138 54.3845 113.308 53 113L51.4937 111.496C49.8179 110.222 48.4976 108.625 47.3062 106.906C46.2047 105.484 46.2045 105.484 44.7217 106.35L44.6734 106.378C40.7554 108.671 36.9077 108.718 33.2124 105.894C30.6187 103.918 28.3179 101.617 26.2945 99.0777C23.5523 95.6402 23.3843 91.98 25.5835 88.2105C26.6577 86.3668 28.1304 85.6558 30.2241 85.9839C31.8882 86.2457 33.2202 87.0386 34.1616 88.4566C34.3452 88.7325 34.5289 89.0084 34.7127 89.2842C35.6084 90.6289 36.5046 91.9741 37.3765 93.3355C37.6929 93.8238 38.0991 94.441 38.7945 94.1793C39.4631 93.9276 39.351 93.3121 39.2497 92.7559C39.2409 92.7077 39.2322 92.6599 39.2241 92.6128C39.1682 92.2943 39.1058 91.9766 39.0434 91.6589C38.9231 91.0456 38.8027 90.4322 38.728 89.8121C38.3434 87.1347 37.8066 84.4832 37.2696 81.8309C36.7216 79.1238 36.1734 76.416 35.7866 73.6793C35.5496 72.6647 35.6719 71.6589 35.7944 70.6512C35.8879 69.882 35.9815 69.1117 35.9155 68.3355C35.853 67.5738 36.4351 67.6441 36.9663 67.8355C38.4234 68.3628 39.9116 68.7261 41.4546 68.9449C42.1405 69.0427 42.8276 69.1352 43.5189 69.2282L43.5207 69.2284C45.3957 69.4807 47.3021 69.7373 49.3023 70.1168C47.8023 71.0699 46.9195 72.3277 46.0562 73.5972C45.8491 73.9332 45.6851 74.2886 45.689 74.6988C45.7241 75.023 45.814 75.3121 46.1812 75.4058C46.5886 75.2894 46.8223 74.9844 47.0563 74.6789C47.1836 74.5129 47.3109 74.3467 47.4663 74.2105C50.2476 70.2418 53.1499 69.5425 58.314 72.316C58.3953 72.3599 58.4748 72.408 58.5541 72.4561C58.8556 72.6388 59.1547 72.8201 59.5445 72.7613C59.9173 72.7131 59.8858 72.4055 59.8589 72.1426C59.8356 71.9152 59.8158 71.7211 60.064 71.7574C60.3207 71.7939 60.5871 71.8098 60.8551 71.8257C61.8188 71.883 62.8021 71.9414 63.4195 72.9683C63.6929 73.4136 64.1577 73.6128 64.5679 73.316C65.6187 72.5582 66.7241 72.7183 67.8765 72.9097C68.3609 72.9878 68.9624 73.0347 69.1421 72.4293C69.1645 72.353 69.1756 72.2826 69.177 72.2175C69.1503 72.1144 69.124 72.011 69.0979 71.9075C68.9633 71.678 68.6786 71.5339 68.4099 71.3979C68.3816 71.3835 68.3535 71.3693 68.3257 71.355C66.8921 70.6168 66.8882 70.6128 67.6968 69.2144C67.7473 69.1292 67.7929 69.0391 67.8397 68.9468C67.9557 68.7179 68.0784 68.4757 68.2984 68.2613C68.542 69.5127 68.7999 70.7236 69.0979 71.9075C69.1501 71.9965 69.1797 72.0983 69.177 72.2175C69.4225 73.1658 69.6954 74.0974 70.0093 75.0191C70.36 75.8355 70.6896 76.6603 71.019 77.4846C71.5958 78.9281 72.1721 80.3704 72.8609 81.7652C73.5562 83.1675 74.1812 83.2691 75.1577 82.0933C77.0445 79.8277 78.7827 77.4644 80.0991 74.8121C82.7165 69.7464 84.7647 64.4391 86.8133 59.1308C86.9905 58.6717 87.1677 58.2125 87.3452 57.7535C88.2124 55.5074 88.564 55.2457 91.0835 55.316C91.1702 55.3178 91.2643 55.3081 91.3599 55.2983C91.6741 55.266 92.0053 55.2319 92.146 55.5972C92.2449 55.859 92.0601 56.0731 91.8802 56.2815C91.8185 56.353 91.7574 56.4238 91.7085 56.4957C90.2763 58.5927 88.8107 60.6671 87.345 62.7415C86.0205 64.6162 84.6959 66.4909 83.396 68.3824C83.3518 68.4464 83.3065 68.5098 83.2613 68.5731C83.0748 68.8338 82.8889 69.0938 82.7788 69.4019C82.6304 69.8082 82.6304 70.1949 83.0249 70.4722C83.3843 70.7222 83.6851 70.5113 83.9741 70.3082C84.2728 70.0999 84.5297 69.8376 84.7883 69.5736C85.0777 69.2781 85.3693 68.9804 85.7241 68.7535C85.825 68.9235 85.8536 69.1189 85.8806 69.3044C85.9301 69.6433 85.9748 69.9493 86.4468 70.0074C87.1851 69.5644 87.4238 68.8381 87.6614 68.1153C87.7632 67.8055 87.8648 67.4964 88.0054 67.2105C90.228 62.6793 95.2007 61.6324 98.5679 65.0464C99.6187 66.1128 100.486 67.3238 100.943 68.7808C101.084 69.0621 101.236 69.3316 101.552 69.4566C102.084 69.5113 102.244 69.1988 102.259 68.7378C101.06 64.4527 98.3257 61.8746 93.771 61.2496C94.2211 60.7839 94.6825 60.3444 95.1379 59.9106C95.9393 59.1472 96.7221 58.4015 97.3921 57.5621C99.3491 55.1089 101.916 54.7496 104.767 55.0269C105.408 55.0933 105.814 55.3043 105.834 55.9996C105.898 58.3914 106.243 60.7503 106.589 63.11C106.749 64.1995 106.909 65.2892 107.041 66.3824C107.023 67.0757 107.133 67.7492 107.246 68.4302L107.275 68.6089C107.519 70.1241 107.87 71.6147 108.221 73.1057C108.464 74.1403 108.708 75.175 108.916 76.2183C109.244 77.8617 109.438 79.5276 109.632 81.191C109.896 83.4497 110.159 85.7036 110.755 87.8902C111.767 91.6207 111.025 94.7574 108.693 97.6949C106.923 99.9293 105.111 102.117 103.154 104.187C101.697 105.724 100.274 107.294 98.8516 108.863C96.319 111.657 93.7864 114.451 91.0601 117.062Z"
        fill="#070808"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.3882 0.694885C63.7944 0.33551 65.2905 1.03864 66.6694 0.33551C71.2319 0.46051 75.6851 1.34332 80.1108 2.35504C85.6187 3.61285 90.9976 5.29254 96.2007 7.52692C101.275 9.7066 104.181 13.4488 104.947 18.9371C105.802 25.0777 105.966 31.273 106.615 37.4293C106.826 39.4605 106.986 41.4957 107.169 43.5269C106.791 43.7457 106.568 44.5855 105.951 43.8277C106.072 41.4683 105.626 39.1519 105.408 36.8199C105.001 32.5035 104.779 28.1675 104.345 23.8472C104.115 21.5582 103.849 19.2886 103.326 17.0464C102.49 13.4839 100.353 10.9566 97.1733 9.35114C91.2397 6.36285 84.8765 4.61676 78.4312 3.19098C73.6499 2.13239 68.8179 1.35895 63.8921 1.35504C63.3335 1.35504 62.6499 1.46442 62.3882 0.694885Z"
        fill="#202221"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.3882 0.694885C67.2593 1.05035 72.1265 1.43317 76.9233 2.43317C83.2866 3.75739 89.4976 5.55426 95.521 8.03082C100.716 10.1714 103.607 13.9254 104.306 19.4996C105.017 25.148 105.224 30.8355 105.802 36.4879C106.013 38.5738 106.248 40.6558 106.435 42.7418C106.474 43.1519 106.841 43.7964 105.951 43.8277C101.548 42.3511 96.9741 41.9839 92.3765 41.7457C70.6968 40.6168 51.2046 47.1832 33.0952 58.6089C31.4937 59.6246 29.9038 60.6597 28.3413 61.7379C27.7085 62.1754 27.4468 62.1168 27.2202 61.355C24.4312 52.023 21.4663 42.7339 19.7827 33.1207C19.0562 28.9761 19.3335 24.7457 19.1499 20.5543C19.1304 20.0582 19.3062 19.6871 19.6733 19.3824C28.0757 12.3746 36.9077 6.02301 47.4194 2.53864C51.9468 1.03864 56.7241 0.753479 61.4937 0.761291C61.7905 0.761291 62.0913 0.718322 62.3882 0.694885Z"
        fill="#E3F2EF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.5992 115.789C56.4312 114.918 54.2476 114.086 52.2789 112.793C50.6421 111.152 48.8609 109.648 47.4351 107.793C47.2789 107.586 47.146 107.414 47.1304 107.16C44.689 101.875 42.5679 96.4254 39.1734 91.6285C38.8296 91.1402 38.857 90.4879 38.3882 90.0816C37.5171 84.5504 36.021 79.1324 35.4507 73.5504C35.2203 71.7847 35.4312 71.5152 37.0679 71.8277C39.6421 72.316 42.2281 72.7457 44.814 73.191C45.3453 73.2808 45.896 73.3707 46.275 73.8277C46.1656 74.1168 46.0562 74.4097 45.9429 74.6988C45.5992 76.3199 44.9234 77.8589 44.7554 79.5308C44.6968 80.0972 44.7164 80.5855 45.0054 81.066C45.4898 85.0347 46.7359 88.7886 48.275 92.4566C48.6578 93.3746 49.0367 94.3004 49.9507 94.8433C50.6929 95.5933 51.5484 94.9996 52.3414 95.0191C54.689 95.066 56.8843 94.1949 59.15 93.7496C59.646 93.6519 59.3492 93.2925 59.4312 93.0543C61.0796 91.73 61.3765 89.8589 61.4234 87.9371C61.5249 83.6441 61.5835 79.3472 60.271 75.1754C60.3218 74.9957 60.4312 74.8668 60.5992 74.7847C62.8609 74.6519 65.1109 74.9722 67.3726 74.8941C68.3453 74.8589 69.3374 74.6636 70.3062 74.9879C71.2749 77.2144 72.2398 79.441 73.2242 81.6597C73.8257 83.023 73.9937 83.0308 74.939 81.8238C76.7164 79.5543 78.4546 77.2574 79.8023 74.691C80.271 74.0504 80.8921 73.7261 81.6929 73.6519C83.2281 73.5074 84.7007 72.9332 86.271 73.0191C86.4312 73.0777 86.5523 73.1832 86.6421 73.3238C86.9351 76.8355 87.8843 80.2144 88.7242 83.6168C88.9859 84.6754 89.4703 85.4214 90.5601 85.6793C90.3374 86.3316 90.3374 86.3316 89.6187 86.2418C91.2789 86.48 92.9546 86.4058 94.5406 85.9019C96.0601 85.4175 97.5718 84.8824 99.0523 84.273C99.6265 84.0386 99.9898 83.7418 99.9624 83.0855C100.974 79.1089 101.314 75.0621 101.314 70.9761C101.314 70.4371 101.212 69.8746 101.541 69.3785C101.912 69.3277 102.072 69.1089 102.037 68.7418C101.97 68.5347 101.986 68.3043 102.154 68.1949C103.677 67.2496 105.24 66.3941 107.048 66.1285C107.189 66.1089 107.318 66.2379 107.435 66.3355C107.517 68.4996 108.111 70.5699 108.611 72.6558C109.99 78.3902 110.24 84.3199 111.587 90.0621C112.084 92.1949 111.431 94.1089 110.345 95.9136C109.369 97.5464 108.252 99.0894 106.978 100.492C102.236 105.695 97.4234 110.832 92.7085 116.054C89.1382 120.011 84.8921 121.339 79.6265 120.343C73.2085 119.132 66.7398 118.191 60.4507 116.355C59.8296 116.175 59.2164 115.976 58.5992 115.789Z"
        fill="#F1AB7A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.7437 59.7066C48.3921 49.7613 65.0757 42.9683 83.9351 42.5543C90.7983 42.4058 97.6265 42.4058 104.322 44.1519C109.162 45.4136 113.572 47.6129 117.662 50.4605C118.416 50.984 119.517 51.5816 119.283 52.5972C119.056 53.5855 117.818 53.4566 116.962 53.5777C115.927 53.7183 114.873 53.7769 113.826 53.7613C105.583 53.6207 97.3296 53.5699 89.1187 54.3043C79.8062 55.1363 70.5288 56.3355 61.8101 60.0465C57.5405 61.8629 53.3647 63.9019 48.978 65.4332C48.1929 65.6871 47.4233 65.691 46.6694 65.316C43.1187 63.5504 39.3101 62.5113 35.5757 61.2535C34.5757 60.9136 33.2671 60.9761 32.7437 59.7066Z"
        fill="#CD4C3F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.27494 103.226C0.767125 102.617 1.38041 102.211 1.59134 101.789C4.61869 95.6597 7.68509 89.5543 10.7242 83.4293C10.9312 83.0191 11.4429 82.5543 11.0015 82.0855C10.5874 81.648 10.064 82.0582 9.60697 82.2066C7.81791 82.7808 6.03275 83.3863 4.03275 83.7496C5.04447 82.4683 6.07181 81.2027 7.05619 79.9058C9.52494 76.6597 12.0796 73.4683 14.3921 70.1129C15.8218 68.0347 17.7749 66.9254 20.0093 66.148C22.2671 65.3589 24.5679 64.7066 26.8374 63.9605C27.8413 63.6324 28.7515 63.73 29.7046 64.1832C31.0054 64.8043 32.3492 65.3355 33.6851 65.8902C34.5093 66.2379 35.0132 66.7769 34.8531 67.73C34.0015 72.8199 35.2867 77.7066 36.2515 82.6285C36.814 85.4918 37.3062 88.3707 37.8921 91.6089C36.6421 90.3433 35.9038 89.1246 35.2124 87.9097C33.7632 85.3785 31.482 84.5425 28.7906 84.6597C26.2085 84.773 24.9273 86.6793 23.8648 88.7222C23.6382 89.1558 23.5952 89.6832 23.1929 90.0308C22.6343 90.5191 21.9195 90.566 21.2437 90.7261C17.857 91.5269 14.4546 92.2691 10.9234 93.6168C12.8179 94.1363 14.4312 94.6246 16.0445 95.1129C16.5484 95.2652 17.2281 95.3316 17.2632 96.0191C17.2906 96.6168 16.7046 96.7964 16.2515 96.9839C12.3648 98.5777 8.66556 100.519 5.17728 102.871C3.98197 103.679 2.60697 103.425 1.27494 103.226Z"
        fill="#243B41"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2749 103.226C3.22412 103.515 4.78272 102.761 6.36475 101.66C9.3999 99.5582 12.7358 97.9722 16.1694 96.6129C16.4897 96.4839 16.8335 96.4097 17.146 95.8668C14.7671 95.1636 12.439 94.4722 9.7085 93.6636C11.939 92.7457 13.8374 92.0972 15.7866 91.6441C18.2476 91.0738 20.6499 90.23 23.1929 90.0308C22.6538 92.7379 22.5444 95.4839 24.1226 97.8433C27.4585 102.82 31.3296 107.277 37.4272 109C39.9585 109.714 42.2593 108.781 44.4507 107.683C45.5796 107.117 46.2358 107.101 47.0054 108.238C47.8101 109.421 48.8726 110.437 49.8882 111.461C50.4741 112.05 50.4194 112.351 49.7437 112.816C46.7905 114.839 43.7749 116.781 41.0444 119.105C40.8257 119.289 40.6343 119.636 40.3062 119.484C39.9351 119.308 40.0249 118.894 39.9702 118.554C39.8218 117.597 40.4741 116.332 39.5679 115.73C38.5991 115.089 38.0874 116.605 37.1577 116.789C36.2866 116.957 35.4624 117.363 34.6108 117.636C33.1772 118.093 32.9233 117.918 33.0913 116.378C33.2554 114.902 33.5562 113.437 33.8022 111.972C33.8491 111.679 33.939 111.39 33.9624 111.093C34.1772 108.492 34.1694 108.468 31.5796 108.972C26.4429 109.984 21.2437 110.328 16.0249 110.402C15.603 110.406 15.146 110.554 14.7085 110.25C16.4038 108.687 18.0679 107.148 19.7437 105.617C20.5015 104.925 20.521 104.586 19.3726 104.359C17.3569 103.968 15.314 104.007 13.2944 103.867C9.61865 103.609 5.92725 103.613 2.24365 103.511C1.89209 103.5 1.53662 103.531 1.2749 103.226Z"
        fill="#19292D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8882 37.523C20.9585 41.6089 21.9898 45.7105 23.1148 49.7847C24.2046 53.7261 25.3414 57.6558 26.5679 61.5582C26.9664 62.8355 26.6812 63.3043 25.396 63.6324C22.4937 64.3668 19.6421 65.3121 16.9937 66.7379C16.0757 67.2339 15.646 67.2261 15.3335 66.0894C13.2203 58.4019 10.732 50.8043 9.27104 42.9488C8.70073 39.8746 8.88823 36.7925 10.2242 33.8785C10.8257 34.2261 11.4625 34.4722 12.15 34.6363C14.439 35.1636 16.6421 35.941 18.6578 37.1832C19.0367 37.4175 19.3921 37.7183 19.8882 37.523Z"
        fill="#8F352C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.0561 63.273C63.0561 60.4293 63.0288 60.3589 65.435 59.4605C69.4077 57.98 73.5522 57.1246 77.7241 56.4605C80.4194 56.0308 83.142 55.7613 85.8452 55.4058C87.3413 55.2144 86.9663 55.7964 86.685 56.5191C85.3022 60.0464 83.9428 63.5816 82.4702 67.066C81.1108 70.2769 79.7436 73.4918 77.9467 76.4996C77.0717 77.9644 75.8686 79.1714 74.9545 80.5972C74.3725 81.5035 73.9506 81.3316 73.5444 80.4214C71.7163 76.316 70.0991 72.148 69.353 67.6871C69.2436 67.0347 69.3452 66.023 68.685 65.8628C67.8686 65.6714 67.8295 66.7925 67.4389 67.3082C66.8999 68.0113 66.5991 68.8941 66.1342 69.6597C65.8647 70.1011 65.6108 70.6793 64.8803 70.4839C64.1694 70.2964 63.7514 69.8355 63.6889 69.1168C63.5209 67.0894 62.892 65.1089 63.0561 63.273Z"
        fill="#19292D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.3843 90.0816C40.2515 91.9878 41.3531 94.3941 42.646 96.6636C44.4156 99.7769 45.7164 103.125 47.0796 106.433C47.1656 106.644 47.1148 106.918 47.1304 107.16C46.4664 106.027 45.7945 106.105 44.6851 106.777C40.4429 109.347 36.3414 108.957 32.4781 105.843C30.0601 103.898 27.8687 101.722 25.9273 99.3043C23.1929 95.8902 22.9859 92.2144 25.0054 88.4019C26.9234 84.7925 31.7046 84.4722 34.1382 87.8121C35.4039 89.5425 36.4937 91.3941 37.6773 93.1832C37.9351 93.5738 38.1656 94.2105 38.7632 93.941C39.2867 93.7027 38.9429 93.1519 38.8648 92.73C38.7046 91.8472 38.5445 90.9644 38.3843 90.0816Z"
        fill="#A87756"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M109.251 72.0269C108.376 67.4918 107.505 62.9566 107.13 58.3472C107.068 57.5543 106.966 56.7652 106.857 55.98C106.712 54.9566 107.123 54.6988 108.158 54.5738C111.56 54.1715 114.501 55.4058 117.439 56.7965C119.919 57.9683 122.396 59.1402 124.931 60.1871C126.271 60.7418 126.263 61.3277 125.376 62.2652C124.97 62.6988 124.724 63.3004 124.275 63.6754C122.935 64.7925 123.584 65.4097 124.724 66.0738C126.052 66.8472 127.376 67.6519 128.615 68.566C130.794 70.1715 130.634 71.3746 128.154 72.6441C126.212 73.0113 124.279 72.5699 122.376 72.3863C118.974 72.0504 115.638 72.5777 112.271 72.6832C111.216 72.7144 110.064 73.1324 109.251 72.0269Z"
        fill="#243B41"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M109.251 72.0269C109.65 72.2535 110.08 72.3628 110.544 72.3277C113.017 72.1441 115.486 71.855 117.962 71.8042C121.38 71.73 124.798 71.8746 128.154 72.6441C127.349 73.8238 126.13 74.5347 125.025 75.3668C123.794 76.2964 122.775 77.3902 121.798 78.7378C122.623 78.9019 122.888 78.3277 123.216 77.98C123.833 77.3277 124.33 77.3472 124.97 77.9761C125.736 78.7261 125.126 79.1285 124.658 79.5347C120.916 82.7964 117.154 86.0347 113.419 89.3003C112.458 90.1402 112.267 89.4175 112.06 88.7027C111.291 86.0738 111.255 83.3238 110.763 80.648C110.236 77.7769 109.755 74.898 109.251 72.0269Z"
        fill="#19292D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107.435 66.3355C105.482 66.7964 103.666 67.5543 102.037 68.7418C100.681 64.4449 97.5522 61.9918 92.6616 61.6246C95.1968 59.2379 97.564 56.9879 99.9741 54.7847C100.22 54.566 100.732 54.5894 101.123 54.5816C102.466 54.5543 103.818 54.5816 105.166 54.5464C105.853 54.5269 106.158 54.773 106.181 55.4879C106.302 59.1363 106.97 62.7261 107.435 66.3355Z"
        fill="#A87756"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.8179 95.1714C49.314 95.1324 48.982 94.8238 48.7827 94.4058C46.7866 90.1675 45.0327 85.8472 44.7554 81.0855C44.7398 79.0269 44.9195 77.023 46.2827 75.3355C46.5796 74.9331 46.8726 74.5269 47.1656 74.1246C48.7788 73.4019 50.2945 73.6831 51.7476 74.5855C49.1499 78.941 50.689 83.4605 51.2866 87.9253C51.5054 89.5386 51.9077 91.1363 52.314 92.7222C52.857 94.8394 52.5952 95.148 50.4077 95.2456C50.2085 95.2574 50.0093 95.2144 49.8179 95.1714Z"
        fill="#F2F2F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8882 37.523C19.7007 37.6949 20.1812 38.6168 19.3413 38.0504C16.8101 36.3394 14.0171 35.3121 11.0132 34.8121C10.4741 34.7261 10.3101 34.3394 10.2241 33.8785C12.1304 29.0894 14.3687 24.5074 18.4507 20.6519C18.7593 26.4839 18.4546 32.0894 19.8882 37.523Z"
        fill="#CD4C3F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.541 69.3824C102.115 72.1949 101.576 74.9878 101.353 77.7808C101.201 79.6988 101.029 81.6206 100.22 83.4097C99.1851 84.5503 97.7281 84.8121 96.3531 85.1753C95.5874 85.3785 95.0757 84.8433 95.1695 84.0503C95.6265 80.1089 95.0562 76.1831 95.0132 72.2535C94.9664 71.0386 95.5835 70.3316 96.7242 70.0269C98.2203 69.6285 99.5289 68.6011 101.177 68.7105C101.298 68.9332 101.419 69.1558 101.541 69.3824Z"
        fill="#F2F2F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.7437 59.7066C34.7984 60.8629 37.1187 61.2886 39.3179 62.0464C41.814 62.9019 44.3414 63.6714 46.689 64.8902C47.4234 65.2691 48.1539 65.4996 48.9781 65.4332C45.6656 66.6519 42.3726 67.941 38.7242 67.2183C36.8374 66.8433 35.2476 65.7847 33.5132 65.0621C32.0874 64.4722 30.6851 63.8238 29.232 63.3082C28.1187 62.9136 28.2789 62.5504 29.1031 62.0308C30.3179 61.2613 31.5289 60.48 32.7437 59.7066Z"
        fill="#8F352C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.177 68.7105C99.6773 69.3004 98.2046 69.98 96.6656 70.4449C95.7437 70.7222 95.3843 71.1949 95.4 72.0816C94.6695 71.8746 94.8179 71.2339 94.7593 70.73C94.6031 69.3043 94.0953 68.0191 93.1851 66.9254C92.0132 65.5269 91.0953 65.6363 90.2125 67.2105C89.5406 68.4058 89.2593 69.7027 89.2398 71.0699C89.232 71.7496 89.3726 72.48 88.8453 73.0621C88.0679 73.3707 87.2906 73.6168 86.4625 73.2613L86.3414 73.1714C85.6343 72.0699 85.8765 70.9957 86.439 69.9332C87.3843 68.0308 87.9781 65.9761 89.6929 64.4683C92.314 62.1558 95.2164 61.855 97.9351 64.0543C99.4351 65.2691 100.888 66.605 101.177 68.7105Z"
        fill="#A9A9A9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.439 69.9332C86.4077 71.0113 86.3765 72.0933 86.3413 73.1714C84.7554 73.4879 83.1772 73.8707 81.5796 74.0855C80.9155 74.1714 80.3569 74.3785 79.8022 74.691C82.7593 68.6285 85.2437 62.3668 87.5522 56.0386C87.7671 55.4449 88.0327 55.1597 88.7046 55.1363C90.0913 55.0933 91.478 54.9488 92.8257 54.8472C93.0718 55.4527 92.689 55.7222 92.478 56.023C89.4819 60.3277 86.4702 64.6207 83.4624 68.9175C83.3491 69.0777 83.2241 69.2379 83.1108 69.4019C82.9038 69.7066 82.7163 70.0425 83.103 70.316C83.4194 70.5386 83.6733 70.273 83.8647 70.0543C84.5796 69.2339 85.2788 68.4019 86.0366 67.5152C86.8062 68.5582 85.6226 69.3082 86.439 69.9332Z"
        fill="#A77755"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.2749 73.8277C43.1967 73.316 40.0835 72.9371 37.0483 72.2301C35.5678 71.8863 35.4389 72.4449 35.4546 73.5504C35.1186 71.523 35.4663 69.5074 35.5327 67.4879C35.5483 67.109 35.7749 66.9488 36.1342 67.1011C40.5444 68.9996 45.3882 68.7535 50.3491 69.9683C48.4233 70.9332 47.396 72.4215 46.2749 73.8277Z"
        fill="#A87756"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.9741 65.5347C54.8804 63.8472 58.5132 62.2769 62.4155 60.5894C62.0132 63.7691 62.6577 66.7066 63.0913 69.8824C59.0054 68.4175 55.1343 67.0269 50.9741 65.5347Z"
        fill="#A77755"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.6382 74.6519C50.1733 74.2652 48.6851 74.0621 47.1655 74.1246C49.9312 69.4371 54.2983 69.4293 58.4937 71.9878C58.8335 72.1949 59.1577 72.4253 59.4897 72.648C60.4858 73.1441 60.8804 73.9019 60.5093 74.9918C60.4702 75.0308 60.4351 75.066 60.396 75.105C59.1226 75.7457 57.7788 75.4214 56.4624 75.3589C55.8726 75.3277 55.2866 75.1871 54.6929 75.1871C53.6694 75.0464 52.7124 74.5152 51.6382 74.6519Z"
        fill="#A9A9A9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.5092 74.9918C60.3881 74.1168 60.0209 73.3472 59.4897 72.648C60.0834 71.9761 58.9116 71.816 59.1186 71.1793C60.2241 71.3472 61.3413 71.5425 62.4663 71.6832C63.1225 71.7652 63.603 71.941 63.6772 72.7261C63.7241 73.2261 64.2592 73.5074 64.5092 73.1089C65.4077 71.6754 66.603 72.4371 67.7202 72.5113C68.1655 72.5425 68.8491 73.0113 68.9897 72.3238C69.1147 71.6949 68.31 71.7418 67.8803 71.5894C66.185 70.9839 66.185 70.9996 67.1147 69.4214C67.4897 68.7808 67.8569 68.1324 68.3647 67.2535C69.0483 69.9761 69.6772 72.4839 70.3061 74.9879C67.6459 75.6207 64.9624 75.273 62.2827 75.2027C61.6928 75.1871 61.0991 75.066 60.5092 74.9918Z"
        fill="#A77755"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.2046 71.0543C56.5601 70.0191 50.3062 69.0464 44.0522 68.0738C44.0444 67.941 44.0405 67.8121 44.0327 67.6793C46.8062 67.5777 49.1226 65.2535 52.2905 66.7183C55.396 68.1519 58.7358 69.0777 61.978 70.2144C62.353 70.3472 62.7007 70.4722 63.2046 71.0543Z"
        fill="#18282C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.4897 65.9683C88.9741 62.3941 91.4702 58.8277 93.9429 55.2457C94.228 54.8277 94.5562 54.6363 95.0522 54.6402C96.1851 54.6519 97.3257 54.6441 98.8022 54.6441C94.9038 58.9058 90.521 62.2418 86.4897 65.9683Z"
        fill="#18282C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.2866 75.3355C45.5014 77.1793 45.3843 79.1988 44.7554 81.0855C44.2632 80.941 44.2046 80.5543 44.271 80.1441C44.5718 78.2496 44.771 76.3238 45.9429 74.6988C46.0249 74.9293 45.9858 75.2222 46.2866 75.3355Z"
        fill="#453C36"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.3179 37.6988C58.2163 37.6871 53.1733 36.5699 48.7124 33.4331C46.5054 31.8824 44.8023 29.9058 43.6812 27.4253C43.2632 26.5074 43.3921 26.0621 44.4585 25.9097C46.7319 25.5933 48.9976 25.2144 51.2632 24.8433C51.9233 24.7339 52.4858 24.898 52.8452 25.441C55.5601 29.523 59.6929 30.5386 64.1968 30.5581C67.8804 30.5738 71.3023 29.5347 74.2593 27.2535C76.0796 25.8472 77.4507 24.0855 77.9546 21.7847C78.1265 20.9878 78.4663 20.5972 79.3101 20.4878C81.5405 20.2027 83.7593 19.8511 85.9741 19.4722C87.1616 19.2691 87.4663 19.6988 87.3023 20.8433C86.5015 26.5308 83.1851 30.4683 78.5132 33.4097C73.9663 36.2691 68.9077 37.4956 63.3179 37.6988Z"
        fill="#080D10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.1421 4.54645C73.4273 4.72223 79.0679 6.31598 83.5835 10.8433C84.8648 12.1363 85.8257 13.6402 86.5367 15.3199C86.8999 16.1714 86.7632 16.6011 85.7593 16.7379C83.4312 17.0621 81.1187 17.4527 78.8023 17.8394C78.2124 17.9332 77.7359 17.9293 77.4273 17.2886C75.9585 14.2379 73.2984 12.691 70.1773 12.0113C64.357 10.7457 59.0523 11.9175 54.5835 16.0152C53.1109 17.3668 52.1656 19.0855 52.0757 21.1363C52.0445 21.898 51.646 22.0347 51.0523 22.1246C48.8296 22.4566 46.607 22.8121 44.3843 23.1402C43.1539 23.3199 42.6773 22.8589 42.7867 21.566C43.1539 17.2339 45.2046 13.7808 48.4742 11.0425C53.8882 6.49957 60.3062 4.78473 67.1421 4.54645Z"
        fill="#0B161E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.3491 27.8824C62.2202 27.8589 60.396 27.4058 58.7671 26.3394C55.6147 24.273 55.1343 20.4879 57.646 17.6871C60.7007 14.273 67.1421 13.3394 71.0366 15.7457C74.5522 17.9175 75.0327 21.7418 72.1694 24.7496C70.3139 26.6949 67.271 27.8863 63.3491 27.8824Z"
        fill="#0C141A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.3843 74.9918C56.396 74.5621 58.3882 75.2496 60.396 75.105C61.5601 77.0425 61.689 79.2418 61.8218 81.3902C61.9742 83.8121 62.0288 86.2652 61.8101 88.6754C61.6538 90.3941 61.6929 92.4214 59.5562 93.2574C58.9156 93.9879 58.0796 94.1324 57.2632 93.7613C56.4976 93.4097 56.6773 92.5738 56.6577 91.8941C56.5601 88.3629 56.7749 84.8277 56.4273 81.2964C56.2398 79.4175 55.7398 77.6871 54.7124 76.105C54.4898 75.7652 54.3179 75.4136 54.3843 74.9918Z"
        fill="#F2F2F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.3843 74.9918C55.8569 76.648 56.5913 78.6089 56.8491 80.7925C57.2632 84.3082 57.1851 87.8394 57.2046 91.3668C57.2163 93.7808 57.2007 93.7808 59.5522 93.2574C59.8999 93.3941 60.3452 93.0347 60.7515 93.6324C59.3335 94.2613 57.8022 94.355 56.3921 94.8394C54.6187 95.4488 52.6929 95.3746 50.8296 95.5894C50.4312 95.6363 50.0288 95.6168 49.8179 95.1675C50.5249 94.5543 51.9663 95.3511 52.2163 94.23C52.3882 93.4488 51.8257 92.5191 51.6343 91.6441C50.7397 87.6129 49.8687 83.5777 49.8843 79.4214C49.8921 77.6324 50.3218 75.9722 51.6382 74.6519C52.6577 73.9136 53.5405 74.2964 54.3843 74.9918Z"
        fill="#1A1812"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.8725 72.9175C88.7632 70.9605 88.8374 69.0347 89.7046 67.2222C90.7436 65.0386 92.3374 64.9136 93.7632 66.8824C94.8921 68.441 95.0327 70.2925 95.3999 72.0816C95.6772 76.0074 95.8725 79.9332 95.5835 83.8668C95.5053 84.8902 95.8335 85.1363 96.7475 84.7691C97.9038 84.3121 99.06 83.8628 100.22 83.4097C100.498 83.8785 100.283 84.1285 99.8491 84.3199C96.56 85.7847 93.2592 87.1793 89.5249 86.6128C89.3452 86.5855 89.1772 86.4839 88.9507 86.398C89.4155 85.73 90.1342 86.2574 90.5952 85.898C89.7632 81.8707 88.9155 77.8472 88.5991 73.7339C88.5757 73.4293 88.6538 73.148 88.8725 72.9175Z"
        fill="#161410"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.3062 113.035C78.9858 113.003 78.6694 113.031 78.396 112.933C73.9819 111.386 70.0054 109.168 67.1694 105.316C66.0835 103.839 66.2437 103.543 68.0327 103.035C75.1929 101 82.353 98.9605 89.521 96.941C89.9663 96.816 90.4741 96.3941 90.9077 96.8824C91.2632 97.2847 90.9429 97.7457 90.8023 98.1519C89.4194 102.242 87.728 106.187 84.9937 109.585C83.5249 111.406 81.8257 112.937 79.3062 113.035Z"
        fill="#1B0E0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.8726 72.9175C89.2163 77.148 90.3218 81.2652 90.7905 85.48C90.814 85.7105 90.8335 85.8355 90.5952 85.898C89.2554 86.0308 88.6734 85.3355 88.4155 84.0855C87.6734 80.4918 86.2007 77.0347 86.4624 73.2574C87.2437 73.0035 88.0366 72.8043 88.8726 72.9175Z"
        fill="#F0F0EF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.1265 97.1558C63.2242 98.3629 62.0289 98.9058 61.0484 99.691C60.189 100.378 59.271 100.984 58.3921 101.644C57.5718 102.265 57.0562 102.3 56.9742 101.07C56.9039 99.98 56.7632 98.8902 56.6226 97.48C55.0054 98.898 53.5484 100.203 52.0562 101.468C51.6734 101.793 51.2398 102.636 50.7945 102.179C50.3062 101.671 51.1929 101.32 51.5367 100.992C53.0601 99.5464 54.6343 98.1597 56.1734 96.7339C56.9468 96.0152 57.3921 96.1363 57.5054 97.1988C57.5953 98.0425 57.6968 98.8902 57.7046 99.7379C57.7164 100.777 57.9976 101.003 58.8804 100.336C60.1578 99.3707 61.4742 98.4644 62.7828 97.5464C63.0914 97.3316 63.3648 96.9879 64.1265 97.1558Z"
        fill="#271C14"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.8257 87.0777C97.0015 89.0621 95.3648 90.8355 93.728 92.6129C93.4429 91.7613 93.9195 91.441 94.2515 91.0543C95.6148 89.4683 97.0015 87.8941 98.3687 86.3082C98.9976 85.5816 99.4273 85.6011 99.646 86.5972C99.9077 87.7613 100.158 88.9293 100.474 90.3785C102.318 88.7496 104.06 87.2105 105.806 85.6714C106.306 86.2535 105.896 86.4605 105.677 86.6636C104.115 88.1363 102.525 89.5738 100.974 91.0543C100.173 91.8199 99.8101 91.5777 99.6148 90.6011C99.396 89.5347 99.1421 88.48 98.8257 87.0777Z"
        fill="#241A12"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.4741 87.0269C85.3062 87.9918 86.1421 88.9527 86.9663 89.9214C87.0562 90.0269 87.1616 90.2496 87.1147 90.3199C86.3374 91.5074 85.9546 92.941 84.8687 93.9449C84.7241 93.1246 85.064 92.441 85.4351 91.8511C86.1421 90.7261 85.9507 89.8941 84.9819 89.0582C84.5249 88.6636 84.0288 88.2027 83.9233 87.5543C84.103 87.3785 84.2866 87.2027 84.4741 87.0269Z"
        fill="#291D15"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.7827 101.425C37.1109 101.089 36.2906 100.261 36.3179 97.8199C36.3296 96.5972 35.9234 95.7495 34.8882 95.0777C33.4273 94.1324 32.0484 93.062 30.6109 92.0699C29.1538 91.066 28.7554 91.2535 28.5562 92.9527C28.5171 93.2925 28.732 93.8863 28.1187 93.8277C27.7007 93.7886 27.8023 93.2847 27.8413 92.9449C27.9312 92.1714 27.7984 91.2691 28.6538 90.8238C29.4898 90.3902 30.2085 90.8941 30.8687 91.3199C32.4156 92.3277 33.9351 93.3745 35.4585 94.4136C36.4546 95.0933 37.2163 95.9331 37.021 97.2535C36.7476 99.066 37.4156 100.242 39.2202 100.734C39.4976 100.808 39.8023 100.937 39.7827 101.425Z"
        fill="#18110C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.0132 36.7808C57.9898 36.734 53.1382 35.6402 48.8804 32.5621C47.0718 31.2574 45.6499 29.609 44.6226 27.6129C44.2398 26.8668 44.353 26.5777 45.228 26.4683C47.1109 26.234 48.9819 25.9136 50.853 25.6168C51.4741 25.523 51.9624 25.5465 52.4038 26.1636C55.4507 30.4176 59.8882 31.6676 64.7827 31.4254C69.0171 31.2144 72.9038 29.8511 75.9741 26.6949C77.1812 25.4566 78.1382 24.0543 78.5484 22.3746C78.771 21.4683 79.2788 21.191 80.103 21.0816C81.8374 20.8472 83.5718 20.609 85.2827 20.2613C86.5288 20.0074 86.6499 20.5621 86.4663 21.5465C85.6929 25.6988 83.3609 28.8668 80.0991 31.3746C75.1109 35.2066 69.3452 36.7144 65.0132 36.7808Z"
        fill="#2C80C2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.8218 5.3394C72.6069 5.31597 77.8022 6.70659 82.1811 10.4917C83.6382 11.7535 84.7475 13.2691 85.5796 15.0074C85.896 15.6714 85.8218 15.9878 85.0366 16.105C83.0132 16.3941 80.9936 16.7261 78.9741 17.0542C78.521 17.1285 78.2163 16.9683 77.9663 16.5933C74.1811 10.9996 68.6733 10.1636 62.603 11.2027C59.3569 11.7574 56.4077 13.0933 54.0288 15.4917C52.6889 16.8394 51.7358 18.4019 51.396 20.2691C51.2397 21.1167 50.8452 21.4371 50.0483 21.5425C48.2671 21.7808 46.478 22.0074 44.7202 22.3746C43.5522 22.6167 43.4663 22.1324 43.5757 21.2066C44.1147 16.7496 46.478 13.3941 49.9702 10.7886C54.9858 7.05034 60.7319 5.4644 65.8218 5.3394Z"
        fill="#2C80C2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.5132 27.0308C62.3882 26.8863 60.4156 26.6285 58.7671 25.3199C56.5952 23.605 56.2007 21.1129 57.7202 18.816C60.3218 14.8863 67.8765 13.8394 71.4273 16.9136C73.6577 18.8511 73.9234 21.3355 72.0874 23.6597C70.1304 26.1402 67.357 26.8004 64.5132 27.0308Z"
        fill="#2C80C2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.4819 90.4019C56.4819 90.9996 56.4858 91.5933 56.4819 92.191C56.4663 94.0503 55.5835 94.773 53.7124 94.5269C53.1342 94.4488 52.9936 94.0933 52.8881 93.6402C52.5249 92.0933 52.2006 90.5347 51.7944 89.0035C51.5171 87.9761 51.9272 87.4253 52.8217 87.0152C53.6694 86.6285 54.5678 86.6402 55.4428 86.5777C56.0444 86.5347 56.4702 86.8589 56.4546 87.5738C56.435 88.5152 56.4506 89.4605 56.4506 90.4019"
        fill="#C76134"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.6578 77.3629C54.5093 77.8902 54.3374 78.5621 54.1304 79.2222C53.8921 79.9957 53.6382 80.8316 52.5796 80.6832C51.646 80.5543 50.6382 79.1363 50.8296 78.2457C50.9624 77.6168 51.1695 76.9879 51.4468 76.4097C51.7632 75.7379 52.1578 74.9371 53.0796 75.2144C53.9898 75.484 54.5562 76.191 54.6578 77.3629Z"
        fill="#F8F3F7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94.8647 81.7339C94.8647 82.5308 94.8179 83.3316 94.8725 84.1246C94.9585 85.3043 94.4975 85.7886 93.2749 85.8629C92.189 85.9332 91.6225 85.7769 91.478 84.5582C91.2827 82.8824 90.8452 81.2339 90.6147 79.5621C90.4233 78.1324 90.9897 77.6168 92.6382 77.4957C94.0483 77.3902 94.8921 78.0582 94.9311 79.3472C94.9507 80.1402 94.935 80.9371 94.935 81.7339"
        fill="#C76135"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M93.9898 69.9839C93.7788 70.8043 93.6499 71.8863 92.3101 71.9136C91.2983 71.9371 89.9976 70.1871 90.0366 68.9488C90.0405 68.8511 90.0366 68.7418 90.0679 68.6519C90.4116 67.7378 90.5366 66.5855 91.7437 66.4097C92.5796 66.2886 94.0171 68.5855 93.9898 69.9839Z"
        fill="#ADA9AC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.2319 112.289C78.9546 112.246 78.6382 112.253 78.3647 112.152C74.3179 110.671 70.6577 108.625 67.9077 105.191C67.1382 104.23 67.4624 103.914 68.5054 103.628C73.6147 102.234 78.7046 100.781 83.8062 99.3667C85.2476 98.9644 87.6069 100.035 88.3452 101.324C88.5718 101.718 88.3843 102 88.2515 102.3C87.0991 104.91 85.8218 107.457 83.9272 109.625C82.6851 111.043 81.271 112.203 79.2319 112.289Z"
        fill="#EA7373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.1968 98.8003C86.8179 98.5777 87.271 98.3433 87.7476 98.2613C88.4194 98.148 89.3218 97.48 89.6929 97.9644C90.1538 98.5738 89.4116 99.4097 89.1733 100.14C88.9663 100.765 88.6147 100.777 88.2124 100.3C87.6968 99.6871 87.0054 99.2964 86.1968 98.8003Z"
        fill="#850F14"
      />
    </svg>
  );
}