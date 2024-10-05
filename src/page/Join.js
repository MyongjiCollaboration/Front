import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import InputFilled from '../components/InputFilled';
import BigButton from '../components/BigButton';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [familyCode, setFamilyCode] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [familyCodeError, setFamilyCodeError] = useState('');

  const [emailSuccess, setEmailSuccess] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [nameSuccess, setNameSuccess] = useState('');
  const [familyCodeSuccess, setFamilyCodeSuccess] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isFamilyCodeValid, setIsFamilyCodeValid] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (value) => {
    const schema = Yup.string().matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      '잘못된 형식의 아이디(이메일)입니다.'
    );
    schema
      .validate(value)
      .then(() => {
        setEmailError('');
        setIsEmailValid(true);
        setEmailSuccess('올바른 형식의 아이디(이메일)입니다.');
      })
      .catch((err) => {
        setEmailError(err.message);
        setIsEmailValid(false);
        setEmailSuccess('');
      });
  };

  const validatePassword = (value) => {
    const schema = Yup.string().matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})/,
      '잘못된 형식의 비밀번호입니다.'
    );
    schema
      .validate(value)
      .then(() => {
        setPasswordError('');
        setIsPasswordValid(true);
        setPasswordSuccess('올바른 형식의 비밀번호입니다.');
      })
      .catch((err) => {
        setPasswordError(err.message);
        setIsPasswordValid(false);
        setPasswordSuccess('');
      });
  };

  // 닉네임 유효성 검사
  const validateName = (value) => {
    const schema = Yup.string().matches(
      /^[a-zA-Z가-힣]{3,10}$/,
      '사용할 닉네임(3~10자)을 입력하시오.(특수기호 사용불가)'
    );
    schema
      .validate(value)
      .then(() => {
        setNameError('');
        setIsNameValid(true);
        setNameSuccess('올바른 형식의 닉네임입니다.');
      })
      .catch((err) => {
        setNameError(err.message);
        setIsNameValid(false);
        setNameSuccess('');
      });
  };

  const validateFamilyCode = (value) => {
    const schema = Yup.string().required('가족코드를 입력하시오.');
    schema
      .validate(value)
      .then(() => {
        setFamilyCodeError('');
        setIsFamilyCodeValid(true);
        setFamilyCodeSuccess('가족코드가 입력되었습니다.');
      })
      .catch((err) => {
        setFamilyCodeError(err.message);
        setIsFamilyCodeValid(false);
        setFamilyCodeSuccess('');
      });
  };

  const handleSignup = () => {
    if (isEmailValid && isPasswordValid && isNameValid && isFamilyCodeValid) {
      navigate('/auth/login');
    }
  };

  return (
    <Container>
      <CenteredBox>
        <AllBox>
          <Title>회원가입</Title>
          <FormContainer>
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
                  setEmailSuccess('');
                } else {
                  validateEmail(value);
                }
              }}
              hint={emailError ? '' : '사용할 아이디(이메일)를 입력하시오.'}
              error={emailError}
              success={emailSuccess}
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
                  setPasswordSuccess('');
                } else {
                  validatePassword(value);
                }
              }}
              hint={
                passwordError
                  ? ''
                  : '영문, 숫자, 특수문자를 조합하여 8~14글자 미만으로 입력하시오.'
              }
              error={passwordError}
              success={passwordSuccess}
            />
            <InputFilled
              placeholder='닉네임'
              type='text'
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                setName(value);
                if (value === '') {
                  setNameError('');
                  setIsNameValid(false);
                  setNameSuccess('');
                } else {
                  validateName(value);
                }
              }}
              hint={
                nameError
                  ? ''
                  : '사용할 닉네임(3~10자)을 입력하시오.(특수기호 사용 불가)'
              }
              error={nameError}
              success={nameSuccess}
            />
            <InputFilled
              placeholder='가족코드'
              type='text'
              value={familyCode}
              onChange={(e) => {
                const value = e.target.value;
                setFamilyCode(value);
                if (value === '') {
                  setFamilyCodeError('');
                  setIsFamilyCodeValid(false);
                  setFamilyCodeSuccess('');
                } else {
                  validateFamilyCode(value);
                }
              }}
              hint={familyCodeError ? '' : '가족코드를 입력하시오.'}
              error={familyCodeError}
              success={familyCodeSuccess}
            />
            <ButtonContainer>
              <BigButton
                disabled={
                  !isEmailValid ||
                  !isPasswordValid ||
                  !isNameValid ||
                  !isFamilyCodeValid
                }
                onClick={handleSignup}
              >
                회원가입
              </BigButton>
            </ButtonContainer>
          </FormContainer>
        </AllBox>
      </CenteredBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AllBox = styled.div`
  width: 400px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default Join;
