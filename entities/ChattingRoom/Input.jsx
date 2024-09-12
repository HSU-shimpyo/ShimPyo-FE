import React, { useState } from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform } from 'react-native'; // 추가
import ExportIcon from '../../assets/images/export.png';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(20);

  const handleContentSizeChange = (event) => {
    const { contentSize } = event.nativeEvent;
    const newHeight = Math.min(contentSize.height, 60);
    setInputHeight(Math.max(newHeight, 20));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS일 때 패딩 적용
      style={{ flex: 1 }}
    >
      <WrapContainer>
        <Wrap isFocused={isFocused} inputHeight={inputHeight}>
          <InputContainer isFocused={isFocused} inputHeight={inputHeight}>
            <StyledInput
              placeholder="궁금한 점을 숨숨이에게 물어보세요!"
              placeholderTextColor="#767676"
              returnKeyType="done"
              multiline
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onContentSizeChange={handleContentSizeChange}
              style={{ height: inputHeight }}
              isFocused={isFocused}
            />
          </InputContainer>
          <WrapIcon>
            <Icon source={ExportIcon} />
          </WrapIcon>
        </Wrap>
      </WrapContainer>
    </KeyboardAvoidingView>
  );
}

const Wrap = styled.View`
  width: 327px;
  height: ${({ inputHeight }) => inputHeight + 32}px;
  position: relative;
  background-color: #F1F1F5;
  border-radius: 24px;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#3C63EC' : '#E5E5EC')};
`;

const WrapContainer = styled.View`
  background-color: #F1F1F5;
`;

const InputContainer = styled.View`
  width: 327px;
  height: ${({ inputHeight }) => inputHeight + 32}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC1A' : '#F7F7FB')};
`;

const StyledInput = styled.TextInput`
  width: 252px;
  min-height: 20px;
  max-height: 40px;
  padding-left: 14px;
  margin-right: 45px;
  margin-bottom: 5px;
  background-color: transparent;
`;

const WrapIcon = styled.View`
  width: 28px;
  height: 28px;
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC77' : '#999999')};
  border-radius: 100px;
  position: absolute;
  right: 14px;
  top: 14px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
