import React from 'react'
import styled from 'styled-components/native'
import icon from '../../../assets/images/icon_ver1.png'
import toucharrow from '../../../assets/images/toucharrow.png'
import circle from '../../../assets/images/circle.png'
import { useNavigation } from '@react-navigation/native';

export default function MeasureBreathButton() {
  const navigation = useNavigation();

  const clickButton = () => {
    navigation.navigate("TodaysShim")
  }
  return (
    <MainLayout onPress={clickButton} activeOpacity={1}>

      <Wrap>
        <ArrowImage source={toucharrow}/>
        <CircleImg source={circle}/>
        <IconImg source={icon}/>
      </Wrap>
      
      <StyledText>오늘도 쉬어볼까요?</StyledText>

    </MainLayout>
  )
}

const MainLayout = styled.TouchableOpacity`
width : 335px;
height : 322px;
background-color : #fff;
border-radius : 32px;
display : flex;
justify-content : space-between;
align-items : center;
position : relative;
z-index : 1;
bottom : 6%;
shadow-color: rgba(35, 48, 59, 0.15);
shadow-offset: 0px 20px;
shadow-opacity: 0.44;
shadow-radius: 44px;
elevation: 5; 
`;
const Wrap = styled.View`
width : 100%;
height : 80%;
justify-content : center;
align-items : center;
`;
const CircleImg = styled.Image`
width : 200px;
height : 200px;
margin-bottom : 10%;
`;
const IconImg = styled.Image`
width : 150px;
height : 150px;
position : absolute;
left : 27%;
top : 23%;
`;
const ArrowImage = styled.Image`
width : 43.33px;
height : 44px;
position : relative;
right  : 38%;
top : 15%;
`;

const StyledText = styled.Text`
color : #505050;
font-size : 24px;
font-weight: 600;
width : 100%;
height : 20%;
text-align : center;
letter-spacing: -0.6px;
padding-top : 3%;
font-family: Pretendard;
`;
