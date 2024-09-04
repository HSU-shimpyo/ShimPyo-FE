import React, { useState } from 'react';
import styled from 'styled-components/native'; // '.native'를 사용하여 React Native에서 작동하도록 변경

export default function Input({ type, placeholder }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <MainLayout>
            <StyledText>{type}</StyledText>
            <StyledInput
                placeholder={isFocus ? "" : placeholder}
                placeholderTextColor="#999"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)} 
                backgroundColor={isFocus ? '#DBE1F9' : '#F1F1F5' }
                borderColor={isFocus ? '#8CA2F3' : '#F1F1F5'}
            />
        </MainLayout>
    );
}

const MainLayout = styled.View`
    width: 100%;
`;

const StyledText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
`;

const StyledInput = styled.TextInput`
    width: 327px;
    height: 52px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#F1F1F5'};
    border : 1px solid ${({ borderColor }) => borderColor || '#F1F1F5'};
    border-radius: 12px;
    padding-left: 16px;
`;
