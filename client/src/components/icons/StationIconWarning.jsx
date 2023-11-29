import React from 'react';

function StationIconWarning() {
  return (
    <svg
      className="station-icon station-icon--warning"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7.5" style={{ fill: 'rgb(255, 255, 255)' }}/>
      <path d="M7.5 14.1C3.9 14.1.9 11.2.9 7.5S3.8.9 7.5.9s6.6 2.9 6.6 6.6-3 6.6-6.6 6.6zm0 .9c4.1 0 7.5-3.4 7.5-7.5S11.6 0 7.5 0 0 3.4 0 7.5 3.4 15 7.5 15z" style={{ fill: 'rgb(0, 15, 159)' }}/>
      <path d="M6.6 10.3c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9zm.1-5.6c0-.5.3-.9.8-.9s.9.3.9.8v.2L8 8c0 .3-.3.5-.6.5-.2-.1-.4-.3-.4-.5l-.3-3.3z" style={{ fill: 'rgb(0, 15, 159)' }}/>
    </svg>
  );
}

export default StationIconWarning;
