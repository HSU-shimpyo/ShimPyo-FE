import React from 'react'
import {View, Text} from 'react-native' 
import styled from 'styled-components'
import ToolBar from '../entities/HospitalTimeSettingComponent/ui/ToolBar';
import StandardButton from '../shared/component/StandardButton';
export default function HospitalTimeSetting() {
  return (
    <MainLayout>
      <ToolBar/>
      <View/>
      <StandardButton text={"저장하기"} marginBottom={"53px"}/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
border : 1px solid red;
display : flex;
flex-direction : column;
align-items : center;
justify-content : space-between;
`;