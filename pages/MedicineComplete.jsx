//약 복용 완료 페이지
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ClockImg from '../assets/images/clock.png';
import StandardButton from '../shared/component/StandardButton';

export default function MedicineComplete() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Main'); // 'Main' 화면으로 이동
  };

  return (
    <MainLayout>
      <StyledText fontSize="28px" fontWeight="600" color="#111" marginBottom="16px">
        약 복용 시간 설정 완료
      </StyledText>
      <StyledText fontSize="14px" fontWeight="400" color="#767676" marginBottom="48px">
        까먹지 않도록 약 복용 시간을 알려줄게요!
      </StyledText>
      <StyledImg source={ClockImg} />
      <StandardButton 
        text="홈으로 가기" 
        marginTop="30px" 
        textMarginTop={"-4px"}
        onPress={handlePress} // 버튼 클릭 시 Main 화면으로 이동
      />
    </MainLayout>
  );
}

const MainLayout = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55%;
`;

const StyledText = styled.Text`
  color: ${({ color }) => color || '#111'};
  font-size: ${({ fontSize }) => fontSize || '28px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const StyledImg = styled.Image`
  display: flex;
  width: 158.4px;
  height: 189px;
  justify-content: center;
  align-items: center;
  margin-bottom: 198.4px;
  resize-mode: contain;
`;
