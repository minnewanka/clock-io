import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 3rem;
  margin: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.blue};
  //
  color: ${(props) => props.theme.colors.white};
  &:disabled {
    background-color: ${(props) => props.theme.colors.lightgrey};
  }
`;

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  label,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
