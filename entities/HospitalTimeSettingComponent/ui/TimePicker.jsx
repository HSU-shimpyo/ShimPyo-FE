import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export default function TimePicker({setIsTimeSettingComplete}) {
  const [isTimeZoneFocus, setIsTimeZoneFocus] = useState(null);
  const [isHoursFocus, setIsHoursFocus] = useState(null);
  const [isMinuteFocus, setIsMinuteFocus] = useState(null);
  const timeZone = ['오전', '오후'];
  const [hours, setHours] = useState([]);
  const [minutes, setMinutes] = useState([]);
  useEffect(() => {
    const hoursArray = []; //시간 담는 배열
    const minutesArray = []; //분 담는 배열 
    
    for (let i = 1; i <= 12; i++) { //1시~12시 시간을 반복문을 이용하여 hoursArray 배열에 담음
      hoursArray.push(i.toString()); 
    }

    for (let i = 0; i < 60; i++) { //0분~59분 반복문을 이용하여 minutesArray 배열에 담음
        i<10 ? 
        minutesArray.push('0'+ i) :
        minutesArray.push(i.toString());
    }

    setHours(hoursArray);
    setMinutes(minutesArray);
  }, []);

  useEffect(() => {
    if (isTimeZoneFocus !== null && isHoursFocus !== null && isMinuteFocus !== null) {
      setIsTimeSettingComplete(true);
    } else {
      setIsTimeSettingComplete(false);
    }
  }, [isTimeZoneFocus, isHoursFocus, isMinuteFocus]);

  const selectedTimeZone = (index) => {
    setIsTimeZoneFocus(index) //index가 0이면 오전 , 1이면 오후 
  }

  const selectedHours = (index) => {
    setIsHoursFocus(index) 
  }

  const selectedMinute = (index) => {
    setIsMinuteFocus(index)
  }



  return (
    <MainLayout>

        {/* 오전/오후 선택 */}
      <TimeZoneSelectScrollView>

        {/* 오전,오후를 담은 배열을 map 반복문을 이용하여 찍어냄 -> item : 오전/오후 , index : 배열 인덱스*/}
        {timeZone.map((item, index) => ( 
          <TimeZoneButton 
            key={index} 
            onPress={()=>selectedTimeZone(index)}  //오전,오후 선택
            isFocused={isTimeZoneFocus === index} //보이는 배열의 index와 선택한 배열의 index가 같으면 isHoursFocus -> true 
            activeOpacity={1} 
          >
            <TimeZoneText isFocused={isTimeZoneFocus === index}>{item}</TimeZoneText>
          </TimeZoneButton>
        ))}
      </TimeZoneSelectScrollView>

      {/* 시간 선택 */}
      <SelectScrollView showsVerticalScrollIndicator={false}>
        {hours.map((item,index) => (
            <TimeButton 
                key={index} 
                onPress={() => selectedHours(index)} //시간 선택 
                isFocused={isHoursFocus === index} //보이는 배열의 index와 선택한 배열의 index가 같으면 isHoursFocus -> true 
                activeOpacity={1} //TouchableOpacity 클릭시 기본 반짝임 효과 없애기
            >
            <TimeText isFocused={isHoursFocus === index}>{item}</TimeText>
            </TimeButton>
        ))}
      </SelectScrollView> 

        {/* 분 선택 */}
      <SelectScrollView showsVerticalScrollIndicator={false}>
         {minutes.map((item,index) => (
            <TimeButton 
                key={index} 
                onPress={() => selectedMinute(index)} //분 선택
                isFocused={isMinuteFocus === index} //보이는 배열의 index와 선택한 배열의 index가 같으면 isMinuteFocus -> true 
                activeOpacity={1} //TouchableOpacity 클릭시 기본 반짝임 효과 없애기
            >
            <TimeText isFocused={isMinuteFocus === index}>{item}</TimeText>
            </TimeButton>
        ))} 
      </SelectScrollView>
    </MainLayout>
  );
}

const MainLayout = styled.View`
flex-direction : row;
justify-content : space-between;
width : 80%;
`;

const TimeZoneSelectScrollView = styled.ScrollView`
  width: 70px;
  border-radius: 24px;
  background-color: #F7F7FB;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  padding: 2px;
`;

const SelectScrollView = styled.ScrollView`
width : 74px;
height : 96px;
border-radius: 24px;
flex-grow: 0;
flex-shrink: 1;
background-color: #F7F7FB;
`;

const TimeZoneButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC' : '#F7F7FB')}; 
  border-radius: 24px;
  width: 66px;
  height: 48px;
  justify-content: center;
`;

const TimeZoneText = styled(Text)`
  color: ${({ isFocused }) => (isFocused ? '#fff' : '#767676')};
  font-size: 16px;
  font-weight : 600;
  text-align: center;
`;

const TimeButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: '#F7F7FB';
  justify-content: center;
  align-items : center;
  margin : 30% 0;
  `;

const TimeText = styled(Text)`
  color: ${({ isFocused }) => (isFocused ? '#3C63EC' : '#999')};
  font-size: 25px;
`;
