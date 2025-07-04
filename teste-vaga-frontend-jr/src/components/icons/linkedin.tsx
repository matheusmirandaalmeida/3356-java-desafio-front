import React from 'react';

interface LinkedinIconProps {
  className?: string;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = ({ className = '' }) => (
  <svg
    className={className}
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 8.5C18.0913 8.5 19.6174 9.13214 20.7426 10.2574C21.8679 11.3826 22.5 12.9087 22.5 14.5V21.5H18.5V14.5C18.5 13.9696 18.2893 13.4609 17.9142 13.0858C17.5391 12.7107 17.0304 12.5 16.5 12.5C15.9696 12.5 15.4609 12.7107 15.0858 13.0858C14.7107 13.4609 14.5 13.9696 14.5 14.5V21.5H10.5V14.5C10.5 12.9087 11.1321 11.3826 12.2574 10.2574C13.3826 9.13214 14.9087 8.5 16.5 8.5V8.5Z"
      stroke="#4A4A4A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 9.5H2.5V21.5H6.5V9.5Z"
      stroke="#4A4A4A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 6.5C5.60457 6.5 6.5 5.60457 6.5 4.5C6.5 3.39543 5.60457 2.5 4.5 2.5C3.39543 2.5 2.5 3.39543 2.5 4.5C2.5 5.60457 3.39543 6.5 4.5 6.5Z"
      stroke="#4A4A4A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinkedinIcon;
