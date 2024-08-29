//점심은 주로 언제 드시나요?? 텍스트 
import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from "@react-navigation/native";

export default function LunchText() {
  const navigation = useNavigation();
  
  return (
    <MainLayout>
      <StyledBoldText>점심</StyledBoldText>
      <StyledText>은 주로 언제 드시나요?</StyledText>

      
    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 65%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom:20px;
`;

const StyledBoldText=styled.Text`
color: #111;

/* MO/Headline/KR/H3_KR_Sb */
font-family: Pretendard;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 34px; /* 141.667% */
letter-spacing: -0.6px;
`;

const StyledText = styled.Text`
color: var(--Font-02_black, #111);

/* MO/Headline/KR/H3_KR_Rg */
font-family: Pretendard;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 34px;
letter-spacing: -0.6px;
`;

