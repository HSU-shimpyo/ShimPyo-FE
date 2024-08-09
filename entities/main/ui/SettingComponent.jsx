import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {Image} from 'react-native'
import NextButton from '../../../assets/images/nextbutton.png'
import { useNavigation } from "@react-navigation/native";

export default function SettingComponent({text,img}) {
  const navigation = useNavigation();

  const handleNextButtonClick = () => {
    img == 3 ? navigation.navigate("MedicineTimeSetting") : navigation.navigate("HospitalTimeSetting")
  }
  return (
    <MainLayout>
      <Icon source={img}/>
      <StyledText onPress={handleNextButtonClick}>{text}</StyledText>
      <Next source={NextButton}/>
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

