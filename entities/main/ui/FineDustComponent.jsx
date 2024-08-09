import React from 'react'
import styled from 'styled-components/native'

export default function FineDustComponent({text}) {
  return (
    <MainLayout>
      <DustText>{text}</DustText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 161px;
height : 140px;
background-color : #fff;
border-radius : 20px;
display : flex;
fiex-direction : column;
justify-content : center;
align-items : center;
`;
const StyledStatus = styled.Text`

`;

const DustText = styled.Text`

`;