import React from 'react'
import styled from 'styled-components/native'
import icon from '../../../assets/images/icon_ver1.png'
import toucharrow from '../../../assets/images/toucharrow.png'
export default function MeasureBreathButton() {
  return (
    <MainLayout>
      <ArrowImage source={toucharrow}/>
      <CircleLayout>
          <IconImg source={icon}/>
      </CircleLayout>
        <StyledText>오늘도 쉬어볼까요?</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 335px;
height : 322px;
background-color : #fff;
border-radius : 32px;
display : flex;
justify-content : center;
align-items : center;
position : relative;
bottom : 8%;
shadow-color: rgba(35, 48, 59, 0.15);
shadow-offset: 0px 20px;
shadow-opacity: 0.44;
shadow-radius: 44px;
elevation: 5; 
`;
const CircleLayout = styled.View`
width : 200px;
height : 200px;
background-color : #f1f1f5;
border-radius : 100px;
display : flex;
justify-content : center;
align-items : center;
position : relative;
bottom : 8%; 
`;
const IconImg = styled.Image`
width : 150px;
height : 150px;
`;
const ArrowImage = styled.Image`
width : 43.33;
height : 44;
position : relative;
right : 38%;
top : 8%;
`;

const StyledText = styled.Text`
color : #505050;
font-size : 24px;
font-weight: 600;
line-height: 34px;
letter-spacing: -0.6px;
margin-bottom : 6%;
`;
