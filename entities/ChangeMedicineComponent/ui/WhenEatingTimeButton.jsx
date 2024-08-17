//식전 & 식후 버튼
import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function WhenEatingTimeButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <Container>
      <ButtonContainer>
        <StyledButton
          onPress={() => handleButtonPress('식전')}
          isSelected={selectedButton === '식전'}
        >
          <ButtonText isSelected={selectedButton === '식전'}>식전</ButtonText>
        </StyledButton>
        <StyledButton
          onPress={() => handleButtonPress('식후')}
          isSelected={selectedButton === '식후'}
        >
          <ButtonText isSelected={selectedButton === '식후'}>식후</ButtonText>
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
  height: 100%;
  margin-button:32px;
`;

const StyledButton = styled.TouchableOpacity`
  display: flex;
  width: 157px;
  height: 110px;
  padding: 41px 61px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 24px;
  background: ${(props) => (props.isSelected ? '#E5E9FA' : '#E5E5EC')}; /* 선택된 경우 배경색 변경 */
    border:${(props) => (props.isSelected ? '#91A6F3' : '#E5E5EC')}; /* 선택된 경우 테두리 변경 */

`;

const ButtonText = styled.Text`
    color: ${(props) => (props.isSelected ? '#3C63EC' : '#767676')}; /* 선택된 경우 텍스트 색상 변경 */
    font-family: Pretendard;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    background: ${(props) => (props.isSelected ? '#E5E9FA' : '#E5E5EC')}; /* 선택된 경우 배경색 변경 */
`;
