import React from 'react';
import { BRAND } from '../../data/brand';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTaglineText?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showTaglineText = false,
  onClick,
}) => {
  // Height and container dimensions calibrated for crisp presentation of the official square brand asset
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12 sm:h-14 sm:w-14',
    lg: 'h-20 w-20 sm:h-24 sm:w-24',
    xl: 'h-32 w-32 sm:h-36 sm:w-36',
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${
        onClick ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      <div className={`relative ${sizeClasses} shrink-0 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]`}>
        <img
          src={BRAND.logoAsset}
          alt="ZYQUO — ENGINEERED FOR EXCELLENCE."
          className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,98,0.25)]"
          loading="eager"
        />
      </div>

      {showTaglineText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-[0.25em] text-white text-base sm:text-lg group-hover:text-[#D4AF62] transition-colors">
            {BRAND.name}
          </span>
          <span className="text-[9px] tracking-[0.22em] text-[#D4AF62] uppercase font-mono font-medium">
            {BRAND.tagline}
          </span>
        </div>
      )}
    </div>
  );
};
