import React from 'react';
import styled from 'styled-components/native';
import closeButton from '../../../assets/images/closebutton.png';
import arrowButton from '../../../assets/images/arrow.png';
import { useNavigation } from "@react-navigation/native";
import InputBox from './InputBox';

export default function SignUpInput() {
  return (
    <MainLayout>
      <InputContainer>
        <Text>이름</Text>
        <InputBox placeholder="이름을 입력해주세요" />
      </InputContainer>
      <InputContainer>
        <Text>아이디</Text>
        <InputBox placeholder="아이디를 입력해주세요" />
      </InputContainer>
      <InputContainer>
        <Text>비밀번호</Text>
        <InputBox placeholder="비밀번호를 입력해주세요" />
      </InputContainer>
      <InputContainer>
        <Text>생년월일</Text>
        <InputBox placeholder="19990111 (8자리)" />
      </InputContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`;

const InputContainer = styled.View`
  margin-bottom: 16px; /* 인풋 박스 간 간격 추가 */
`;

const Text = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.5px;
  margin-bottom: 8px; /* 텍스트와 인풋 박스 사이 간격 */
`;
