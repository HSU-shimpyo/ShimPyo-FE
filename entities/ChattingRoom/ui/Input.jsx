import React, { useState } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD:entities/ChattingRoom/Input.jsx
import { KeyboardAvoidingView, Platform } from 'react-native'; // 추가
import ExportIcon from '../../assets/images/export.png';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(20);

=======
import ExportIcon from '../../../assets/images/export.png';
export default function Input({ content, setContent, onSend }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(20); // 기본 입력 창 높이
  
>>>>>>> a98cb29f9e104de3ed5b0911e352fc5d3a55ab6f:entities/ChattingRoom/ui/Input.jsx
  const handleContentSizeChange = (event) => {
    const { contentSize } = event.nativeEvent;
    const newHeight = Math.min(contentSize.height, 60);
    setInputHeight(Math.max(newHeight, 20));
  };

  const sendMessage = () => {
    onSend(); // 부모 컴포넌트에서 전달된 onSend 함수 호출
  };

  return (
<<<<<<< HEAD:entities/ChattingRoom/Input.jsx
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
=======
      <Wrap>
        <InputContainer isFocused={isFocused} inputHeight={inputHeight}>
          <StyledInput
            placeholder={isFocused ? '': "궁금한 점을 숨숨이에게 물어보세요!"}
            value={content}
            placeholderTextColor="#767676"
            returnKeyType="done"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(text) => setContent(text)}
            onContentSizeChange={handleContentSizeChange} // 글자 크기 변화 감지
            style={{ height: inputHeight }} // 동적으로 높이 조정
            isFocused={isFocused}
            multiline
          />
        </InputContainer>
        <WrapIcon onPress={sendMessage} isFocused={isFocused}>
          <Icon source={ExportIcon} />
        </WrapIcon>
      </Wrap>
>>>>>>> a98cb29f9e104de3ed5b0911e352fc5d3a55ab6f:entities/ChattingRoom/ui/Input.jsx
  );
}

const Wrap = styled.View`
<<<<<<< HEAD:entities/ChattingRoom/Input.jsx
  width: 327px;
  height: ${({ inputHeight }) => inputHeight + 32}px;
  position: relative;
  background-color: #F1F1F5;
  border-radius: 24px;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#3C63EC' : '#E5E5EC')};
=======
width : 100%;
height : 89px;
align-items : center;

>>>>>>> a98cb29f9e104de3ed5b0911e352fc5d3a55ab6f:entities/ChattingRoom/ui/Input.jsx
`;


const InputContainer = styled.View`
  width: 327px;
<<<<<<< HEAD:entities/ChattingRoom/Input.jsx
  height: ${({ inputHeight }) => inputHeight + 32}px;
=======
  height: ${({ inputHeight }) => inputHeight + 32}px; 
>>>>>>> a98cb29f9e104de3ed5b0911e352fc5d3a55ab6f:entities/ChattingRoom/ui/Input.jsx
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
<<<<<<< HEAD:entities/ChattingRoom/Input.jsx
  margin-bottom: 5px;
=======
  margin-bottom:5px;
>>>>>>> a98cb29f9e104de3ed5b0911e352fc5d3a55ab6f:entities/ChattingRoom/ui/Input.jsx
  background-color: transparent;
`;

const WrapIcon = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC' : '#999')};
  border-radius: 100px;
  position: absolute;
  right: 10%;
  top: 12%;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
