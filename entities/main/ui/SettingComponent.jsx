import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {Image, Text} from 'react-native'
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
    <MainLayout>

        <Icon source={type==="pill" ? pill : stethoscope}/> 

      {
        type==="pill" ?
        <StyledText>약 복용까지 <BoldText>{value}분</BoldText> 남았어요</StyledText>
         :
        <StyledText>병원 진료까지 <BoldText>{value}일</BoldText> 남았어요</StyledText>
      }

      <WrapNextButton onPress={handleNextButtonClick}>

        <Next source={NextButton}/>

      </WrapNextButton>

    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 335px;
height : 64px;
background-color : #fff;
border-radius : 20px;
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
`;

const StyledText = styled.Text`
font-size : 16px;
font-weight : 400;
margin-right : 20%;
`;

const Icon = styled.Image`
width : 24px;
height : 24px;
margin-right : 5%;
`;

const Next = styled.Image`
width : 16.75px;
height : 16px;
`;

const WrapNextButton = styled.TouchableOpacity`

`;

const BoldText = styled.Text`
font-weight : 600;
`;
