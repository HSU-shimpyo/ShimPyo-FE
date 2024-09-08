import React, { useState } from 'react';
import styled from 'styled-components';
import ExportIcon from '../../assets/images/export.png';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(20); // 기본 입력 창 높이

  const handleContentSizeChange = (event) => {
    const { contentSize } = event.nativeEvent;
    const newHeight = Math.min(contentSize.height, 60); // 최대 높이 60px 제한 (3줄)
    setInputHeight(Math.max(newHeight, 20)); // 최소 높이 20px (한 줄)
  };

  return (
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
            onContentSizeChange={handleContentSizeChange} // 글자 크기 변화 감지
            style={{ height: inputHeight }} // 동적으로 높이 조정
            isFocused={isFocused}
          />
        </InputContainer>
        <WrapIcon>
          <Icon source={ExportIcon} />
        </WrapIcon>
      </Wrap>
    </WrapContainer>
  );
}

const Wrap = styled.View`
  width: 327px;
  height: ${({ inputHeight }) => inputHeight + 32}px; /* 입력창 높이에 패딩을 더함 */
  position: relative;
  background-color: #F1F1F5;
  border-radius: 24px;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#3C63EC' : '#E5E5EC')};
  bottom: 33px;

`;

const WrapContainer = styled.View`
  background-color: #F1F1F5;
`;

const InputContainer = styled.View`
  width: 327px;
  height: ${({ inputHeight }) => inputHeight + 32}px; /* 패딩과 입력창의 높이 조정 */
  display: flex;
  justify-content: center; /* 수직 방향 중앙 정렬 */
  align-items: center; /* 수평 방향 중앙 정렬 */
  border-radius: 24px;
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC1A' : '#F7F7FB')}; /* 둥근 모서리 내부 색상 */
`;

const StyledInput = styled.TextInput`
  width: 252px;
  min-height: 20px;
  max-height: 40px; /* 최대 높이 3줄 */
  padding-left: 14px;
  margin-right: 45px;
  margin-bottom:5px;
  background-color: transparent; /* 내부 색상은 투명 */
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
