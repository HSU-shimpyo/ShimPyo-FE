import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import 'moment/locale/ko';
import EventSettingModal from './HospitalSearchModal';

export default function Calendar({display, setIsDayClick}) {
  useEffect(() => {
    moment.locale('ko');
  }, []);

  const startDay = moment().clone().startOf("month").startOf("week");
  const endDay = moment().clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  const handledDayClick = () => {
    setIsDayClick(true);
  };

  return (
    <MainLayout>

      <CalendarContainer display={display}>

      {/* 요일 */}
      <WeekDaysContainer>
        {weeks.map((day, dayIndex) => (
          <WeekDay key={dayIndex}>
            <WeekDayText>{day}</WeekDayText>
          </WeekDay>
        ))}
      </WeekDaysContainer>

      {/* 날짜 출력 */}
      {calendar.map((week, weekIndex) => (

        <WeekRow 
            key={weekIndex}
            bottomLine={weekIndex === calendar.length - 1 ? '#fff' :  '#E5E5EC' }
            >
          {week.map((date, dayIndex) => (
            <DayContainer key={dayIndex} onPress={handledDayClick}>
              <DayNumber>{date.format('D')}</DayNumber>
            </DayContainer>
          ))}
        </WeekRow>

      ))}

      </CalendarContainer>

    </MainLayout>
  );
}

const MainLayout = styled.View``;

const CalendarContainer = styled.View`
  flex-direction: column;
  display : ${({ display }) => display || 'flex'};
  justify-content : center;
  background-color : #fff;
  border-radius: 24px;
  width : 320px;
  height : 420px;
  padding : 0 20px;
  shadow-color: rgba(35, 48, 59, 0.04);
  shadow-offset: 0px 20px;
  shadow-opacity: 0.44;
  shadow-radius: 44px;
  margin-bottom : 20%;
`;

const WeekDaysContainer = styled.View`
  width : 280px;
  height : 40px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const WeekDay = styled.View`
  align-items: center;
  width : 40px;
  justify-content : center;
`;

const WeekDayText = styled.Text`
  font-size : 14px;
  font-weight : 400;
  color : #111;
`;

const WeekRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ bottomLine }) => bottomLine || '#E5E5EC'};
`;

const DayContainer = styled.TouchableOpacity`
  align-items: center;
  width : 40px;
  height : 58px;
`;

const DayNumber = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-top : 20%;
  color : #767676;
`;
