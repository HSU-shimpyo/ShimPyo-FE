import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ToolBar from '../entities/SignUpComponent/ui/Toolbar';
import StandardButton from '../shared/component/StandardButton';
import InputComponent from '../entities/SignUpComponent/ui/InputComponent';
import { signUp } from '../entities/SignUpComponent/api/SignUpApi';

export default function SignUp() {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [birth, setBirth] = useState();
  const [pef, setPef] = useState();

  const [isInfoComplete, setIsInfoComplete] = useState(false);
  const [isPefComplete, setIsPefComplete] = useState(false);
  const [isInputComplete, setIsnputComplete] = useState(false);

  const navigation = useNavigation();

  const formatBirthDate = (birth) => {
    // birth는 "20010708" 형식의 문자열로 입력됨
    const year = birth.slice(0, 4);  // 처음 4자리: 연도
    const month = birth.slice(4, 6); // 5번째와 6번째 자리: 월
    const day = birth.slice(6, 8);   // 마지막 2자리: 일
  
    // "2001.07.08" 형식으로 변환하여 반환
    return `${year}.${month}.${day}`;
  };

  const handleButtonClick = () => {
    if (isInfoComplete && !isPefComplete) {
      setIsnputComplete(true);
    } else if (isInfoComplete && isPefComplete) {
      signUp(name, id, password, formatBirthDate(birth), pef);
      navigation.navigate("SignUpComplete")
    }
  };

  useEffect(() => {
    // isInfoComplete 업데이트
    if (name != null && id != null && password != null && birth != null) {
      setIsInfoComplete(true);
    } else {
      setIsInfoComplete(false);
    }

    // isPefComplete 업데이트
    if (pef != null) {
      setIsPefComplete(true);
    } else {
      setIsPefComplete(false);
    }
  }, [name, id, password, birth, pef]);

  return (
    <MainLayout>
      <ToolBar />

      <InputComponent
        setName={setName}
        setId={setId}
        setPassword={setPassword}
        setBirth={setBirth}
        setPef={setPef}
        isInputComplete={isInputComplete}
      />

      <StandardButton
        text={isInfoComplete && isPefComplete ? "완료하기" : "다음"}
        backgroundColor={isInfoComplete && isPefComplete ? "#3C63EC" : "#E5E5EC"}
        onPress={handleButtonClick}
      />
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #F7F7FB;
  justify-content: space-around;
  align-items: center;
`;
