//4개의 버튼을 나타냄
import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function MinuteButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <Container>
      <ButtonContainer>
        <StyledFirstButton
          onPress={() => handleButtonPress('곧바로')}
          isSelected={selectedButton === '곧바로'}
        >
          <ButtonText isSelected={selectedButton === '곧바로'}>곧바로</ButtonText>
        </StyledFirstButton>
        <StyledSecondButton
          onPress={() => handleButtonPress('30분')}
          isSelected={selectedButton === '30분'}
        >
          <ButtonText isSelected={selectedButton === '30분'}>30분</ButtonText>
        </StyledSecondButton>
        <StyledThirdButton
          onPress={() => handleButtonPress('1시간')}
          isSelected={selectedButton === '1시간'}
        >
          <ButtonText isSelected={selectedButton === '1시간'}>1시간</ButtonText>
        </StyledThirdButton>
        <StyledForthButton
          onPress={() => handleButtonPress('2시간')}
          isSelected={selectedButton === '2시간'}
        >
          <ButtonText isSelected={selectedButton === '2시간'}>2시간</ButtonText>
        </StyledForthButton>
        
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
  height: 64px;
  background-color:#E5E5EC;
  border-radius:24px;
  margin-bottom:276px;
`;

//곧바로 버튼
const StyledFirstButton = styled.TouchableOpacity`
  display: inline-flex;
  padding: 18px 23px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.35px;
  background-color: ${(props) => (props.isSelected ? '#E5E9FA' : '#E5E5EC')}; /* 선택된 경우 배경색 변경 */
    border-radius: ${(props) => (props.isSelected ? '24px 24px 24px 24px' : '24px 0px 0px 24px')}; /* 선택된 경우 border-radius 변경 */
  border: 1px solid ${(props) => (props.isSelected ? '#91A6F3' : '#E5E5EC')}; /* 선택된 경우 테두리 색상 변경 */
`;

//30분 버튼 
const StyledSecondButton = styled.TouchableOpacity`
  display: inline-flex;
  padding: 18px 27px 18px 26px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? '#E5E9FA' : '#E5E5EC')}; /* 선택된 경우 배경색 변경 */
  border: 1px solid ${(props) => (props.isSelected ? '#91A6F3' : '#E5E5EC')}; /* 선택된 경우 테두리 색상 변경 */
    border-radius: ${(props) => (props.isSelected ? '24px' : '0px')}; /* 선택된 경우 border-radius 변경 */

`;

//1시간 버튼
const StyledThirdButton = styled.TouchableOpacity`
  display: inline-flex;
  padding: 18px 27px 18px 26px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? '#E5E9FA' : '#E5E5EC')}; /* 선택된 경우 배경색 변경 */
  border: 1px solid ${(props) => (props.isSelected ? '#91A6F3' : '#E5E5EC')}; /* 선택된 경우 테두리 색상 변경 */
    border-radius: ${(props) => (props.isSelected ? '24px' : '0px')}; /* 선택된 경우 border-radius 변경 */

`;

//2시간 버튼 
const StyledForthButton = styled.TouchableOpacity`
  padding: 18px 25px 18px 24px;
  justify-content: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.35px;
  background-color: ${(props) => (props.isSelected ? '#E5E9FA' : '#E5E5EC')}; /* 선택된 경우 배경색 변경 */
  border: 1px solid ${(props) => (props.isSelected ? '#91A6F3' : '#E5E5EC')}; /* 선택된 경우 테두리 색상 변경 */
    border-radius: ${(props) => (props.isSelected ? '24px 24px 24px 24px' : '0px 24px 24px 0px')}; /* 선택된 경우 border-radius 변경 */

`;

const ButtonText = styled.Text`
  color: ${(props) => (props.isSelected ? '#3C63EC' : '#767676')}; /* 선택된 경우 텍스트 색상 변경 */
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
`;
