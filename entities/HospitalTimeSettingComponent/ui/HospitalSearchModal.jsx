import React, { useState } from 'react';
import styled from 'styled-components';
import closeButton from '../../../assets/images/whiteclosebutton.png';
import glasses from '../../../assets/images/glasses.png';
import { View, Modal, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import StandardButton from '../../../shared/component/StandardButton';

export default function HospitalSearchModal({ setIsDayClick, setIsHospitalSelected }) {
  const [isResult, setIsResult] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCloseButtonClick = () => {
    setIsDayClick(false);
  };

  const DoneSearch = () => {
    setIsResult(true);
  };

  const selectedHospital = () => {
    setIsSelected(true);
  };

  const completeButtonClick = () => {
    setIsHospitalSelected(true)
    setIsDayClick(false)
  }

  return (
    <Container intensity={15}>
      <ModalContainer>
        <TopBar>
          <StyledText>병원 검색</StyledText>
          <TouchableOpacity onPress={handleCloseButtonClick}>
            <StyledImg source={closeButton} />
          </TouchableOpacity>
        </TopBar>

        <Input>
          <StyledInput
            placeholder="예약한 병원 이름을 입력해주세요"
            placeholderTextColor="#999"
            onSubmitEditing={DoneSearch}
            returnKeyType="done"
          />
          <GlassesImg source={glasses} />
        </Input>

        {/* 검색 결과 */}
        {isResult ? (
          <ResultTouchableOpacity 
            onPress={selectedHospital} 
            backgroundColor={isSelected ? '#4896EC' : 'transparent'}
            borderRadius={isSelected ? '12px' : '0px' }
          >
            <ResultText marginRight='142px'>제일조아병원</ResultText>
            <ResultText color={isSelected ? '#fff' : '#999'} fontSize="12px" fontWeight="400"  marginTop='8px'>
              경기도 하남시 감일백제로 123(펠리스빌딩 3층)
            </ResultText>
          </ResultTouchableOpacity>
        ) : (
          <View />
        )}

        <StandardButton 
          text="선택 완료"
          color={isSelected ? '#FFFFFF' : '#999999'}
          backgroundColor={isSelected ? '#4896EC' : '#F1F1F5'}
          width="111px"
          height="48px"
          borderRadius="100px"
          fontSize="14px"
          marginBottom="24px"
          onPress={completeButtonClick}
        />
      </ModalContainer>
    </Container>
  );
}

const Container = styled(BlurView)`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 327px;
  height: 448px;
  background-color: rgba(68, 68, 68, 0.8);
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TopBar = styled.View`
  width: 327px;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 14px;
  margin-left: 130px;
`;

const StyledImg = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 24px;
  margin-top: 14px;
`;

const Input = styled.View`
  position: absolute;
  top: 10%;
`;

const GlassesImg = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30%;
  left: 1%;
`;

const StyledInput = styled.TextInput`
  width: 279px;
  height: 52px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  color: #999;
  font-size: 16px;
  font-weight: 400;
  padding-left: 10%;
`;

const ResultTouchableOpacity = styled(TouchableOpacity)`
  position: absolute;
  top: 25%;
  width: 279px;
  height: 72px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  border-radius : ${({ borderRadius }) => borderRadius || '0px'};
  justify-content : center;
  align-items : center;
  padding : 14px  24px 14px 24px;
`;

const ResultText = styled.Text`
  color: ${({ color }) => color || '#fff'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin-right : ${({ marginRight }) => marginRight || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
`;
