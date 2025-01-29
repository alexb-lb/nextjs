import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;  // Add the onClick prop here
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;