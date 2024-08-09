import React from 'react'
import {View, Text} from 'react-native' 
import styled from 'styled-components'
export default function MedicineTimeSetting() {
  return (
    <MainLayout>
      <Text>현재 약 복용 알림 시간</Text>
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