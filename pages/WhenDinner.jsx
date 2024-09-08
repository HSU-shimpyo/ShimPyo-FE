import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import ToolBar from '../entities/WhenDinner/ui/Toolbar';
import DinnerText from '../entities/WhenDinner/ui/DinnerText';
import DinnerTimePicker from '../entities/WhenDinner/ui/DinnerTimePicker';
import DinnerNextButton from '../entities/WhenDinner/ui/DinnerNextButton';
import { timeSetting } from '../entities/WhenDinner/ui/api/TimeSettingApi';
export default function WhenDinner({route}) {
  const {mealTiming, intakeTiming, breakfastTime, lunchTime} = route.params;
  const [isComplete, setIsComplete] = useState(false);
  const [imageToggle, setImageToggle] = useState(false); // 이미지 상태 관리
  const [dinnerTime, setDinnerTime] = useState();
  const navigation = useNavigation();

  const handleButtonClick = () => {
    if (isComplete) {
      timeSetting(mealTiming,intakeTiming,breakfastTime,lunchTime,dinnerTime)
      navigation.navigate('MedicineComplete'); // Complete 페이지로 이동
    } else {
      alert("시간을 먼저 설정해주세요.");
    }
  };

  const handleImagePress = () => {
    setImageToggle(prevState => !prevState); // 이미지 상태 토글
  };

  return (
    <MainLayout>
      <ToolBar 
        mealTiming={mealTiming}
        intakeTiming={intakeTiming}
        breakfastTime={breakfastTime}
       />
      <DinnerText />
      <DinnerTimePicker setIsTimeSettingComplete={setIsComplete} setDinnerTime={setDinnerTime}/>
      
      {/* 이미지가 있는 부분 */}
      <TouchableOpacity onPress={handleImagePress} activeOpacity={1}>
        <ImageWrapper source={imageToggle ? require('../assets/images/Checked.png') : require('../assets/images/NoCheck.png')} />
      </TouchableOpacity>
      
      <ButtonWrapper>
        <DinnerNextButton onPress={handleButtonClick} isComplete={isComplete} />
      </ButtonWrapper>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  background-color: #f7f7fb;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 53px;
  left: 0;
  right: 0;
  align-items: center;
`;

const ImageWrapper = styled(Image)`

  width: 110px;
  height: 22px;
  margin-top:40px;
`;
