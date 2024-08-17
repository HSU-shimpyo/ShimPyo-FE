import React, { useState } from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native' 
// import ToolBar_x from '../entities/MedicineTimeSettingComponent/ui/Toolbar_x';
import ToolBar from '../entities/MedicineTimeSettingComponent/ui/Toolbar';
import MedicineText from '../entities/MedicineTimeSettingComponent/ui/MedicineText';
import { useNavigation } from '@react-navigation/native';
import EatingTimeButton from '../entities/MedicineTimeSettingComponent/ui/EatingTimeButton';
import MealButton from '../entities/MedicineTimeSettingComponent/ui/MealButton';
import ChangeTimeButton from '../entities/MedicineTimeSettingComponent/ui/ChangeTimeButton';
import ChangeTimeButtonChangeTimeButton from '../entities/MedicineTimeSettingComponent/ui/ChangeTimeButton';
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
          {/* 툴바 */}
            {!isComplete && <ToolBar/>}
          {/* 텍스트 */}
          {!isComplete && <MedicineText/>}
          {/* 식전 식후 버튼  */}
          {!isComplete && <EatingTimeButton/>}
          {/* 아침, 점심, 저녁 버튼 */}
          {!isComplete && <MealButton/>}
          {/* 재설정하기 버튼 */}
          {!isComplete && <ChangeTimeButton/>}


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