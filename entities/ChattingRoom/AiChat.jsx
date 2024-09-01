import React from 'react';
import styled from 'styled-components/native';
import headphone from '../../assets/images/chatIcon.png';

export default function AiChat() {
  const name = '임예은';
  return (
    <Container>
      <IconContainer>
        <Icon source={headphone} style={{ zIndex: 1 }} />
      </IconContainer>
      <TextContainer style={{ zIndex: 2 }}>
        <StyledText>안녕하세요, {name}님!        쉼표 AI 챗봇 숨숨이에요.   무엇이 궁금하실까요?</StyledText>
      </TextContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
  margin-bottom: 20px;
  flex: 1;
  justify-content: flex-end;
`;

const IconContainer = styled.View`
  align-items: center;
  margin-bottom:8px;
`;

const TextContainer = styled.View`
  width: 155px;
  background-color: #fff;
  border-radius: 0px 8px 8px 8px;
  padding: 12px;
  border: 1px solid #ccc;
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

const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;
