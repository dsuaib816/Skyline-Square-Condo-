import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = 'font-medium uppercase tracking-wide rounded-sm transition-all duration-200 inline-block';

  const variants = {
    primary: 'bg-[#1C2529] text-[#FFFFFF] hover:bg-[#B49A70] hover:text-[#1C2529]',
    secondary: 'bg-[#B49A70] text-[#1C2529] hover:bg-[#1C2529] hover:text-[#FFFFFF]',
    outline: 'border-2 border-[#1C2529] text-[#1C2529] hover:bg-[#1C2529] hover:text-[#FFFFFF]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={finalClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}
