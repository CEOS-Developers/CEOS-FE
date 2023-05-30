export const LargeArrowDown = ({ color }: { color: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4702 5.80471L8.47016 11.8047C8.34016 11.9347 8.16951 12 7.99885 12C7.82818 12 7.65753 11.9347 7.52753 11.8047L1.52753 5.80471C1.26686 5.54405 1.26686 5.12267 1.52753 4.862C1.7882 4.60134 2.20949 4.60134 2.47016 4.862L7.99885 10.3906L13.5275 4.862C13.7882 4.60134 14.2095 4.60134 14.4702 4.862C14.7308 5.12267 14.7308 5.54405 14.4702 5.80471Z"
        fill={color}
      />
    </svg>
  );
};

export const LargeArrowUp = ({ color }: { color: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4702 10.1953L8.47016 4.19529C8.34016 4.06529 8.16951 3.99998 7.99885 3.99998C7.82818 3.99998 7.65753 4.06529 7.52753 4.19529L1.52753 10.1953C1.26686 10.456 1.26686 10.8773 1.52753 11.138C1.7882 11.3987 2.20949 11.3987 2.47016 11.138L7.99885 5.60935L13.5275 11.138C13.7882 11.3987 14.2095 11.3987 14.4702 11.138C14.7308 10.8773 14.7308 10.456 14.4702 10.1953Z"
        fill={color}
      />
    </svg>
  );
};

export const SmallArrowDown = () => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2424 7.03558L13.0353 5.82848L7.12102 11.7427L1.20685 5.82855L-0.000252096 7.03565L7.12064 14.1565L8.20646 13.0707L8.20685 13.0711L14.2424 7.03558Z"
        fill="#31314E"
      />
    </svg>
  );
};

export const SmallArrowUp = () => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2424 10.9645L13.0353 12.1716L7.12102 6.2574L1.20685 12.1716L-0.000252096 10.9645L7.12064 3.84358L8.20646 4.9294L8.20685 4.92902L14.2424 10.9645Z"
        fill="#31314E"
      />
    </svg>
  );
};
