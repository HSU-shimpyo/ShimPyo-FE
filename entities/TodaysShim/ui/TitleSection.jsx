import React ,{useState}from 'react'
import styled from 'styled-components'

export default function TitleSection({status, PEF ,percentage}) {
  return (
    <MainLayout>
        <StyledText color="#04B014" fontSize="28px" fontWeight="600" lefferSpacing="-0.7px">{status}</StyledText>
        <StyledText>최대 호기 속도 <StyledText fontWeight="600">{PEF}</StyledText></StyledText>
        <StyledText>전날 대비 <StyledText fontWeight="600" color="#4896EC">{percentage}</StyledText></StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
width : 100%;
height : 12%;
justify-content : space-around;
margin-left : 17%;
margin-bottom : 24px;
`;

const StyledText = styled.Text`
color : ${({ color }) => color || '#111'};
font-size : ${({ fontSize }) => fontSize || '20px'};
font-weight : ${({fontWeight }) => fontWeight || '400'};
fontFamily: 'Pretendard';
`;