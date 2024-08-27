import React from 'react'
import styled from 'styled-components'

export default function MyChat() {
  return (
    <MainLayout>
      <StyledText>계절에 따른 천식 관리법을 알려줘</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 202px;
height : 44px;
background-color : #3C63EC;
border-radius: 8px 0px 8px 8px;
padding : 12px;
margin-left : 149px;
margin-bottom : 20px;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
color : #fff;

`;