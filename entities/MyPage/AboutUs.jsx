import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import Arrow from '../../assets/images/swipeArrow.png'
export default function AboutUs() {
  return (
    <MainLayout>
        <StyledText opacity="0">좌우로 스와이프 해보세요!</StyledText>
        <Card/>
        {/* <ArrowImg source={Arrow}/> */}
        <StyledText>좌우로 스와이프 해보세요!</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
position : absolute;
justify-content : space-around;
align-items : center;
bakground-color : #F7F7FB;
`;

const StyledText = styled.Text`
color : #767676;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
margin-bottom : 10%;
`;

const ArrowImg = styled.Image`

`;
