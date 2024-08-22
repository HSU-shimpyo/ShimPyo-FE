import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {Image, Text, View} from 'react-native'
import NextButton from '../../../assets/images/nextbutton.png'
import { useNavigation } from "@react-navigation/native";

import pill from '../../../assets/images/Pill.png';
import stethoscope from '../../../assets/images/Stethoscope.png';

import 'moment/locale/ko';

export default function SettingComponent({value,type}) {
  const navigation = useNavigation();

  const handleNextButtonClick = () => {
    type == "pill" ? navigation.navigate("MedicineTimeSetting") : navigation.navigate("HospitalTimeSetting")
  }

  return (
    <MainLayout onPress={handleNextButtonClick} activeOpacity={1}>

      {/* 아이콘과 텍스트 */}
      <Wrap>
        <Icon source={type==="pill" ? pill : stethoscope}/> 

        {
          type==="pill" ?
          <StyledText>약 복용까지 <BoldText>{value}분</BoldText> 남았어요</StyledText>
          :
          <StyledText>병원 진료까지 <BoldText>{value}일</BoldText> 남았어요</StyledText>
        }
      </Wrap>
      
      {/* 버튼 */}
      <Next source={NextButton}/>

    </MainLayout>
  )
}

const MainLayout = styled.TouchableOpacity`
width : 335px;
height : 64px;
background-color : #fff;
border-radius : 20px;
display : flex;
flex-direction : row;
justify-content : space-between;
align-items : center;
padding-left : 20px;
`;

const StyledText = styled.Text`
font-size : 16px;
font-weight : 400;
letter-spacing: -0.4px;
`;

const Wrap = styled.View`
flex-direction : row;
`;

const Icon = styled.Image`
width : 20px;
height : 20px;
margin-right : 10px;
`;

const Next = styled.Image`
width : 16.75px;
height : 16px;
margin-right : 20px;
`;

const WrapNextButton = styled.TouchableOpacity`

`;

const BoldText = styled.Text`
font-weight : 600;
`;
