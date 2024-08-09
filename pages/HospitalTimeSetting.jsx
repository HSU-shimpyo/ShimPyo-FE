import React from 'react'
import {View, Text} from 'react-native' 
import styled from 'styled-components'
export default function HospitalTimeSetting() {
  return (
    <MainLayout>
      <Text>병원 일정 설정</Text>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`;