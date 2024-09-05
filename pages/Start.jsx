import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native'; // 버튼 컴포넌트 임포트
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 임포트
import StandardButton from '../shared/component/StandardButton';

export default function Start() {
  const handleLoginPress = () => {
    navigation.navigate('Login'); // 'Login' 화면으로 이동
  }
    const navigation = useNavigation(); // 네비게이션 객체 가져오기


  return (
    <MainLayout>
      <ContentContainer>
        <ImageContainer>
          <StyledImage source={require('../assets/images/cutlogo.png')} />
        </ImageContainer>
        <TextContainer>
          <StyledText>나만을 위한</StyledText>
          <StyledText>천식 관리</StyledText>
        </TextContainer>
        <ImageContainer>
          <StyledImageLogo source={require('../assets/images/blackname.png')} />
        </ImageContainer>
        <ButtonContainer>
        <StandardButton 
            text="바로 시작하기" 
            onPress={() => navigation.navigate('SignUp')} // 버튼 클릭 시 Login 화면으로 이동
            width = "327px"
            height = "56px"
            gap = "10px"
            borderRadius={"100px"}
            font-size= {"16px"}
            padding
            font-weight= {"600"}
            letter-spacing={"-0.4px"}
          />
        </ButtonContainer>
        <RowContainer>
        <StyledTextLogin>계정이 있으신가요?</StyledTextLogin>
        <StyledButton title="로그인" onPress={handleLoginPress} />

        </RowContainer>
      </ContentContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  background-color: #F7F7FB;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
background-color: #F7F7FB;
width:166px;

`;

const StyledButton = styled(Button)`
  background-color: #3b5998;
  color: white;
  color: #3C63EC;

font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;

const TextContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  background-color: #F7F7FB;
  margin-top: 16px;
`;

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #F7F7FB;
  width: 100%;
  margin-bottom: -20px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 180px; 
  margin-bottom: 15px; 
  `;



const StyledImageLogo = styled.Image`
width: 100px;
height: 100px;
flex-shrink: 0;
  margin-left: 250px;
`;

const StyledImage = styled.Image`
width:360px;
height:360px;
margin-right:29px;
margin-top:60px;
opacity: 0.5;
`;

const StyledText = styled.Text`
  color: #111;
  background-color: #F7F7FB;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: right;
  margin-right: 26px;
`;

const StyledTextLogin = styled.Text`
  color: #111;
  background-color: #F7F7FB;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: right;
`;

