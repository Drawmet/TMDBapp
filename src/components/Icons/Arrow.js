import React from 'react';

const Arrow = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    className="arrow"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M18.092 13.085l-9.456 9.456a1.54 1.54 0 1 1-2.178-2.178l8.367-8.367L6.458 3.63a1.54 1.54 0 0 1 2.178-2.178l9.457 9.456c.3.301.45.695.45 1.09 0 .393-.15.787-.45 1.088z"
    />
  </svg>
);

export default Arrow;
