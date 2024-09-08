import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../shared/config/config';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const passwordInputRef = useRef();

  const navigation = useNavigation();

  const login = async (username, password) => {    
    try {
        const response = await axios.post(`${BASE_URL}/api/signIn`, 
            {
                "loginId": username,
                "password": password
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if(response.data.status === 200) {
          console.log("로그인 성공");
          navigation.navigate('Main'); 

        }
        //로그인으로 발급받은 accessToken 로컬스토리지에 저장하기
        await AsyncStorage.setItem('accessToken', response.data.data.accessToken);
        const token = await AsyncStorage.getItem('accessToken');
        console.log("로컬에 저장된 토큰", token)


    } catch (error) {
        console.error('error!', error.response?.data || error.message);
    }
};

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
          <InputContainers>
            <InputContainer>
              <Label>아이디</Label>
              <StyledInput
                placeholder="아이디를 입력해주세요"
                value={username}
                onChangeText={setUsername}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current.focus()}
                isFocused={isUsernameFocused} // 포커스 상태 전달
                onFocus={() => setIsUsernameFocused(true)} // 포커스 시 상태 변경
                onBlur={() => setIsUsernameFocused(false)} // 포커스 해제 시 상태 변경
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
                isFocused={isPasswordFocused} // 포커스 상태 전달
                onFocus={() => setIsPasswordFocused(true)} // 포커스 시 상태 변경
                onBlur={() => setIsPasswordFocused(false)} // 포커스 해제 시 상태 변경
              />
            </InputContainer>
          </InputContainers>

          <ButtonContainer>
            {errorMessage !== '' && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}

            <StyledButton
              onPress={handleLogin}
              disabled={!isButtonEnabled}
              isEnabled={isButtonEnabled}
            >
              <ButtonText isEnabled={isButtonEnabled}>로그인</ButtonText>
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
  margin-top: 16px;
  position: absolute;
  bottom: 45px;
`;

const SubtitleContainer = styled.View`
  height: 28px; 
  justify-content: center;
  margin-bottom: 48px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #767676;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const InputContainers = styled.View`
  margin-bottom: 242px;
`;

const Label = styled.Text`
  color: #111;
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
  background-color: ${({ isFocused }) => (isFocused ? '#DBE1F9' : '#F1F1F5')}; /* 포커스 시 배경색 변경 */
  border: 1px solid ${({ isFocused }) => (isFocused ? '#8CA2F3' : '#F1F1F5')}; /* 포커스 시 테두리 색 변경 */
  font-size: 16px;
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
  padding: 14px 16px;
  border-radius: 12px;
  background-color: ${({ isEnabled }) => (isEnabled ? '#3C63EC' : '#E5E5EC')};
`;

const ButtonText = styled.Text`
  color: ${({ isEnabled }) => (isEnabled ? '#FFFFFF' : '#999999')};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
