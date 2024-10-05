import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Header from '../components/Header';
import CalendarComponent from '../components/Calender.js';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddSchedule = () => {
    if (!newSchedule.trim()) return;
    const dateString = selectedDate.toLocaleDateString();
    const updatedSchedules = [
      ...schedules,
      { date: dateString, text: newSchedule },
    ];

    setSchedules(updatedSchedules);
    setNewSchedule('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSchedule();
    }
  };

  const filteredSchedules = schedules.filter(
    (schedule) => schedule.date === selectedDate.toLocaleDateString()
  );

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header title='일정' />
        <CalendarWrapper>
          <CalendarComponent onChange={handleDateChange} value={selectedDate} />
        </CalendarWrapper>

        <UpcomingTitle>
          {selectedDate.toLocaleDateString()}의 일정
        </UpcomingTitle>
        <ScheduleList>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((schedule, index) => (
              <ScheduleCard key={index}>
                <ScheduleText>{schedule.text}</ScheduleText>
              </ScheduleCard>
            ))
          ) : (
            <NoScheduleMessage>
              선택한 날짜에 일정이 없습니다.
            </NoScheduleMessage>
          )}
        </ScheduleList>

        <AddScheduleWrapper>
          <AddScheduleInput
            type='text'
            value={newSchedule}
            onChange={(e) => setNewSchedule(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='새로운 일정을 추가해보세요.'
          />
          <AddButton onClick={handleAddSchedule}>+</AddButton>
        </AddScheduleWrapper>

        <BeenContainer></BeenContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Schedule;

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

const UpcomingTitle = styled.h3`
  font-size: 18px;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.colors.black};
`;

const ScheduleList = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  overflow-y: auto;
`;

const ScheduleCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.green2};
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const ScheduleText = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;

const NoScheduleMessage = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 20px;
`;

const AddScheduleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddScheduleInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green2};
  color: white;
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
  margin: 30px;
`;
