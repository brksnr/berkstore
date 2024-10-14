import React from 'react';

const Buttons = ({ variant = 'primary', size = 'medium', label = 'Button' }) => {
  const baseClasses = "btn-base";
  const variantClasses = {
    primary: "btn-primary",
    transparent: "btn-transparent",
    roundedXL: "btn-roundedXL",
    transparentXL: "btn-transparentXL",
  };
  const sizeClasses = {
    small: "btn-small",
    medium: "btn-medium",
    large: "btn-large",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {label}
    </button>
  );
};

export default Buttons;
