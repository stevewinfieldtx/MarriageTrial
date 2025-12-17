import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", filled = false, style }) => {
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        ...style
      }}
    >
      {name}
    </span>
  );
};