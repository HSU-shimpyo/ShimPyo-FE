import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Start from './Start';
export default function FirstSplash() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('FirstSplash mounted');
    const timer = setTimeout(() => {
      console.log('Navigating to Start');
      navigation.replace('Start');
    }, 1000);   //화면 보이는 시간 1초
   
    return () => clearTimeout(timer);
  }, [navigation]);
  

  return (
    <MainLayout>
      <ContentContainer>
        <RowContainer>
          <StyledImage source={require('../assets/images/logo.png')} />
          <StyledImage source={require('../assets/images/name.png')} />
        </RowContainer>
        <TextContainer>
          <StyledText>나만을 위한 천식 관리</StyledText>
        </TextContainer>
      </ContentContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #3C63EC;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #3C63EC;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3C63EC;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #3C63EC;
  margin-top:16px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: #3C63EC;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.45px;
`;
