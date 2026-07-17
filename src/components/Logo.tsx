import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-11 sm:h-13" }: LogoProps) {
  return (
    <img
      src="/chennai-surprise-logo.png"
      alt="Chennai Surprise Logo"
      referrerPolicy="no-referrer"
      className={`${className} object-contain`}
    />
  );
}
