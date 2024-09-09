import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { TimeInfo } from '../model/model';
export default function EatingTimeButton({mealTiming,intakeTiming}) {
  useEffect(()=>{
    console.log(TimeInfo,intakeTiming);
  },[])
  return (
    <Container>
      <ButtonContainer>
        <StyledLeftButton>
          <ButtonText>
            {mealTiming}
          </ButtonText>
        </StyledLeftButton>
        <StyledRightButton>
          <ButtonText>
            {intakeTiming}
          </ButtonText>
        </StyledRightButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height:258px;
  `;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 327px;
  height: 64px;

`;

const StyledLeftButton = styled.View`
  width: 164px;
  height: 64px;
  background-color: #C2DDF8;
  justify-content: center;
  align-items: center;
  border-radius: 24px 0px 0px 24px;
`;

const StyledRightButton = styled.View`
  width: 164px;
  height: 64px;
  background-color: ${(props) => (props.isSelected ? '#C2DDF8' : '#FFFFFF')};
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 24px 0px;
`;

const ButtonText = styled.Text`
  color: #111;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
`;

