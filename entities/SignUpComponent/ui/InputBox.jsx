import React, { useState } from 'react';
import styled from 'styled-components/native';

const InputBox = ({placeholder}) => {
  const [text, setText] = useState('');

  return (
    <Container>
      <StyledTextInput
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
      />
    </Container>
  );
};


const Container = styled.View`
  display: flex;
  width: 327px;
  padding: 14px 16px;
  height: 52px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F1F1F5;
  border-radius: 12px;
`;

const StyledTextInput = styled.TextInput`
  color: #999999;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  width: 100%; /* 인풋 박스가 컨테이너의 가로를 꽉 채우도록 */
`;

export default InputBox;
