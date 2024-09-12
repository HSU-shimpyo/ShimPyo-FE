import React,{useState} from 'react'
import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native';

export default function Selecter({isSelect, setIsSelect}) {
    const [isTimeZoneFocus, setIsTimeZoneFocus] = useState('주간');

    const timeZone = ['주간', '월간'];

    const selectedTimeZone = (item) => {
        setIsTimeZoneFocus(item);
        isSelect ? setIsSelect(false) : setIsSelect(true)
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
        </MainLayout>
    )
}


const MainLayout = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  line-height: 22px;
  letter-spacing: -0.375px;
`;
