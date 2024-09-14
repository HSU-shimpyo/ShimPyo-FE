import React from 'react';
import styled from 'styled-components/native'; 

export default function MyChat({ content }) {
  return (
    <MainLayout>
      <StyledText>{content}</StyledText>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  background-color: #3C63EC;
  border-radius: 8px 0px 8px 8px;
  padding: 12px;
  margin-left: 149px;
  max-width: 80%;
  margin-top : 10px;
`;

const StyledText = styled.Text`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  color: #fff;
`;
