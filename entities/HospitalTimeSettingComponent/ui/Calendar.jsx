import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import { Text } from 'react-native'
import 'moment/locale/ko';

export default function Calendar({ display, setIsDayClick, setYear, setMonth, setDay, reservationList, setIsReservedDayClick }) {
  useEffect(() => {
    moment.locale('ko');
    //console.log(reservationList);
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

  const handledDayClick = (date) => {
    setIsDayClick(true);

    // 년, 월, 일 추출
    const selectedYear = date.year();
    const selectedMonth = date.month() + 1; // moment.js에서 month()는 0부터 시작하므로 +1
    const selectedDay = date.date();

    // 상태 업데이트
    setYear(selectedYear);
    setMonth(selectedMonth);
    setDay(selectedDay);
  };

  const handledReservedDayClick = (date) => {
    // 년, 월, 일 추출
    const selectedYear = date.year();
    const selectedMonth = date.month() + 1; // moment.js에서 month()는 0부터 시작하므로 +1
    const selectedDay = date.date();

    // 상태 업데이트
    setYear(selectedYear);
    setMonth(selectedMonth);
    setDay(selectedDay);
    setIsReservedDayClick(true)
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

        {calendar.map((week, weekIndex) => (
          <WeekRow
            key={weekIndex}
            bottomLine={weekIndex === calendar.length - 1 ? '#fff' : '#E5E5EC'}
          >
            {week.map((date, dayIndex) => {
              // 해당 날짜에 예약이 있는지 확인
              const reservationForDay = reservationList.find((reservation) => {
                // 예약 날짜와 캘린더 날짜가 같은지 비교
                return (
                  reservation.year === date.year() &&
                  reservation.month === date.month() + 1 && // moment의 month()는 0부터 시작하므로 +1
                  reservation.day === date.date()
                );
              });

              return reservationForDay ? (
                <DayContainer
                  key={dayIndex}
                  onPress={() => handledReservedDayClick(date)}
                  backgroundColor='#E5E9FA'
                  marginBottom='10px'
                  justifyContent="space-between"
                >
                  <DayNumber color='#111'>
                    {date.format('D')}
                  </DayNumber>
                  <TimeText>{`${reservationForDay.hour}:${reservationForDay.minute}`}</TimeText>
                </DayContainer>
              ) : (
                <DayContainer
                  key={dayIndex}
                  onPress={() => handledDayClick(date)}
                  backgroundColor='#fff'
                  marginBottom='0px'
                >
                  <DayNumber>{date.format('D')}</DayNumber>
                </DayContainer>
              );
            })}
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
  background-color : ${({ backgroundColor }) => backgroundColor || '#fff'};
  border-radius : 8px;
  margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
  align-items: center;
  width : 40px;
  height : 58px;
  justify-content :  ${({ justifyContent }) => justifyContent || 'none'};
`;

const DayNumber = styled.Text`
  font-size: ${({ fontSize }) => fontSize || '12px'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  margin-top : 20%;
  color : ${({ color }) => color || '#767676'};
`;

const TimeText = styled.Text`
color: #767676;
text-align: center;
font-family: Pretendard;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: 12px; /* 150% */
margin-bottom : 30%;
`;
