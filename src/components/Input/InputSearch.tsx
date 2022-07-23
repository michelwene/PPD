import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps {
  placeholder?: string;
  onClick?: () => void;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  placeholder,
  onClick,
  children,
  onChange,
}) => {
  return (
    <div className="max-w-[377px] shadow-lg rounded-full flex items-center justify-between p-4 gap-4">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="flex-1 text-lg p-2 border-r border-r-gray-light"
      />
      <div className="cursor-pointer" onClick={onClick} onKeyUp={onClick}>
        {children}
      </div>
    </div>
  );
};

export const InputSearch = forwardRef(InputBase);
