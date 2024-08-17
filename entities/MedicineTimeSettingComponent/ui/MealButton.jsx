import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function MealButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  //내가 현재 설정한 페이지이므로, 데이터가 들어가야 하는 페이지
  return (
    <Container>
      <ButtonContainer>
        <StyledButton
          onPress={() => handleButtonPress('아침')}
          isSelected={selectedButton === '아침'}
        >
          <ButtonText isSelected={selectedButton === '아침'}>아침</ButtonText>
          <ButtonText isSelected={selectedButton === '아침'}>09:00</ButtonText>

        </StyledButton>
        <StyledButton
          onPress={() => handleButtonPress('점심')}
          isSelected={selectedButton === '점심'}
        >
          <ButtonText isSelected={selectedButton === '점심'}>점심</ButtonText>
          <ButtonText isSelected={selectedButton === '점심'}>12:30</ButtonText>

        </StyledButton>
        <StyledButton
          onPress={() => handleButtonPress('저녁')}
          isSelected={selectedButton === '저녁'}
        >
          <ButtonText isSelected={selectedButton === '저녁'}>저녁</ButtonText>
          <ButtonText isSelected={selectedButton === '저녁'}>18:00</ButtonText>

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
  margin-top:-340px;
    color: ${(props) => (props.isSelected ? '#111111' : '#111111')}; /* 선택된 경우 텍스트 색상 변경 */

`;



const StyledButton = styled.TouchableOpacity`
  width: 100px;
    height: 100px;
    flex-shrink: 0;
  background-color: ${(props) => (props.isSelected ? '#FFFFFF' : '#FFFFFF')}; /* 선택된 경우 배경색 변경 */
justify-content: center;
  align-items: center;
  border-radius: 24px;
opacity: var(--sds-size-stroke-border);
background: #FFF;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.isSelected ? '#111111' : '#111111')}; /* 선택된 경우 텍스트 색상 변경 */
color: var(--Font-02_black, #111);
text-align: center;

/* MO/Title/KR/T4_KR_Sb */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;
