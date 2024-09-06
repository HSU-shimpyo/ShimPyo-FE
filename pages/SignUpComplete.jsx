import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpComplete() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login'); // 'Login' 스크린으로 이동
  };

  return (
    <Container>
      <Content>
        <Title>회원가입 완료!</Title>
        <Subtitle>이제 숨쉬러 가볼까요?</Subtitle>
        <Image source={require("../assets/images/icon_ver2.png")} />
      </Content>
      <LoginButton onPress={handleLoginPress}>
        <ButtonText>로그인 하러 가기</ButtonText>
      </LoginButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 40px 24px;
`;

const Content = styled.View`

  align-items: center;
  margin-top:193px;
`;

const Title = styled.Text`
 color: var(--Font-02_black, #111);
text-align: center;

/* MO/Headline/KR/H2_KR_Sb */
font-family: Pretendard;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 38px; /* 135.714% */
letter-spacing: -0.7px;
`;

const Subtitle = styled.Text`
  color: #767676;
text-align: center;
margin-top:16px;
/* MO/Body/KR/B2_KR_Rg */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
`;

const Image = styled.Image`
 display: flex;
width: 250px;
height: 250px;
justify-content: center;
align-items: center;
flex-shrink: 0;
`;

const LoginButton = styled.TouchableOpacity`
  width: 327px;
  height: 56px;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3C63EC;
  margin-bottom:6px;
`;

const ButtonText = styled.Text`
  color:#FFF;
text-align: center;

/* Button/BUT1_Sb */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;
