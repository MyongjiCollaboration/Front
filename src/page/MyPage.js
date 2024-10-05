import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../img/Bottombar/Logo.svg';
import MyProfile from '../img/Bottombar/Myprofile.svg';
import Mydiary from '../img/Bottombar/Mydiary.svg';
import Profilechange from '../img/Bottombar/Profilechange.svg';
import Logout from '../img/Bottombar/Logout.svg';
import Dropout from '../img/Bottombar/Dropout.svg';
import Header from '../components/Header';

const MyPage = () => {
  return (
    <Container>
      <Header title='마이페이지' />
      <ProfileSection>
        <ProfileImage src={MyProfile} alt='프로필 이미지' />
        <ProfileText>
          <UserName>김명지</UserName>
          <FamilyCode>가족 이름(가족코드)</FamilyCode>
        </ProfileText>
      </ProfileSection>
      <MenuList>
        <MenuItem>
          <MenuIcon src={Mydiary} alt='내가 작성한 일기' />
          <MenuText>내가 작성한 일기</MenuText>
        </MenuItem>
        <MenuItem as={Link} to='/family-name-edit'>
          <MenuIcon src={Profilechange} alt='가족 이름 수정' />
          <MenuText>가족 이름 수정</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon src={Logout} alt='로그아웃' />
          <MenuText>로그아웃</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon src={Dropout} alt='회원 탈퇴' />
          <MenuText>회원 탈퇴</MenuText>
        </MenuItem>
      </MenuList>
      <Footer>
        <LogoImage src={Logo} alt='로고' />
        <FooterText>
          Developed By 멋쟁이사자처럼 대학교 12기
          <br />
          명지대 인문 X 자연 명지톤 4조
        </FooterText>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 16px;
`;

const ProfileText = styled.div`
  text-align: left;
`;

const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.green4};
`;

const FamilyCode = styled.p`
  font-size: 14px;
  color: #999;
  margin: 0;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  margin-top: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.green4};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background-color: #fff;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const MenuText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
  gap: 20px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  height: auto;
`;

const FooterText = styled.p`
  font-size: 15px;
  color: #666;
  margin: 0;
  text-align: left;
`;

export default MyPage;
