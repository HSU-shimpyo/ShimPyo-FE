import React from 'react'
import styled from 'styled-components/native'
import SumSum from '../../../assets/images/chatIcon.png'
export default function SumAiChat() {
  return (
    <MainLayout>

      {/* 상단바 아이콘 */}
      <Icon source={SumSum}/>

      {/* 상단바 제목 */}
      <StyledText><StyledText fontWeight="600">숨숨이</StyledText>에게 물어보숨</StyledText>

    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  height: 56px;
  margin-top : 44px;
  flex-direction : row;
  align-items : center;
  padding-left : 24px;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || '400'};
line-height: 28px;
letter-spacing: -0.5px;
`;

const Icon = styled.Image`
width : 34px;
height : 34px;
margin-right : 8px;
`;

