import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import closeButton from '../../../assets/images/whiteclosebutton.png';
import Call from '../../../assets/images/phone.png'
export default function ReservationInfoModal({
  year,
  month,
  day,
  setIsReservedDayClick,
  reservationList,
}) {
  const [reservationForDay, setReservationForDay] = useState(null);

  useEffect(() => {
    const reservation = reservationList.find((reservation) => {
      return (
        reservation.year === year &&
        reservation.month === month &&
        reservation.day === day
      );
    });
    setReservationForDay(reservation);
  }, [year, month, day, reservationList]);

  const handleCloseButtonClick = () => {
    setIsReservedDayClick(false);
  };

  return (
    <Container intensity={15}>
      <ModalContainer>
        <TopBar>
          <View opacity="0">
            <StyledImg source={closeButton}/>
          </View>
          <StyledText fontSize="18px" fontWeight="600" lineHeight="26px" letterSpacing="-0.45px" marginTop='15px' marginLeft="5%">{month}월 {day}일</StyledText>
          <TouchableOpacity onPress={handleCloseButtonClick}>
            <StyledImg source={closeButton} marginTop="15px" marginRight="24px" />
          </TouchableOpacity>
        </TopBar>
        {reservationForDay ? (
          <ReservationDetails>
            <WrapTime>
              <StyledText>예약 시간</StyledText>
              <StyledText fontSize="28px" fontWeight="400" lineHeight="38px" letterSpacing="-0.7px">{reservationForDay.hour}시 {reservationForDay.minute}분</StyledText>
            </WrapTime>
            <WrapInfo>
              <StyledText marginBottom="8px">예약한 병원</StyledText>
              <StyledText fontSize="28px" fontWeight="400" lineHeight="38px" letterSpacing="-0.7px" marginBottom="3px">{reservationForDay.hospitalName}</StyledText>
              <StyledText fontSize="16px" fontWeight="300" lineHeight="24px" letterSpacing="-0.4px" marginBottom="12px">{reservationForDay.hospitalAddress}</StyledText>
              <WrapCallInfo>
                <StyledImg source={Call}  marginRight="4px"/>
                <StyledText fontSize="16px" fontWeight="400" lineHeight="24px">{reservationForDay.hospitalPhoneNumber}</StyledText>
              </WrapCallInfo>
            </WrapInfo>
          </ReservationDetails>
        ) : (
          <NoReservationText>해당 날짜에 예약이 없습니다.</NoReservationText>
        )}
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
  height: 377px;
  background-color: rgba(68, 68, 68, 0.80);
  margin-bottom : 30%;
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
font-family: Pretendard;
color : ${({ color }) => color || '#fff'};
font-size : ${({ fontSize }) => fontSize || '12px'};
font-weight : ${({ fontWeight }) => fontWeight || '600'};
line-height: ${({ lineHeight }) => lineHeight || '18px'};
letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.3px'};
margin-top : ${({ marginTop }) => marginTop || '0px'};
margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
margin-left : ${({ marginLeft }) => marginLeft || '0px'};

`;

const StyledImg = styled.Image`
  width: 28px;
  height: 28px;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-right :${({ marginRight }) => marginRight || '0px'};
`;

const ReservationDetails = styled.View`
  width : 85%;
  height : 80%;
  align-items : start;
`;

const WrapTime = styled.View`
border-bottom-width: 1px;
border-bottom-color: #767676;
width : 100%;
height : 30%;
justify-content : space-evenly;
`;
const WrapInfo = styled.View`
width : 100%;
height : 70%;
padding-top : 24px;
`;

const WrapCallInfo = styled.View`
flex-direction : row;
align-items : center;
`;
const NoReservationText = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;
