import React, { useState } from 'react';
import styled from 'styled-components';
import ExportIcon from '../../../assets/images/export.png';
export default function Input({ content, setContent, onSend }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(20); // 기본 입력 창 높이
  
  const handleContentSizeChange = (event) => {
    const { contentSize } = event.nativeEvent;
    const newHeight = Math.min(contentSize.height, 60); // 최대 높이 60px 제한 (3줄)
    setInputHeight(Math.max(newHeight, 20)); // 최소 높이 20px (한 줄)
  };

  const sendMessage = () => {
    onSend(); // 부모 컴포넌트에서 전달된 onSend 함수 호출
  };

  return (
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
  );
}

const Wrap = styled.View`
width : 100%;
height : 89px;
align-items : center;

`;


const InputContainer = styled.View`
  width: 327px;
  height: ${({ inputHeight }) => inputHeight + 32}px; 
  display: flex;
  justify-content: center; /* 수직 방향 중앙 정렬 */
  align-items: center; /* 수평 방향 중앙 정렬 */
  border-radius: 24px;
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC1A' : '#F7F7FB')}; /* 둥근 모서리 내부 색상 */
`;

const StyledInput = styled.TextInput`
  width: 252px;
  min-height: 20px;
  max-height: 40px;
  padding-left: 14px;
  margin-right: 45px;
  margin-bottom:5px;
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
