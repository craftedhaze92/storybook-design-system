import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: () => void;
  placeholder: string;
  onChange: () => void;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  errorMessage,
  iconPath,
  onIconClick,
  onChange,
  placeholder,
  value,
  iconAlt,
  isError,
  id,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary "
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        text-primary
        border-b
        ${borderColor}
        `}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
