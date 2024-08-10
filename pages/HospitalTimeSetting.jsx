import React, { useState } from 'react'
import {View, Text} from 'react-native' 
import styled from 'styled-components'
import ToolBar from '../entities/HospitalTimeSettingComponent/ui/ToolBar';
import StandardButton from '../shared/component/StandardButton';
import Calendar from '../entities/HospitalTimeSettingComponent/ui/Calendar';
export default function HospitalTimeSetting() {
  const [isComplete,setComplete] = useState(true);
  return (
    <MainLayout>

      {/* 툴바 */}
      <ToolBar/>

      {/* 레이아웃 용 빈 태그, 추후 삭제 예정 */}
      <Calendar display={isComplete ? "none" : "flex"}/>

      {/* 버튼 */}
      <StandardButton text={isComplete ? "홈으로 가기" : "저장하기"} marginBottom={"53px"}/>

    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
display : flex;
flex-direction : column;
align-items : center;
justify-content : space-between;
`;