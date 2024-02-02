import { ReactEventHandler } from "react";
import styled from "styled-components";

interface Props {
  id?: string;
  children: any;
  onClick?: ReactEventHandler;
}

const Button = ({ id, children, onClick }: Props) => {
  return (
    <Default id={id} onClick={onClick}>
      {children}
    </Default>
  );
};

export default Button;

const Default = styled.button`
  padding: 8px;
  font-size: 16px;
`;
