//약은 언제 드시나요? 텍스트 
import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from "@react-navigation/native";

export default function WhenMedicineText() {
  const navigation = useNavigation();
  
  return (
    <MainLayout>
      <StyledText>약은 언제 드시나요?</StyledText>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-left:16px; 
  margin-bottom:32px;
`;

const StyledText = styled.Text`
  color: var(--Font-02_black, #111);
text-align: center;

/* MO/Headline/KR/H2_KR_Rg */
font-family: Pretendard;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 38px; /* 135.714% */
letter-spacing: -0.7px;
margin-left:24px;
`;

