import { PropsWithChildren, ReactEventHandler } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  id?: string;
  title?: string;
  onClick?: ReactEventHandler;
}

const DefaultButton = ({ id, children, onClick }: Props) => {
  return (
    <Default id={id} onClick={onClick}>
      {children}
    </Default>
  );
};

const IconButton = ({ id, title, onClick, children }: Props) => {
  return (
    <Icon id={id} onClick={onClick} title={title}>
      {children}
    </Icon>
  );
};

const Button = {
  Default: DefaultButton,
  Icon: IconButton,
};

export default Button;

const Default = styled.button`
  padding: 8px;
  font-size: 16px;
`;

const Icon = styled.button`
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  padding: 2px;
  border: none;
  &:hover {
    background-color: #aaa;
  }
`;
