import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MyProfile from '../img/Bottombar/Myprofile.svg';
import Header from '../components/Header';

const Detail = () => {
  const [familyName, setFamilyName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateFamilyName = (name) => {
    const familyNameRegex = /^[가-힣]{3,10}$/; // 한글 3~10자, 특수문자 사용 불가
    if (name === '') {
      setErrorMessage(''); // 입력이 비어 있을 경우 에러 메시지 제거
    } else if (!familyNameRegex.test(name)) {
      setErrorMessage('한글 3~10자 이내(특수문자 사용 불가)');
    } else {
      setErrorMessage('');
    }
  };

  const handleSave = () => {
    if (errorMessage === '' && familyName.length > 0) {
      // 저장 로직 추가 (예: API 요청)
      console.log('Family Name Saved:', familyName);
      navigate('/mypage'); // 저장 후 마이페이지로 이동
    }
  };

  return (
    <Container>
      {/* <Header>
        <BackButton onClick={() => navigate('/mypage')}>&lt;</BackButton>
        <Title>가족 이름 수정</Title>
      </Header> */}
      <Header title='가족 이름 수정' />
      <ProfileSection>
        <ProfileImage src={MyProfile} alt='프로필 이미지' />
        <ProfileText>
          <UserName>김명지</UserName>
          <FamilyCode>가족 이름 (가족코드)</FamilyCode>
        </ProfileText>
      </ProfileSection>
      <FormContainer>
        <FormTitle>가족 이름 수정</FormTitle>
        <FormSubtitle>
          우리 가족을 대표할 이름을 입력해주세요. 예) 최씨네
        </FormSubtitle>
        <Input
          type='text'
          placeholder='한글 3~10자 이내(특수문자 사용 불가)'
          value={familyName}
          onChange={(e) => {
            const value = e.target.value;
            setFamilyName(value);
            validateFamilyName(value);
          }}
        />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <SaveText
          disabled={errorMessage !== '' || familyName === ''}
          onClick={handleSave}
        >
          저장
        </SaveText>
      </FormContainer>
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
  margin: 100px;
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

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.green3}
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red};
  margin: 0 0 10px;
`;

const SaveText = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green3};
  text-align: right;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
`;

export default Detail;
