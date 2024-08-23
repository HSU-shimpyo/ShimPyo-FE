import React from 'react'
import styled from 'styled-components'
export default function Result() {
  return (
    <MainLayout>
        <StyledText>결과 페이지</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
position : absolute;
z-index : 1 ;
justify-content : center;
align-items : center;

`;

const StyledText = styled.Text``;
