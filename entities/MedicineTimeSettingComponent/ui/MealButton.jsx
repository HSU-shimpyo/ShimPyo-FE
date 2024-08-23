import React from 'react';
import styled from 'styled-components/native';

export default function MealButton() {
  // 더미 데이터
  const mealTimes = {
    아침: '09:30',
    점심: '12:30',
    저녁: '18:00'
  };

  return (
    <Container>
      <ButtonContainer>
        <StyledButton>
          <ButtonText>아침</ButtonText>
          <ButtonText>{mealTimes['아침']}</ButtonText>
        </StyledButton>
        <StyledButton>
          <ButtonText>점심</ButtonText>
          <ButtonText>{mealTimes['점심']}</ButtonText>
        </StyledButton>
        <StyledButton>
          <ButtonText>저녁</ButtonText>
          <ButtonText>{mealTimes['저녁']}</ButtonText>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 327px;
  height: 64px;
  margin-top: -340px;
`;

const StyledButton = styled.View`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background-color: #FFFFFF; /* 배경색 고정 */
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  color: #111111;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
`;

