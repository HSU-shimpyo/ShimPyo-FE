import React, { useState } from 'react';
import styled from 'styled-components/native';

const InputBox = ({ placeholder, onChangeText,marginTop,position }) => {
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태 관리

  const handleFocus = () => setIsFocused(true); // 입력창에 포커스가 가면 true
  const handleBlur = () => setIsFocused(false); // 포커스가 사라지면 false

  return (
    <Container isFocused={isFocused} marginTop position>
      <StyledTextInput
        placeholder={placeholder}
        onFocus={handleFocus} // 포커스가 갔을 때
        onBlur={handleBlur}   // 포커스가 사라졌을 때
        onChangeText={onChangeText}
      />
    </Container>
  );
};

const Container = styled.View`
  position: ${({position}) => position || 'absolute'};
  top:1;
  z-index: 1000;
  display: flex;
  width: 327px;
  padding: 14px 16px;
  height: 52px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ isFocused }) => (isFocused ? '#DBE1F9' : '#F1F1F5')}; /* 포커스 시 배경색 변경 */
  border: 1px solid ${({ isFocused }) => (isFocused ? '#8CA2F3' : '#F1F1F5')}; /* 포커스 시 테두리 색 변경 */
  border-radius: 12px;
  margin-top: ${({marginTop}) => marginTop || '164px'};
`;

const StyledTextInput = styled.TextInput`
  color: #111;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
  width: 100%; /* 인풋 박스가 컨테이너의 가로를 꽉 채우도록 */
  heigth:20px;
`;

export default InputBox;
