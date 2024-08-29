import React from 'react';
import styled from 'styled-components/native';

export default function MealButton() {
  // 더미 데이터
  const mealTimes = {
    아침: '09:40',
    점심: '12:30',
    저녁: '18:00'
  };

  return (
    <Container>
      <ButtonContainer>
        <StyledButton>
          <ButtonLabel>아침</ButtonLabel>
          <ButtonTime>{mealTimes['아침']}</ButtonTime>
        </StyledButton>
        <StyledButton>
          <ButtonLabel>점심</ButtonLabel>
          <ButtonTime>{mealTimes['점심']}</ButtonTime>
        </StyledButton>
        <StyledButton>
          <ButtonLabel>저녁</ButtonLabel>
          <ButtonTime>{mealTimes['저녁']}</ButtonTime>
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
  width: 326px;
  height: 64px;
  margin-top: -340px;
`;

const StyledButton = styled.View`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

const ButtonLabel = styled.Text`
  color: #111;
text-align: center;

/* MO/Title/KR/T4_KR_Sb */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;

const ButtonTime = styled.Text`
  color:  #111;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
margin-top:2px;

`;
