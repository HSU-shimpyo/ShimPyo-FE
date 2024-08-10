import React from 'react'
import styled from 'styled-components/native'
import closeButton from '../../../assets/images/closebutton.png'
import { useNavigation } from "@react-navigation/native";

export default function ToolBar() {
  const navigation = useNavigation();
  
  const handleCloseButtonClick = () => {
    navigation.navigate("Main");
  }

  return (
    <MainLayout>
      <StyledText>병원 일정 설정</StyledText>
      <CloseButtonWrapper onPress={handleCloseButtonClick}>
        <CloseButton source={closeButton} />
      </CloseButtonWrapper>
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
  margin-left: 35%;
  font-size: 20px;
  font-weight: 600;
`;

const CloseButtonWrapper = styled.TouchableOpacity`
  margin-right: 20px;
`;

const CloseButton = styled.Image`
  width: 28px;
  height: 28px;
`;
