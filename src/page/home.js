import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme.js';
import Header from '../components/Header.js';

const home = () => {
  const [inputValue, setInputValue] = useState('');
  const [answers, setAnswers] = useState([
    { nickname: '아빠', answer: '윤도현 - 사랑했나봐' },
    { nickname: '엄마', answer: 'YB - 흰수염고래' },
    { nickname: '아들', answer: '아빠 미안해...' },
    { nickname: '딸', answer: '윤도현 노래?' },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setAnswers([...answers, { nickname: '나', answer: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header title='퀴즈' /> <DateText>2024년 10월 5일 토요일</DateText>
        <QuestionBox>
          <QuestionLabel>문제</QuestionLabel>
          <QuestionText>아빠가 가장 좋아하는 노래는?</QuestionText>
        </QuestionBox>
        <AnswerBox>
          <AnswerLabel>답변</AnswerLabel>
          <AnswerList>
            {answers.map((answer, index) => (
              <AnswerItem key={index}>
                <Nickname>{answer.nickname}</Nickname>
                <AnswerText>{answer.answer}</AnswerText>
              </AnswerItem>
            ))}
          </AnswerList>
        </AnswerBox>
        <InputForm onSubmit={handleSubmit}>
          <InputField
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='입력'
          />
          <SubmitButton type='submit'>입력</SubmitButton>
        </InputForm>
      </Container>
    </ThemeProvider>
  );
};

export default home;

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const DateText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
`;

const QuestionBox = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

const QuestionLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green2};
  margin-bottom: 10px;
`;

const QuestionText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

const AnswerBox = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  overflow-y: auto;
`;

const AnswerLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green2};
  margin-bottom: 10px;
`;

const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.green4};
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
`;

const AnswerText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.green1};
  padding: 5px 15px;
  border-radius: 20px;
`;

const InputForm = styled.form`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  bottom: 0;
  padding: 15px;
`;

const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green1};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green2};
  }
`;
