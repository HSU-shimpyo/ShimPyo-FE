import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ToolBar from '../entities/SignUpBreathComponent/ui/Toolbar';
import InputBox from '../entities/SignUpComponent/ui/InputBox';
import CompleteButton from '../entities/SignUpBreathComponent/ui/CompleteButton';

export default function SignUpBreath() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    // 다음 화면으로 이동하는 코드
    navigation.navigate('SignUpComplete'); 
  };

  return (
    <Container>
      <ToolBar />
      <InputContaier>
        <Title>최대호기량(PEF)</Title>
        <InputContents>       
         <InputBox placeholder="평소 최대호기량을 입력해주세요" marginTop={"80px"} position={"absolute"}/>

        </InputContents>
      </InputContaier>
      <RowContainer>
        <StyledImage source={require('../assets/images/exclamation.png')} />
        <Text>해당 호기량 수치는 초기 기록의 기준치로 사용될 예정입니다.</Text>
      </RowContainer>
      <CompleteButton onPress={handleNext} /> 
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: #F7F7FB;
  padding: 14px 24px;
  
`;

const InputContaier = styled.View`
  width: 327px;
  height: 84px;
`;

const InputContents=styled.View`
  margin-top:164px;

`;

const Text = styled.Text`
  color: #3C63EC;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-left: 4px; /* 이미지와 텍스트 사이의 여백 */
`;

const Title = styled.Text`
  position:absolute;
  color: #111;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin-left: 7px;
  margin-bottom: 8px;
  margin-top: 132px;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-contents:center;
  float:start;
  margin-left:8px;
  margin-top:173px;

  
`;

const StyledImage = styled.Image`
  width: 20px;  
  height: 20px;
`;
