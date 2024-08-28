import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import person from '../../..//assets/images/person.png'
import { useNavigation } from "@react-navigation/native";
import moment from 'moment';
import 'moment/locale/ko';
import { TouchableOpacity } from 'react-native';

export default function WeeklyCalendar() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(moment());

  const clickMyPageButton = () => {
    navigation.navigate("MyPage");
  }

  useEffect(() => {
    moment.locale('ko');
  }, []);

  const generateWeekDays = () => {
    const startOfWeek = selectedDate.clone().startOf('week');
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      weekDays.push(startOfWeek.clone().add(i, 'days'));
    }

    return weekDays;
  };

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const weekDays = generateWeekDays();

  return (
      <MainLayout>

        <Wrap>
          <PersonIcon source={person} opacity="0"/>
          <StylecText>{selectedDate.format('M월 D일')}</StylecText>
          <TouchableOpacity onPress={clickMyPageButton}>
            <PersonIcon source={person}/>
          </TouchableOpacity>
        </Wrap>

        <CalendarContainer>
              {weekDays.map((date, index) => (
                <Tile
                  key={index}
                  selectedTileColor={date.isSame(selectedDate, 'day') ? '#fff' : '#3C63EC'}
                  onPress={() => handleDatePress(date)}
                >
                <WeekText
                  selectedWeekColor={date.isSame(selectedDate, 'day') ? '#000' : '#fff'}
                  selectedFontWeight={date.isSame(selectedDate, 'day') ? 600 : 400}
                >
                  {date.format('ddd')}
                </WeekText>
                <DayText
                  selectedFontWeight={date.isSame(selectedDate, 'day') ? 600 : 400}
                >
                  {date.format('D')}
                </DayText>
                </Tile>
              ))}
        </CalendarContainer>


      </MainLayout>
  );
}


const MainLayout = styled.View`
  width: 100%;
  height: 246px;
  padding-right: 5%;
  padding-left: 5%;
  border-radius: 0px 0px 32px 32px;
  background: #3c63ec;
  padding-left : 8%;
  padding-right : 8%;
  justify-content : center;
  font-family: Pretendard;
`;
const Wrap = styled.View`
flex-direction : row;
justify-content : space-between;
`;
const StylecText = styled.Text`
  color : #fff;
  font-weight: 600;
  font-size: 20px;
  margin-left : 2%;
  margin-bottom : 16px;
`;
const PersonIcon = styled.Image`
width : 28px;
height : 28px;
`;
const CalendarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Tile = styled.TouchableOpacity`
  width: 45px;
  height: 60px;
  background-color: ${({ selectedTileColor }) => selectedTileColor};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const WeekText = styled.Text`
  color: ${({ selectedWeekColor }) => selectedWeekColor};
  font-size : 12px;
  font-weight : ${({ selectedFontWeight }) => selectedFontWeight};
`;

const DayText = styled.Text`
  color: #000;
  font-size : 12px;
  font-weight : ${({ selectedFontWeight }) => selectedFontWeight};
`;
