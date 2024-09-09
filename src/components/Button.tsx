import { forwardRef, ReactNode } from "react";
import MaterialButton from "@mui/material/Button";

export type TButton = {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children?: ReactNode;
  onClickScript?: string;
};

export const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ size, variant, color, children, onClickScript }, ref) => {
    const handleClick = () => {
      if (onClickScript) {
        try {
          const func = new Function(onClickScript);
          func();
        } catch (error) {
          console.error("Error executing script:", error);
        }
      }
    };

    return (
      <MaterialButton
        ref={ref}
        size={size}
        variant={variant}
        color={color}
        onClick={handleClick}
      >
        {children}
      </MaterialButton>
    );
  }
);
