import React from 'react'
import styled from 'styled-components'

export default function AiChat() {
  return (
    <MainLayout>
      <StyledText>안녕하세요, 권기남님!쉼표 AI 챗봇 숨숨이에요. 무엇이 궁금하실까요?</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 155px;
height : 84px;
background-color : #fff;
border-radius: 0px 8px 8px 8px;
padding : 12px;
margin-left : 24px;
margin-bottom : 20px;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
color : #505050;
`;