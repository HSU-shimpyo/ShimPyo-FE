import React from 'react';
import styled from 'styled-components/native';

export default function StandardButton({ text, marginBottom,marginTop,onPress, backgroundColor, width, height , borderRadius, color, fontSize}) {
  return (
    <StyledButton 
      marginBottom={marginBottom} 
      marginTop={marginTop}
      onPress={onPress} 
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      >

      {/* 버튼에 들어갈 텍스트 */}
      <ButtonText color={color} fontSize={fontSize}>{text}</ButtonText>

    </StyledButton>
  );
}

const StyledButton = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }) => backgroundColor || '#3C63EC'};
  width: ${({ width }) => width || '320px'};
  height: ${({ height }) => height || '52px'};
  padding: 16px 14px;
  border-radius: ${({ borderRadius }) => borderRadius || '12px'};
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const ButtonText = styled.Text`
  color: ${({ color }) => color || '#fff'};
  font-size: ${({fontSize}) => fontSize || '16px'};
  font-weight: 600;
`;
