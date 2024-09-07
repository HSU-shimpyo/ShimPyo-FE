import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function DinnerNextButton({ onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPress(); // 버튼이 눌렸을 때 원래의 onPress 동작 수행
  };

  return (
    <StyledButton
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
    >
      <ButtonText isPressed={isPressed}>다음</ButtonText>
    </StyledButton>
  );
}

const StyledButton = styled.Pressable`
  width: 327px;
  height: 52px;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ isPressed }) => (isPressed ? '#3C63EC' : '#E5E5EC')};
  
`;

const ButtonText = styled.Text`
  color: ${({ isPressed }) => (isPressed ? '#fff' : '#999')};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
