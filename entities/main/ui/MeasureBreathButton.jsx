import React from 'react'
import styled from 'styled-components/native'
import screw from '../../../assets/images/screw.png'
import toucharrow from '../../../assets/images/toucharrow.png'
import measureButton from '../../../assets/images/measurebutton.png'
import { useNavigation } from '@react-navigation/native';

export default function MeasureBreathButton({year, month, day}) {
  const navigation = useNavigation();

  const clickButton = () => {
    navigation.navigate("TodaysShim",{year,month,day})
  }
  return (
    <MainLayout>

      <Wrap onPress={clickButton}>
        <ArrowImage source={toucharrow}/>
        <CircleImg source={measureButton}/>
      </Wrap>
      
      <MeasureButton>
        <WrapScrew>
          <ScrewImg source={screw}/>
          <ScrewImg source={screw}/>
        </WrapScrew>
        <StyledText>오늘의 쉼 측정하기</StyledText>
        <WrapScrew>
          <ScrewImg source={screw}/>
          <ScrewImg source={screw}/>
        </WrapScrew>
      </MeasureButton>

    </MainLayout>
  )
}

const MainLayout = styled.View`
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
const Wrap = styled.TouchableOpacity`
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

const WrapScrew = styled.View`
justify-content : space-between;
`;
const ScrewImg = styled.Image`
width : 5px;
height : 5px;
`;
const ArrowImage = styled.Image`
width : 43.33px;
height : 44px;
position : relative;
right  : 38%;
top : 15%;
`;
const MeasureButton = styled.View`
width : 178px;
height : 34px;
background-color : #3C63EC;
text-align : center;
margin-bottom : 32px;
border-radius: 6px;
flex-direction : row;
justify-content : space-between;
flex-wrap: wrap;
padding : 4px 5px;
`;
const StyledText = styled.Text`
color : #fff;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; 
letter-spacing: -0.4px;
`;
