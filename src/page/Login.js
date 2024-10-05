import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import InputFilled from '../components/InputFilled';
import BigButton from '../components/BigButton';
import BottomNav from '../components/BottomNav';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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

  const handleLogin = () => {
    if (isEmailValid && isPasswordValid) {
      console.log('로그인 시도 - 이메일:', email, '비밀번호:', password);
    } else {
      console.log('로그인 조건이 만족되지 않았습니다.');
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
            passwordError
              ? ''
              : '영문, 숫자, 특수문자를 조합하여 8~14글자로 입력하시오.'
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
      <BottomNav />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
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
  max-width: 400px;
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
