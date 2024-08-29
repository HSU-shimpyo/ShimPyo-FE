import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function ChangeTimeButton() {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();

  const handleButtonPress = (button) => {
    setSelectedButton(button);
    navigation.navigate('ChangeMedicine'); // 'ChangeMedicine' 페이지로 이동
  };

  return (
    <Container>
      <ButtonContainer>
        <StyledButton
        onPress={() => navigation.navigate('ChangeMedicine')}
        isSelected={selectedButton === '재설정하기'}
        >
          <ButtonText isSelected={selectedButton === '재설정하기'}>
            재설정 하기
          </ButtonText>
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
  height: 52px;
`;

const StyledButton = styled.TouchableOpacity`
  display: flex;
  width: 327px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #3c63ec;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
`;
