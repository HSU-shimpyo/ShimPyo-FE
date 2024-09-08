import React, { useState } from 'react';
import styled from 'styled-components';
import ExportIcon from '../../assets/images/export.png';

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrap>
      <StyledInput
        placeholder="궁금한 점을 숨숨이에게 물어보세요!"
        placeholderTextColor="#767676"
        returnKeyType="done"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused} // 상태 전달
      />
      <WrapIcon>
        <Icon source={ExportIcon} />
      </WrapIcon>
    </Wrap>
  );
}

const Wrap = styled.View`
  width: 327px;
  height: 56px;
  position: relative; /* WrapIcon이 절대 위치를 갖도록 설정 */

`;

const StyledInput = styled.TextInput`
  border: 1px solid ${({ isFocused }) => (isFocused ? '#3C63EC' : '#E5E5EC')};
  background-color: ${({ isFocused }) => (isFocused ? '#3C63EC35' : '#F7F7FB')};
  width: 100%;
  height: 100%;
  border-radius: 24px;
  padding-left: 14px;
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
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 1;
`;
