import React from 'react';
import caLogo from '../logo.jpg'; // adjust path depending on your file location

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={caLogo} 
        alt="CA India Logo" 
        className="h-12 w-auto object-contain" 
      />

      {showText && (
        <div className="ml-3">
          <h1 className="text-xl font-bold text-[#1B5E20] dark:text-[#1B5E20] leading-tight">
            Kamlesh Temani & Associates
          </h1>
        </div>
      )}
    </div>
  );
};

export default Logo;

