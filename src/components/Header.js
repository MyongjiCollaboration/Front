import React from 'react';
import styled from 'styled-components';
import BackButtonIcon from '../img/Bottombar/BackButton.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <BackButton onClick={handleBack}>
        <BackButtonImage src={BackButtonIcon} alt='Back' />
      </BackButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  left: -20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const BackButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
