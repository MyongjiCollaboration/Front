import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import InputFilled from '../components/InputFilled';
import BigButton from '../components/BigButton';
import { Axios } from '../api/Axios';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const schema = Yup.string().matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      '잘못된 아이디(이메일)입니다.'
    );
    schema
      .validate(value)
      .then(() => {
        setEmailError('');
        setIsEmailValid(true);
      })
      .catch((err) => {
        setEmailError(err.message);
        setIsEmailValid(false);
      });
  };

  const validatePassword = (value) => {
    const schema = Yup.string().matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})/,
      '잘못된 비밀번호입니다.'
    );
    schema
      .validate(value)
      .then(() => {
        setPasswordError('');
        setIsPasswordValid(true);
      })
      .catch((err) => {
        setPasswordError(err.message);
        setIsPasswordValid(false);
      });
  };

  const handleLogin = async () => {
    if (isEmailValid && isPasswordValid) {
      try {
        const response = await Axios.post(`/auth/login`, {
          email,
          password,
        });
        console.log('로그인 응답:', response.data);
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        navigate('/home');
      } catch (error) {
        console.error('로그인 실패', error);
      }
    }
  };

  return (
    <PageContainer>
      <FormBox>
        <Title>로그인</Title>
        <InputFilled
          placeholder='아이디(이메일)'
          type='text'
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
            if (value === '') {
              setEmailError('');
              setIsEmailValid(false);
            } else {
              validateEmail(value);
            }
          }}
          hint={emailError ? '' : '사용할 아이디(이메일)를 입력하시오.'}
          error={emailError}
        />
        <InputFilled
          placeholder='비밀번호'
          type='password'
          value={password}
          onChange={(e) => {
            const value = e.target.value;
            setPassword(value);
            if (value === '') {
              setPasswordError('');
              setIsPasswordValid(false);
            } else {
              validatePassword(value);
            }
          }}
          hint={
            passwordError ? '' : ' 8~14글자로 입력하시오.(영문, 숫자, 특수문자)'
          }
          error={passwordError}
        />
        <ButtonContainer>
          <BigButton
            disabled={!isEmailValid || !isPasswordValid}
            onClick={handleLogin}
          >
            로그인
          </BigButton>
        </ButtonContainer>
        <SignUp>
          처음 방문이신가요?
          <Link to='/auth/signin'>
            <SignUpLink> 회원가입</SignUpLink>
          </Link>
        </SignUp>
      </FormBox>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const FormBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 300px;
  margin-top: 10vh;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const SignUp = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const SignUpLink = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;

export default Login;
