import React, { useState } from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native' 
import ToolBar_x from '../entities/MedicineTimeSettingComponent/ui/Toolbar_x';
// import ToolBar from '../entities/MedicineTimeSettingComponent/ui/Toolbar';
import { useNavigation } from '@react-navigation/native';
export default function MedicineTimeSetting() {
  // return (
  //   <MainLayout>
  //     <Text>현재 약 복용 알림 시간</Text>
  //   </MainLayout>
  // )
  const [isComplete, setIsComplete] = useState(false);
  const navigation = useNavigation();
  
  const handleButtonClick = () => {
    if (isComplete) {
      navigation.navigate("Main");
    } else {
      setIsComplete(true);
    }
  }
  return(
    <MainLayout>
            {!isComplete && <ToolBar_x/>}

    </MainLayout>
  );

}

const MainLayout = styled.View`
  background-color: #f7f7fb;
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;