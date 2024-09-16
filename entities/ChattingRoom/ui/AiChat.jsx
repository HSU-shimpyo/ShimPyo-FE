import React from 'react';
import styled from 'styled-components/native';

export default function AiChat({ content }) {
  const displayedContent = typeof content === 'string' ? content : content.message; // 또는 content의 적절한 필드

  return (
    <MainLayout>
      <StyledText>{displayedContent}</StyledText>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  background-color: #fff;
  border-radius: 0px 8px 8px 8px;
  padding: 12px;
  max-width: 90%; 
  margin-top : 10px;
`;

const StyledText = styled.Text`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  color: #505050;
`;



