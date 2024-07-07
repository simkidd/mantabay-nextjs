import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  className,
  type,
}) => {
  const baseClasses = "px-4 py-2 font-semibold text-center rounded-[4px]";
  const variantClasses =
    variant === "solid"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "border border-blue-500 text-blue-500 hover:bg-blue-50";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
