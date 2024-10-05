import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Header from '../components/Header';
import CalendarComponent from '../components/Calender.js';
import HeartIcon from '../img/Bottombar/heart.svg';
import BeenHeartIcon from '../img/Bottombar/beenheart.svg';

const Diary = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaries, setDiaries] = useState({});
  const [newDiary, setNewDiary] = useState('');
  const [nickname, setNickname] = useState('나');
  const [liked, setLiked] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddDiary = () => {
    const dateString = selectedDate.toDateString();

    const updatedDiaries = diaries[dateString]
      ? [...diaries[dateString], { nickname, text: newDiary }]
      : [{ nickname, text: newDiary }];

    setDiaries({ ...diaries, [dateString]: updatedDiaries });
    setNewDiary('');
    setNickname('나');
  };

  const toggleHeart = (index) => {
    setLiked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (day === 0) {
        return 'sunday';
      } else if (day === 6) {
        return 'saturday';
      }
    }
    return null;
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header title='일기장' />
        <CalendarWrapper>
          <CalendarComponent
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </CalendarWrapper>

        <SelectedDate>{selectedDate.toLocaleDateString()}</SelectedDate>

        {diaries[selectedDate.toDateString()] && (
          <DiaryList>
            {diaries[selectedDate.toDateString()].map((diary, index) => (
              <DiaryCard key={index}>
                <NicknameWrapper>{diary.nickname}</NicknameWrapper>
                <DiaryContent>
                  <DiaryText>{diary.text}</DiaryText>
                  <HeartIconWrapper onClick={() => toggleHeart(index)}>
                    <HeartIconImage
                      src={liked[index] ? BeenHeartIcon : HeartIcon}
                      alt='heart'
                    />
                  </HeartIconWrapper>
                </DiaryContent>
              </DiaryCard>
            ))}
          </DiaryList>
        )}

        <AddDiaryWrapper>
          <AddDiaryInput
            type='text'
            value={newDiary}
            onChange={(e) => setNewDiary(e.target.value)}
            placeholder='나의 일기를 추가해보세요.'
          />
          <AddButton onClick={handleAddDiary}>+</AddButton>
        </AddDiaryWrapper>
        {<BeenContainer></BeenContainer>}
      </Container>
    </ThemeProvider>
  );
};

export default Diary;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;

const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SelectedDate = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DiaryList = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DiaryCard = styled.div`
  display: flex;
  position: relative;
  max-width: 400px;
  height: 100px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  background: #ffffff;
  border: 1px solid #b1ceb0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const NicknameWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.green4};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 20px;
`;

const DiaryContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 0;
  margin-top: 10px;
`;

const DiaryText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  flex: 1;
  word-break: break-word;
`;

const HeartIconWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 10px;
`;

const HeartIconImage = styled.img`
  width: 30px;
  height: 30px;
`;

const AddDiaryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  background: #ffffff;
  border: 1px solid #b1ceb0;
  border-radius: 30px;
`;

const AddDiaryInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green2};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
`;

const BeenContainer = styled.div`
  margin-top: 20px;
`;
