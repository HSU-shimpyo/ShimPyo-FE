import React from 'react';
import styled from 'styled-components/native';
import InputBox from './InputBox';

export default function SignUpInput({ onChange }) {
  return (
    <MainLayout>
      <InputContainer>
        <Text>이름</Text>
        <InputBox placeholder="이름을 입력해주세요" onChangeText={(value) => onChange('name', value)} />
      </InputContainer>
      <InputContainer>
        <Text>아이디</Text>
        <InputBox placeholder="아이디를 입력해주세요" onChangeText={(value) => onChange('username', value)} />
      </InputContainer>
      <InputContainer>
        <Text>비밀번호</Text>
        <InputBox placeholder="비밀번호를 입력해주세요" onChangeText={(value) => onChange('password', value)} />
      </InputContainer>
      <InputContainer>
        <Text>생년월일</Text>
        <InputBox placeholder="19990111 (8자리)" onChangeText={(value) => onChange('birthdate', value)} />
      </InputContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top:-150px;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const Text = styled.Text`
  color: #111;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-left: 8px;
`;
