

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseStyles = "rounded-lg font-medium transition duration-200";
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
