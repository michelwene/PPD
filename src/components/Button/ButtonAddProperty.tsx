import React, { forwardRef, ForwardRefRenderFunction } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { onClick, children, ...rest },
  ref
) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex gap-4 px-4 py-4 items-center text-white bg-blue rounded-full hover:bg-blue-dark active:bg-navy-blue transition-all ease-in-out duration-200 ring-2 ring:inset active:ring-navy-blue"
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    </>
  );
};

export const ButtonAddProperty = forwardRef(buttonBase);
