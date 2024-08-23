import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const passwordInputRef = useRef();

  const handleLogin = () => {
    const storedUser = 'user123';
    const storedPassword = 'pw123';

    if (username === storedUser && password === storedPassword) {
      setErrorMessage(''); // 로그인 성공 시 에러 메시지 초기화
      navigation.navigate('Main');
    } else {
      setErrorMessage('올바르지 않은 아이디와 비밀번호입니다.');
    }
  };

  const isButtonEnabled = username !== '' && password !== '';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ContentContainer>
          <Logo source={require('../assets/images/BigName.png')} resizeMode="contain" />
          <SubtitleContainer>
            <Subtitle>나만을 위한 천식 관리</Subtitle>
          </SubtitleContainer>
          
          <InputContainer>
            <Label>아이디</Label>
            <StyledInput
              placeholder="아이디를 입력해주세요"
              value={username}
              onChangeText={setUsername}
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current.focus()}
            />
          </InputContainer>

          <InputContainer>
            <Label>비밀번호</Label>
            <StyledInput
              ref={passwordInputRef}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />
          </InputContainer>

          <ButtonContainer>
            {errorMessage !== '' && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}

            <StyledButton
              onPress={handleLogin}
              disabled={!isButtonEnabled}
              isEnabled={isButtonEnabled}
            >
              <ButtonText>로그인</ButtonText>
            </StyledButton>
          </ButtonContainer>
         
        </ContentContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f7f7fb;
`;

const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 16px; /* 버튼과 다른 요소들 간의 간격을 조절 */
  position: absolute;
  bottom: 45px; /* 전체 화면의 하단에서 45px 위로 고정 */
`;

const SubtitleContainer = styled.View`
  height: 28px; 
  justify-content: center;
  margin-bottom: 48px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #767676;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
  margin-left: 8px;
`;

const StyledInput = styled.TextInput`
  width: 327px;
  height: 52px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #f1f1f5;
`;

const ErrorMessage = styled.Text`
  color: #DC0000;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.325px;
  margin-bottom: 24px; 
`;

const StyledButton = styled.Pressable`
  width: 327px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ isEnabled }) => (isEnabled ? '#3C63EC' : '#E5E5EC')};
`;

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
