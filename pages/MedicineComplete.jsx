import React from 'react'
import styled from 'styled-components'
import ClockImg from '../assets/images/clock.png';
export default function MedicineComplete() {
  return (
    <MainLayout>
      <StyledText fontSize={'28px'} fontWeight={'600'} color={'#111'} marginBottom={'16px'}>약 복용 시간 설정 완료</StyledText>
      <StyledText fontSize={'14px'} fontWeight={'400'} color={'#767676'} marginBottom={'48px'}>까먹지 않도록 약 복용 시간을 알려줄게요!</StyledText>
      <StyledImg source={ClockImg}/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
flex-direction : column;
jusutify-content : center;
align-items : center;
width : 236px;
height : 302px;
margin-top : 55%;
`;

const StyledText = styled.Text`
color : ${({ color }) => color || '#111'};
font-size : ${({ fontSize }) => fontSize || '28px'};
font-weight : ${({fontWeight}) => fontWeight || '600'};
margin-bottom : ${({marginBottom}) => marginBottom || '0px'};
`;

const StyledImg = styled.Image`
width : 190px;
height : 203.4px;
`;