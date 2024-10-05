import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BottomNav from './BottomNav.js';
import { Theme } from '../styles/Theme.js';

const Login = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        {/* <Header></Header> */}
        <LoginBox>
          <Title>로그인</Title>
          <InputBox>
            <InputLabel>아이디(이메일)</InputLabel>
            <InputField placeholder='사용하실 아이디(이메일)를 입력해주세요.' />
            <HelperText>
              영문, 숫자, 특수문자를 조합하여 8~14글자로 입력하여 주세요.
            </HelperText>
          </InputBox>
          <SignupText>
            처음 방문이신가요? <strong>회원가입</strong>
          </SignupText>
        </LoginBox>
        <BottomNav />
      </Container>
    </ThemeProvider>
  );
};

export default Login;

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.Black}; // 검은색 테두리 추가
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.green1};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.green1};
  border-radius: 5px;
  box-sizing: border-box;
`;

const HelperText = styled.p`
  font-size: ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 8px;
`;

const SignupText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  strong {
    font-weight: bold;
  }
`;
