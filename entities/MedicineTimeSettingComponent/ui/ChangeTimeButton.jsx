import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function ChangeTimeButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  //내가 현재 설정한 페이지이므로, 데이터가 들어가야 하는 페이지
  return (
    <Container>
      <ButtonContainer>
        <StyledButton
          onPress={() => handleButtonPress('재설정하기')}
          isSelected={selectedButton === '재설정하기'}
        >
          <ButtonText isSelected={selectedButton === '재설정하기'}>재설정 하기</ButtonText>

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
    color: ${(props) => (props.isSelected ? '#111111' : '#111111')}; /* 선택된 경우 텍스트 색상 변경 */

`;



const StyledButton = styled.TouchableOpacity`
    display: flex;
    width: 327px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: #3C63EC;
`;

const ButtonText = styled.Text`
text-align: center;
color:#FFFFFF;
/* Button/BUT1_Sb */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.1px;
`;
