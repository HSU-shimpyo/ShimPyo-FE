import React from 'react'
import styled from 'styled-components'
import chatIcon from '../../../assets/images/chatIcon.png'
export default function MyInfo() {
  return (
    <MainLayout>
         <Icon source={chatIcon}/>
         <TextSection>
            <StyledText fontSize="24px" fontWeight="600" letterSpacing="-0.6px" marginBottom="4px">이주연</StyledText>
            <StyledText>2001.07.08</StyledText>
         </TextSection>
         <Icon source={chatIcon} opacity="0"/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
flex-direction : row;
align-items : center;
margin-top : 32px;
`;

const Icon = styled.Image`
width : 80px;
height : 80px;
margin-right : 12px;
margin-left : 24px;
`;

const TextSection = styled.View`
flex-direction : column;
`;

const StyledText = styled.Text`
color: #000;
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '16px'};
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || '400'};
line-height: 24px; 
letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'};
margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};

`;
