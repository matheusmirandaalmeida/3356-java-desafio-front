// src/components/icons/GroupIcon.tsx

const GroupIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_group)">
      <path
        d="M22.6667 26V23.3333C22.6667 21.9188 21.7714 20.5613 20.3956 19.8985C19.0198 19.2357 17.3802 19.2357 16.0044 19.8985C14.6286 20.5613 13.7333 21.9188 13.7333 23.3333V26M11.3333 14.6667C9.45428 14.6667 7.99999 13.2124 7.99999 11.3333C7.99999 9.45428 9.45428 8 11.3333 8C13.2124 8 14.6667 9.45428 14.6667 11.3333C14.6667 13.2124 13.2124 14.6667 11.3333 14.6667ZM20.6667 14.6667C18.7876 14.6667 17.3333 13.2124 17.3333 11.3333C17.3333 9.45428 18.7876 8 20.6667 8C22.5457 8 24 9.45428 24 11.3333C24 13.2124 22.5457 14.6667 20.6667 14.6667ZM4 26V23.3333C4 20.3878 6.38781 18 9.33333 18H13.3333M18.6667 18H22.6667C25.6122 18 28 20.3878 28 23.3333V26"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_group">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default GroupIcon;