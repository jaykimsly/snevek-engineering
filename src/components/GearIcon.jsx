import React from 'react';

const GearIcon = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" /> {/* Gold */}
          <stop offset="40%" stopColor="#FFC107" /> {/* Amber */}
          <stop offset="70%" stopColor="#FF8C00" /> {/* Orange */}
          <stop offset="90%" stopColor="#FFFFFF" /> {/* White */}
        </linearGradient>
      </defs>
      
      {/* Main gear body */}
      <path 
        d="M50,20 L53,10 L47,10 L50,20 Z
           M50,80 L53,90 L47,90 L50,80 Z
           M20,50 L10,53 L10,47 L20,50 Z
           M80,50 L90,53 L90,47 L80,50 Z
           M26.5,26.5 L19.5,19.5 L15,24 L26.5,26.5 Z
           M73.5,73.5 L80.5,80.5 L85,76 L73.5,73.5 Z
           M26.5,73.5 L19.5,80.5 L24,85 L26.5,73.5 Z
           M73.5,26.5 L80.5,19.5 L76,15 L73.5,26.5 Z
           M50,25 C36.2,25 25,36.2 25,50 C25,63.8 36.2,75 50,75 C63.8,75 75,63.8 75,50 C75,36.2 63.8,25 50,25 Z
           M50,35 C41.7,35 35,41.7 35,50 C35,58.3 41.7,65 50,65 C58.3,65 65,58.3 65,50 C65,41.7 58.3,35 50,35 Z"
        fill="url(#gearGradient)"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default GearIcon;