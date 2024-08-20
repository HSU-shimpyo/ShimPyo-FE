import React from 'react';
import styled from 'styled-components/native';

export default function Login() {
  return (
    <MainLayout>
      <ContentContainer>
        <WelcomeText>로그인 페이지</WelcomeText>
      </ContentContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.Text`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;
