import React from 'react';
import styled from 'styled-components';

const Button00 = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button00;

const StyledButton = styled.button`
  padding: 15px;
  font-size: 15px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow1};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.yellow2};
    transform: translateY(0);
  }
`;
