import React from 'react'
import styled from 'styled-components'
import closeButton from '../../../assets/images/closebutton.png'
import {View, Text} from 'react-native'
export default function ToolBar() {
  return (
    <MainLayout>
        <StyledText>병원 일정 설정</StyledText>
        <CloseButton source={closeButton}/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 56px;
display : flex;
flex-direction : row;
justify-content : space-between;
align-items : center;
margin-top : 42px;

`;

const StyledText = styled.Text`
margin-left : 35%;
font-size: 20px;
font-weight: 600;

`;

const CloseButton = styled.Image`
width : 28px;
height : 28px;
margin-right : 20px;
`;