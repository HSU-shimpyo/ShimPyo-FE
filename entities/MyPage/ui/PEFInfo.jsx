import React from 'react'
import styled from 'styled-components'
import { myInfo } from '../model/model'
import Sum from '../../../assets/images/mypageSum.png'

export default function PEFInfo() {
  return (
    <MainLayout>
        <TextSection>
            <StyledText marginBottom="8px">
                니의 기준 <StyledText fontWeight="600">최대 호기량(PEF)는</StyledText>
            </StyledText>
            <StyledText fontWeight="600" fontSize="48px">{myInfo.PEF} <StyledText fontSize="16px" fontWeight="600">Lpm</StyledText></StyledText>
        </TextSection>
      <SumImg source={Sum}/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 327px;
height : 120px;
background-color : #D7ECFA;
margin-left : 24px;
border-radius: 12px;
margin-top : 31px;
shadow-color: rgba(35, 48, 59, 0.15);
shadow-offset: 0px 20px;
shadow-opacity: 0.44;
shadow-radius: 44px;
elevation: 5; 
`;

const TextSection = styled.View`
width : 60%;
height : 100%;
justify-content : center;
`;

const StyledText = styled.Text`
color: #000;
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '14px'};
font-style: normal;
font-weight:${({ fontWeight }) => fontWeight || '400'};
margin-bottom : ${({ marginBottom }) => marginBottom || '0'};
margin-left : 18px;
letter-spacing: -0.35px;
`;

const SumImg = styled.Image`
width : 110px;
height : 110px;
position : absolute;
right : 2%;
bottom : 0%;
`;