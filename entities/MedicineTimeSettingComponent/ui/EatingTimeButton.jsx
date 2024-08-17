import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function EatingTimeButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  //내가 현재 설정한 페이지이므로, 데이터가 들어가야 하는 페이지
  return (
    <Container>
      <ButtonContainer>
        <StyledLeftButton
          onPress={() => handleButtonPress('식후')}
          isSelected={selectedButton === '식후'}
        >
          <ButtonText isSelected={selectedButton === '식후'}>식후</ButtonText>
        </StyledLeftButton>
        <StyledRightButton
          onPress={() => handleButtonPress('30분')}
          isSelected={selectedButton === '30분'}
        >
          <ButtonText isSelected={selectedButton === '30분'}>30분</ButtonText>
        </StyledRightButton>
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
  margin-top:-100px;
`;

const StyledLeftButton = styled.TouchableOpacity`
  width: 164px;
  height: 64px;
  background-color: ${(props) => (props.isSelected ? '#C2DDF8' : '#FFFFFF')}; /* 선택된 경우 배경색 변경 */
  justify-content: center;
  align-items: center;
  border-radius: 24px 0px 0px 24px;
`;

const StyledRightButton = styled.TouchableOpacity`
  width: 164px;
  height: 64px;
  background-color: ${(props) => (props.isSelected ? '#C2DDF8' : '#FFFFFF')}; /* 선택된 경우 배경색 변경 */
  justify-content: center;
  align-items: center;
border-radius: 0px 24px 24px 0px;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.isSelected ? '#111111' : '#111111')}; /* 선택된 경우 텍스트 색상 변경 */
text-align: center;

/* MO/Title/KR/T4_KR_Sb */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;
