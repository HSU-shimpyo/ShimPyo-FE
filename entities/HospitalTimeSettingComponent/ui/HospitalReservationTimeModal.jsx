import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import closeButton from '../../../assets/images/whiteclosebutton.png';
import { TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import StandardButton from '../../../shared/component/StandardButton';
import TimePicker from './TimePicker';
import { setVisitHospital } from '../api/HospitalApi';

export default function HospitalReservationTimeModal({
  setIsDayClick, 
  setIsHospitalSelected, 
  setIsComplete, 
  setButtonStatus, 
  setButtonColor,
  hospitalId,
  year,
  month,
  day,
  loadInfo
}) {
  const [isTimeSettingComplete, setIsTimeSettingComplete] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState();
  const [selectedHours, setSelectedHours] = useState();
  const [selectedMinutes, setSelectedMinutes] = useState();
  const [reservationTime, setReservationTime] = useState('');

  const formatReservationTime = (year, month, day, selectedTimeZone, selectedHours, selectedMinutes) => {
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    
    //시간 변환 로직 (오전/오후)
    let formattedHours = selectedTimeZone === '오후' && parseInt(selectedHours, 10) < 12 
    ? parseInt(selectedHours, 10) + 12 
    : selectedTimeZone === '오전' && parseInt(selectedHours, 10) === 12
    ? 0 
    : parseInt(selectedHours, 10);

    const formattedMinutes = String(selectedMinutes).padStart(2, '0');

    return `${year}년 ${formattedMonth}월 ${formattedDay}일 ${formattedHours}시 ${formattedMinutes}분`;
  };

  const CompleteButtonClick = async () => {
    setIsHospitalSelected(false);
    setIsDayClick(false);
    setButtonStatus("저장하기");
    setButtonColor("#3C63EC");

    await setVisitHospital(hospitalId, reservationTime);

    //새로운 예약 정보를 다시 불러옴
    loadInfo();
  };

  useEffect(() => {
    const formattedTime = formatReservationTime(year, month, day, selectedTimeZone, selectedHours, selectedMinutes);
    setReservationTime(formattedTime);
  }, [year, month, day, selectedTimeZone, selectedHours, selectedMinutes]);

  return (
    <Container intensity={15}>
      <ModalContainer>
        <TopBar>
          <StyledText>병원 예약 시간</StyledText>
          <TouchableOpacity onPress={() => setIsHospitalSelected(false)}>
            <StyledImg source={closeButton} />
          </TouchableOpacity>
        </TopBar>

        <TimePicker 
          setIsTimeSettingComplete={setIsTimeSettingComplete}
          setSelectedTimeZone={setSelectedTimeZone}
          setSelectedHours={setSelectedHours}
          setSelectedMinutes={setSelectedMinutes}
        />

        <StandardButton 
          text='시간 작성 완료' 
          color={isTimeSettingComplete ? '#fff' : '#999'}
          backgroundColor={isTimeSettingComplete ? '#4896EC' : '#F1F1F5'}
          width='137px' 
          height='48px' 
          borderRadius='100px' 
          fontSize='14px'
          marginBottom='24px'
          onPress={isTimeSettingComplete ? CompleteButtonClick : null}
        />
      </ModalContainer>
    </Container>
  );
}

const Container = styled(BlurView)`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 327px;
  height: 331px;
  background-color: rgba(68, 68, 68, 0.80);
  bottom: 8%;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TopBar = styled.View`
  width: 327px;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 14px;
  margin-left: 120px;
`;

const StyledImg = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 24px;
  margin-top: 14px;
`;
