import React from 'react'
import styled from 'styled-components/native'
import closeButton from '../../../assets/images/closebutton.png'
import arrowButton from '../../../assets/images/arrow.png'
import { useNavigation } from "@react-navigation/native";

export default function ToolBar() {
  const navigation = useNavigation();
  
  const handleCloseButtonClick = () => {
    navigation.navigate("Main");
  }

  return (
    <MainLayout>
               
      <ArrowButtonWrapper onPress={handleCloseButtonClick}>
         <ArrowButton source={arrowButton} />
      </ArrowButtonWrapper>
      <StyledText>약 알림 설정</StyledText>

    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`;

const StyledText = styled.Text`
    margin-right:140px;
    overflow: hidden;
    color: var(--Font-02_black, #111);
    text-align: center;
    text-overflow: ellipsis;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.5px;

  
`;

const ArrowButtonWrapper = styled.TouchableOpacity`
  margin-left:24px;
`;

const ArrowButton = styled.Image`
  width: 28px;
  height: 28px;
`;
