import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ToolBar from '../entities/SignUpComponent/ui/Toolbar';
import SignUpInput from '../entities/SignUpComponent/ui/SignUpInput';
import NextButton from '../entities/SignUpComponent/ui/NextButton';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    birthdate: '',
  });
  const navigation = useNavigation();

  // 모든 필드가 채워졌는지 확인하는 함수
  const allFieldsFilled = Object.values(form).every(field => field.trim().length > 0);

  useEffect(() => {
    console.log('현재 입력 상태:', form);
    console.log('모든 필드가 채워졌는가:', allFieldsFilled);
  }, [form]);

  // 입력 필드 변경 시 호출되는 함수
  const handleInputChange = (key, value) => {
    setForm(prevState => ({
      ...prevState,
      [key]: value,  // 입력 시 공백 제거
    }));
  };

  const handleButtonClick = () => {
    if (allFieldsFilled) {
      navigation.navigate('SignUpBreath'); // 'SignUpBreath' 화면으로 이동
    } else {
      alert('모든 내용을 채워주세요.');
    }
  };

  return (
    <MainLayout>
      <ToolBar />
      <SignUpInput onChange={handleInputChange} />
      <NextButton onPress={handleButtonClick} disabled={!allFieldsFilled} />
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
