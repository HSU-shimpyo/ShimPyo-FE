//점심
import React from 'react'
import styled from 'styled-components/native'
import closeButton from '../../../assets/images/closebutton.png'
import arrowButton from '../../../assets/images/arrow.png'
import { useNavigation } from "@react-navigation/native";

export default function ToolBar({mealTiming, intakeTiming}) {
  const navigation = useNavigation();
  
  const handleArrowButtonClick = () => {
    navigation.navigate("WhenBreakfast",{mealTiming, intakeTiming});
  }

  const handleCloseButtonClick = () => {
    navigation.navigate("Main");
  }
  return (
    <MainLayout>
      <CloseButtonWrapper onPress={handleArrowButtonClick}>
        <ArrowButton source={arrowButton} />
      </CloseButtonWrapper>
     
      <CloseButtonWrapper onPress={handleCloseButtonClick}>
        <CloseButton source={closeButton} />
      </CloseButtonWrapper>
    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  height:56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 margin-top:-375px;

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

