import React from 'react';

interface TruckIconProps {
  className?: string;
}

const TruckIcon: React.FC<TruckIconProps> = ({ className = '' }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_1273)">
      <path
        d="M18.75 9.375H13.75V6.25H17.0769C17.2018 6.25 17.3238 6.28743 17.4272 6.35746C17.5307 6.42749 17.6108 6.5269 17.6572 6.64288L18.75 9.375Z"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 11.25H13.75"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6875 16.875C15.723 16.875 16.5625 16.0355 16.5625 15C16.5625 13.9645 15.723 13.125 14.6875 13.125C13.652 13.125 12.8125 13.9645 12.8125 15C12.8125 16.0355 13.652 16.875 14.6875 16.875Z"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M5.3125 16.875C6.34803 16.875 7.1875 16.0355 7.1875 15C7.1875 13.9645 6.34803 13.125 5.3125 13.125C4.27697 13.125 3.4375 13.9645 3.4375 15C3.4375 16.0355 4.27697 16.875 5.3125 16.875Z"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M12.8125 15H7.1875"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.4375 15H1.875C1.70924 15 1.55027 14.9342 1.43306 14.8169C1.31585 14.6997 1.25 14.5408 1.25 14.375V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H13.75V13.3762"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 13.3762V9.375H18.75V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H16.5625"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1273">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TruckIcon;