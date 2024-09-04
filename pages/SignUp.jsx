import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ToolBar from '../entities/SignUpComponent/ui/Toolbar';
import InputInfo from '../entities/SignUpComponent/ui/InputInfo';
import StandardButton from '../shared/component/StandardButton';
import InputPef from '../entities/SignUpComponent/ui/InputPef';

export default function SignUp() {
  const [isInfoInputComplete, setIsInfoInputComplete] = useState(true);
  const navigation = useNavigation();

  const handleButtonClick = () => {
    //navigation.navigate('SignUpBreath'); // 'SignUpBreath' 화면으로 이동
  };

  return (
    <MainLayout>
       <ToolBar/>

        {!isInfoInputComplete && <InputInfo setIsInfoInputComplete/>}

        {isInfoInputComplete && <InputPef/>}

       <StandardButton text="다음"/>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #F7F7FB;
  justify-content: space-around;
  align-items: center;
`;

