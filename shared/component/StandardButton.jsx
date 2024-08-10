import React from 'react';
import styled from 'styled-components/native';

export default function StandardButton({ text, marginBottom }) {
  return (
    <StyledButton marginBottom={marginBottom}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
}

const StyledButton = styled.TouchableOpacity`
  background-color: #3C63EC;
  width: 320px;
  height: 52px;
  padding: 16px 14px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
