//현재 약 복용 시간 페이지
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native'
// import ToolBar_x from '../entities/MedicineTimeSettingComponent/ui/Toolbar_x';
import ToolBar from '../entities/MedicineTimeSettingComponent/ui/Toolbar';
import MedicineText from '../entities/MedicineTimeSettingComponent/ui/MedicineText';
import { useNavigation } from '@react-navigation/native';
import EatingTimeButton from '../entities/MedicineTimeSettingComponent/ui/EatingTimeButton';
import MealButton from '../entities/MedicineTimeSettingComponent/ui/MealButton';
import ChangeTimeButton from '../entities/MedicineTimeSettingComponent/ui/ChangeTimeButton';
import ChangeTimeButtonChangeTimeButton from '../entities/MedicineTimeSettingComponent/ui/ChangeTimeButton';
import StandardButton from '../shared/component/StandardButton';
import { getTimeSetting } from '../entities/MedicineTimeSettingComponent/api/MedicineTImeSetting';
import { loadTimeSetting } from '../entities/MedicineTimeSettingComponent/model/model';
export default function MedicineTimeSetting() {

  const [isComplete, setIsComplete] = useState(false);
  const [mealTiming, setMealTiming] = useState();
  const [intakeTiming, setIntakeTiming] = useState();
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();
  const navigation = useNavigation();


  useEffect(() => {
    getTimeSetting().then((res) => {
      console.log(res)
      switch (res.mealTiming) {
        case "BEFORE_MEAL": setMealTiming("식전"); break;
        case "AFTER_MEAL": setMealTiming("식후"); break;
        default: break;
      }

      switch (res.intakeTiming) {
        case 0: setIntakeTiming("바로"); break;
        case 30: setIntakeTiming("30분"); break;
        case 60: setIntakeTiming("1시간"); break;
        case 120: setIntakeTiming("2시간"); break;
        default: break;
      }
      setBreakfast(res.breakfast.split(":").slice(0, 2).join(":"))
      setLunch(res.lunch.split(":").slice(0, 2).join(":"))
      setDinner(res.dinner.split(":").slice(0, 2).join(":"))
    })
  }, [])

  const handleButtonClick = () => {
    if (isComplete) {
      navigation.navigate("ChangeMedicine");
    } else {
      setIsComplete(true);
    }
  }
  return (
    <MainLayout>
      {/* 툴바 */}
      {!isComplete && <ToolBar />}
      <Wrap>
        {/* 텍스트 */}
        {!isComplete && <MedicineText />}
        {/* 식전 식후  */}
        {!isComplete && <EatingTimeButton mealTiming={mealTiming} intakeTiming={intakeTiming} />}
        {/* 아침, 점심, 저녁  */}
        {!isComplete && <MealButton breakfast={breakfast} lunch={lunch} dinner={dinner} />}
      </Wrap>

      {/* 재설정하기 버튼 */}
      {!isComplete && <ChangeTimeButton />}
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

const Wrap = styled.View`
width : 100%;
height : 35%;
margin-top : 48px;
`;