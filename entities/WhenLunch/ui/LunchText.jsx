//점심은 주로 언제 드시나요?? 텍스트 
import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from "@react-navigation/native";

export default function LunchText() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <StyledText>
        <StyledText fontWeight="600">점심</StyledText>은 주로 언제 드시나요?
      </StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom:20px;
`;

const StyledText = styled.Text`
color: #111;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight:${({ fontWeight }) => fontWeight || '400'};
line-height: 34px;
letter-spacing: -0.6px;
`;

