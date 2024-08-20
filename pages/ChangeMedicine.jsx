//약 복용 수정하기(전체 페이지)
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native' 
import ToolBar_x from '../entities/MedicineTimeSettingComponent/ui/Toolbar_x';
import WhenMedicineText from '../entities/ChangeMedicineComponent/ui/WhenMedicineText';
import { useNavigation } from '@react-navigation/native';
import EatingTimeButton from '../entities/MedicineTimeSettingComponent/ui/EatingTimeButton';
import MinuteButton from '../entities/ChangeMedicineComponent/ui/MinuteButton';
import ChangeTimeButton from '../entities/ChangeMedicineComponent/ui/ChangeTimeButton';
import ChangeTimeButtonChangeTimeButton from '../entities/MedicineTimeSettingComponent/ui/ChangeTimeButton';
import StandardButton from '../shared/component/StandardButton';
import WhenEatingTimeButton from '../entities/ChangeMedicineComponent/ui/WhenEatingTimeButton';
import Main from '../pages/Main';
export default function ChangeMedicine() {
 
  const [isComplete, setIsComplete] = useState(false);
  const navigation = useNavigation();
  
  const handleButtonClick = () => {
    if (isComplete) {
      navigation.navigate("MedicineComplete");
    } else {
      setIsComplete(true);
    }
  }
  return(
    <MainLayout>
          {/* 툴바 */}
            {!isComplete && <ToolBar_x/>}
          {/* 텍스트 */}
          {!isComplete && <WhenMedicineText/>}
          {/* 식전 식후 버튼  */}
          {!isComplete && <WhenEatingTimeButton/>}
          {/*곧바로 , 30분, 1시간, 2시간 버튼 */}
          {!isComplete && <MinuteButton/>}
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