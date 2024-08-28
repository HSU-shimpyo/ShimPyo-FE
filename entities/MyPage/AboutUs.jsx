import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import {Text} from "react-native"
export default function AboutUs() {
  return (
    <MainLayout>
        <Card/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
position : absolute;
justify-content : center;
align-items : center;
`;
