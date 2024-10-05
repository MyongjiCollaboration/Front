import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Header from '../components/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DiaryImage from '../img/Bottombar/Delete.svg';

const Diary = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaries, setDiaries] = useState({});
  const [newDiary, setNewDiary] = useState('');
  const [nickname, setNickname] = useState(''); // 닉네임 추가

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddDiary = () => {
    const dateString = selectedDate.toDateString();

    // 선택한 날짜의 기존 일기가 있으면 기존 배열에 추가, 없으면 새로운 배열 생성
    const updatedDiaries = diaries[dateString]
      ? [...diaries[dateString], { nickname, text: newDiary }]
      : [{ nickname, text: newDiary }];

    setDiaries({ ...diaries, [dateString]: updatedDiaries });
    setNewDiary(''); // 입력된 일기 내용 초기화
    setNickname(''); // 닉네임도 초기화
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (day === 0) {
        return 'sunday'; // 일요일 스타일
      } else if (day === 6) {
        return 'saturday'; // 토요일 스타일
      }
    }
    return null;
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header title='일기장' />
        <CalendarWrapper>
          <StyledCalendar
            onChange={handleDateChange}
            value={selectedDate}
            locale='ko-KR'
            tileClassName={tileClassName}
          />
        </CalendarWrapper>

        <SelectedDate>{selectedDate.toLocaleDateString()}</SelectedDate>

        {/* 선택한 날짜의 일기들이 있으면 출력 */}
        {diaries[selectedDate.toDateString()] && (
          <DiaryList>
            {diaries[selectedDate.toDateString()].map((diary, index) => (
              <DiaryCard key={index}>
                <DiaryContent>
                  <DiaryTitle>{diary.nickname}의 일기</DiaryTitle>
                  <DiaryText>{diary.text}</DiaryText>
                </DiaryContent>
              </DiaryCard>
            ))}
          </DiaryList>
        )}

        {/* 일기 추가 섹션 */}
        <AddDiaryWrapper>
          <NicknameInput
            type='text'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder='닉네임 입력'
          />
          <AddDiaryInput
            type='text'
            value={newDiary}
            onChange={(e) => setNewDiary(e.target.value)}
            placeholder='일기를 작성하세요'
          />
          <AddButton onClick={handleAddDiary}>+</AddButton>
        </AddDiaryWrapper>
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
  border: 1px solid ${({ theme }) => theme.colors.Black};
`;

const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 350px;
  border: none;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .react-calendar__tile {
    padding: 15px 0;
    text-align: center;
  }

  .react-calendar__tile--active {
    background-color: ${({ theme }) => theme.colors.green1};
    color: white;
    border-radius: 50%;
  }

  .sunday {
    color: ${({ theme }) => theme.colors.red};
  }

  .saturday {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const SelectedDate = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DiaryList = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const DiaryCard = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 10px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  margin-bottom: 10px;
`;

const DiaryContent = styled.div`
  flex: 1;
`;

const DiaryTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DiaryText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

const AddDiaryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const NicknameInput = styled.input`
  width: 20%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 5px;
  margin-right: 10px;
`;

const AddDiaryInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 5px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green1};
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
`;
