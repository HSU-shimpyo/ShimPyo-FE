import React from 'react';
import styled from 'styled-components/native';

export default function MealButton({breakfast, lunch, dinner}) {
  return (
    <Container>
      <ButtonContainer>
        <StyledButton>
          <ButtonLabel>아침</ButtonLabel>
          <ButtonTime>{breakfast}</ButtonTime>
        </StyledButton>
        <StyledButton>
          <ButtonLabel>점심</ButtonLabel>
          <ButtonTime>{lunch}</ButtonTime>
        </StyledButton>
        <StyledButton>
          <ButtonLabel>저녁</ButtonLabel>
          <ButtonTime>{dinner}</ButtonTime>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
justify-content: center;
align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 326px;
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
line-height: 20px; 
margin-top:2px;

`;
