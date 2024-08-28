import React from 'react'
import styled from 'styled-components/native'
import closeButton from '../../assets/images/closebutton.png'
import { useNavigation } from "@react-navigation/native";
import {View} from "react-native"
export default function ToolBar({page,marginLeft}) {
  const navigation = useNavigation();
  
  const handleCloseButtonClick = () => {
    navigation.navigate("Main");
  }

  return (
    <MainLayout>

      {/* 레이아웃 용 빈 태그 */}
      <View/>

      {/* 상단바 제목 */}
      <StyledText marginLeft={marginLeft}>{page}</StyledText>

      {/* Close 버튼 */}
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
  z-index : 10;
`;

const StyledText = styled.Text`
  margin-left : 15%;
  font-size: 20px;
  font-weight: 600;
`;

const CloseButtonWrapper = styled.TouchableOpacity`
`;

const CloseButton = styled.Image`
  width: 28px;
  height: 28px;
  margin-right : 24px;
`;
