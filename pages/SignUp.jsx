import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ToolBar from '../entities/SignUpComponent/ui/Toolbar';
import SignUpInput from '../entities/SignUpComponent/ui/SignUpInput';
import NextButton from '../entities/SignUpComponent/ui/NextButton';
import SignUpBreath from './SignUpBreath';

export default function SignUp() {
  const [isComplete, setIsComplete] = useState(false);
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate('SignUpBreath'); // 'SignUpBreath' 화면으로 이동
  };

  return (
    <MainLayout>
      {!isComplete && <ToolBar />}
      {!isComplete && <SignUpInput />}
      {!isComplete && <NextButton onPress={handleButtonClick} />}
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;
