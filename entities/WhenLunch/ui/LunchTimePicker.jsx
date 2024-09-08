import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
export default function LunchTimePicker({ setIsTimeSettingComplete, setLunchTime }) {
  const [isTimeZoneFocus, setIsTimeZoneFocus] = useState(null);
  const [isHoursFocus, setIsHoursFocus] = useState(null);
  const [isMinuteFocus, setIsMinuteFocus] = useState(null);
  const timeZone = ['오전', '오후'];
  const [hours, setHours] = useState([]);
  const [minutes, setMinutes] = useState([]);

  useEffect(() => {
    const hoursArray = [];
    const minutesArray = [];

    for (let i = 1; i <= 12; i++) {
      hoursArray.push(i.toString());
    }

    for (let i = 0; i < 60; i++) {
      i < 10 ? minutesArray.push('0' + i) : minutesArray.push(i.toString());
    }

    setHours(hoursArray);
    setMinutes(minutesArray);
  }, []);

  useEffect(() => {
    if (isTimeZoneFocus !== null && isHoursFocus !== null && isMinuteFocus !== null) {
      setIsTimeSettingComplete(true);

      // 시간 계산 로직
      let formattedHours = parseInt(isHoursFocus, 10);
      const formattedMinutes = isMinuteFocus;

      if (isTimeZoneFocus === '오후' && formattedHours !== 12) {
        formattedHours += 12;
      } else if (isTimeZoneFocus === '오전' && formattedHours === 12) {
        formattedHours = 0; // 오전 12시는 00시로 변경
      }

      // "HH:MM" 형식으로 시간 포맷
      const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${formattedMinutes}`;
      setLunchTime(formattedTime);
    } else {
      setIsTimeSettingComplete(false);
    }
  }, [isTimeZoneFocus, isHoursFocus, isMinuteFocus]);

  const selectedTimeZone = (item) => {
    setIsTimeZoneFocus(item);
  };

  const selectedHours = (item) => {
    setIsHoursFocus(item);
  };

  const selectedMinute = (item) => {
    setIsMinuteFocus(item);
  };

  return (
    <MainLayout>
      {/* 오전/오후 및 시간 선택 */}
      <TimeZoneContainer>
        {timeZone.map((item, index) => (
          <TimeZoneButton
            key={index}
            onPress={() => selectedTimeZone(item)}
            isFocused={isTimeZoneFocus === item}
            activeOpacity={1}
          >
            <TimeZoneText isFocused={isTimeZoneFocus === item}>{item}</TimeZoneText>
          </TimeZoneButton>
        ))}
      </TimeZoneContainer>

      {/* 시간 및 분 선택 */}
      <TimePickerContainer>
        <SelectScrollView showsVerticalScrollIndicator={false} isFocused={isHoursFocus != null}>
          {hours.map((item, index) => (
            <TimeButton
              key={index}
              onPress={() => selectedHours(item)}
              isFocused={isHoursFocus === item}
              activeOpacity={1}
            >
              <TimeText isFocused={isHoursFocus === item}>{item}</TimeText>
            </TimeButton>
          ))}
        </SelectScrollView>
        <DotImage source={require('../../../assets/images/TimePickerDot.png')}/>

        <SelectScrollView showsVerticalScrollIndicator={false} isFocused={isMinuteFocus != null}>
          {minutes.map((item, index) => (
            <TimeButton
              key={index}
              onPress={() => selectedMinute(item)}
              isFocused={isMinuteFocus === item}
              activeOpacity={1}
            >
              <TimeText isFocused={isMinuteFocus === item}>{item}</TimeText>
            </TimeButton>
          ))}
        </SelectScrollView>
      </TimePickerContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* 부모 요소의 전체 너비 */
  margin-bottom: 24px;
`;

const TimeZoneContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 237px;
  height: 56px;
  margin-bottom: 24px;
  border-radius: 100px;
  border: 1px solid #E5E5EC;
  background: #FFF;
`;

const TimePickerContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 300px; 
  height:120px;
  margin-bottom: -40px;
`;

const TimeZoneButton = styled(TouchableOpacity)`
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC' : '#fff')};
  display: flex;
  width:114px;
  height:48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
 justify-content: space-around;
 `;

const TimeZoneText = styled(Text)`
  color: ${({ isFocused }) => (isFocused ? '#fff' : '#767676')};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  font-family: Pretendard;
  line-height: 22px; /* 146.667% */
  letter-spacing: -0.375px;
`;

const SelectScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background-color: #f7f7fb;
  border-radius: 24px;
  border: ${({ isFocused }) => (isFocused ? '2px solid #3C63EC' : '2px solid #CACAD7')};
  background: #FFF;
  margin-left:20px;
  margin-right:20px;
`;

const TimeButton = styled(TouchableOpacity)`
  align-items: center;
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeText = styled(Text)`
  color: ${({ isFocused }) => (isFocused ? '#111' : '#999')};
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 140% */
`;

const DotImage = styled.Image`
  width: 4px;
  height: 22px;
  margin-top:50px;
`;