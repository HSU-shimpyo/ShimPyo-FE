import React, { useState } from 'react';
import styled from 'styled-components/native';
import ToolBar from '../entities/HospitalTimeSettingComponent/ui/ToolBar';
import StandardButton from '../shared/component/StandardButton';
import Calendar from '../entities/HospitalTimeSettingComponent/ui/Calendar';
import Complete from '../entities/HospitalTimeSettingComponent/ui/Complete';
import { useNavigation } from '@react-navigation/native';

export default function HospitalTimeSetting() {
  const [isComplete, setIsComplete] = useState(false);
  const navigation = useNavigation();
  
  const handleButtonClick = () => {
    if (isComplete) {
      navigation.navigate("Main");
    } else {
      setIsComplete(true);
    }
  }

  return (
    <MainLayout>

      {/* 툴바 */}
      {!isComplete && <ToolBar/>}

      {/* 캘린더 */}
      {!isComplete && <Calendar/>}

      {/* 완료 메시지 */}
      {isComplete && <Complete/>}

      {/* 버튼 */}
      <StandardButton text={isComplete ? "홈으로 가기" : "저장하기"} marginBottom={"53px"} onPress={handleButtonClick} />

    </MainLayout>
  );
}

const MainLayout = styled.View`
  background-color: #f7f7fb;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
