import { ButtonProps } from "@/interfaces/interfaces";
import React from "react";

const Button = ({ size, shape, children }: ButtonProps) => {
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };
  return size ? (
    <button
      className={`
        ${shape}
        ${sizeClasses[size]}
                bg-blue-500 hover:bg-blue-600 
        text-white font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500
        `}
    >
      {children}
    </button>
  ) : null;
};

export default Button;
