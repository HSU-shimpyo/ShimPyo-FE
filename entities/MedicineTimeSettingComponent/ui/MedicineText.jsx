import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from "@react-navigation/native";

export default function MedicineText() {
  const navigation = useNavigation();
  
  return (
    <MainLayout>
      <StyledText>현재 약 복용 알림 시간</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-left:16px; 
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

