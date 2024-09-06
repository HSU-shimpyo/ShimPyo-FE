import React from 'react'
import styled from 'styled-components/native'
import closeButton from '../../../assets/images/closebutton.png'
import arrowButton from '../../../assets/images/arrow.png'
import { useNavigation } from "@react-navigation/native";

export default function ToolBar() {
  const navigation = useNavigation();
  
  const handleArrowButtonClick = () => {
    navigation.navigate("SignUp");
  }
  const handleCloseButtonClick = () => {
    navigation.navigate("Start");
  }


  return (
    <MainLayout>
      <CloseButtonWrapper onPress={handleArrowButtonClick}>
        <ArrowButton source={arrowButton} />
      </CloseButtonWrapper>
      <Text>
        가입하기
      </Text>
      <CloseButtonWrapper onPress={handleCloseButtonClick}>
        <CloseButton source={closeButton} />
      </CloseButtonWrapper>
    </MainLayout>
  )
}

const MainLayout = styled.View`
  position:absolute;
  top:0;
    z-index: 1000;
  margin-top:58px;
  width: 375px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:#F7F7FB;
  
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const CloseButtonWrapper = styled.TouchableOpacity`
  margin-right: 24px;
`;

const CloseButton = styled.Image`
  width: 28px;
  height: 28px;
`;

const ArrowButton = styled.Image`
  width: 28px;
  height: 28px;
  margin-left:24px;
`;

const Text=styled.Text`
margin-right:30px;
color: #000;
/* MO/Title/KR/T2_KR_Sb */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; /* 140% */
letter-spacing: -0.5px;
`;