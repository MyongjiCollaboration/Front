import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarComponent = ({ onChange, value, tileClassName }) => {
  return (
    <StyledCalendar
      onChange={onChange}
      value={value}
      locale='ko-KR'
      tileClassName={tileClassName}
    />
  );
};

export default CalendarComponent;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 350px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 16px;
  }

  .react-calendar__tile {
    padding: 15px 0;
    text-align: center;
    font-size: 14px;
    border-radius: 50%;
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

  .react-calendar__tile--now {
    background-color: ${({ theme }) => theme.colors.green5};
    border-radius: 50%;
  }
`;
