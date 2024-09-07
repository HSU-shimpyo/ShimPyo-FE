import React from 'react'
import styled from 'styled-components'
import Plus from '../../../assets/images/plus.png'
import { useNavigation } from '@react-navigation/native';

export default function FloatingButton() {
  const navigation = useNavigation();
  const clickButton = () => {
    navigation.navigate("ChattingRoom")
  }
  return (
    <Background activeOpacity={1} onPress={clickButton}>
        <PlusIcon source={Plus}/>
    </Background>
  )
}

const Background = styled.TouchableOpacity`
position: fixed;
z-index: 100;
width : 56px;
height : 56px;
background-color : #3C63EC;
border-radius : 100px;
justify-content : center;
align-items : center;
margin-left : 70%;
 bottom: 40px;
 shadow-color: rgba(0, 0, 0, 0.04); 
shadow-offset: 0px 4px; 
shadow-opacity: 1;
shadow-radius: 4px;
elevation: 5; 

`;

const PlusIcon = styled.Image`
width : 24px;
height : 24px;
`;