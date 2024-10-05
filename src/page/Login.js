import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Theme from '../styles/Theme';
import BottomNav from './BottomNav.js';

const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email('유효한 이메일 주소를 입력하세요')
    .required('이메일은 필수 입력 사항입니다'),
  password: yup
    .string()
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
    .required('비밀번호는 필수 입력 사항입니다'),
});

const Login = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBrowseWithoutSignupClick = () => {
    navigate('/home');
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <LoginContainer>
          <LoginForm>
            <Title>로그인</Title>
            <Controller
              control={control}
              name='email'
              render={({ field }) => (
                <InputField
                  label='계정(이메일)'
                  id='email'
                  type='email'
                  error={errors.email}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <InputField
                  label='비밀번호'
                  id='password'
                  type='password'
                  error={errors.password}
                  {...field}
                />
              )}
            />
            <LoginButton type='submit'>로그인</LoginButton>
          </LoginForm>
          <ExtraLinks>
            <Link onClick={() => navigate('/signup')}>회원가입</Link>
            <Separator>|</Separator>
            <Link onClick={() => navigate('/findid')}>아이디 찾기</Link>
            <Separator>|</Separator>
            <Link onClick={() => navigate('/findPassword')}>비밀번호 찾기</Link>
          </ExtraLinks>
          <BrowseLink onClick={handleBrowseWithoutSignupClick}>
            회원가입 없이 둘러보기
          </BrowseLink>
        </LoginContainer>
        {isModalOpen && (
          <Modal>
            <p>{modalMessage}</p>
            <button onClick={handleModalClose}>확인</button>
          </Modal>
        )}
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
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  text-align: center;
  margin-top: 50px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.mainTitle};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.DarkBrown3};
`;

const ExtraLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

const Link = styled.a`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  flex: 1;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 5px;
`;

const BrowseLink = styled.a`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.DarkBrown3};
  text-decoration: none;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const LoginButton = styled.button`
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

const InputField = React.forwardRef(
  ({ label, id, type, error, prefix, as, ...rest }, ref) => (
    <InputContainer>
      <Label htmlFor={id} isEmpty={!label}>
        {label.split('(')[0] || '\u200B'}
        {label.includes('(') && (
          <GrayText>{`(${label.split('(')[1]}`}</GrayText>
        )}
      </Label>
      <InputWrapper>
        {prefix && <Prefix>{prefix}</Prefix>}
        <Input
          as={as}
          type={type}
          id={id}
          ref={ref}
          hasPrefix={!!prefix}
          {...rest}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
);

InputField.displayName = 'InputField';

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 11px;
`;

const GrayText = styled.span`
  padding-left: 3px;
  color: ${({ theme }) => theme.colors.gray2};
  font-weight: 400;
  font-size: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 4px;
  height: 57px;
`;

const Prefix = styled.span`
  font-size: 16px;
  color: blue;
  padding-left: 11px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 16px;
  border-radius: 4px;
  padding: 0 11px;
  border: none;
  flex: 1;
  height: 100%;
`;

const ErrorMessage = styled.span`
  color: blue;
  font-size: 12px;
  margin-top: 5px;
`;
