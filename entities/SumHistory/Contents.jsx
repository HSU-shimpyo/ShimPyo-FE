import React from 'react'
import styled from 'styled-components'
import {Text} from 'react-native'
import PefAvg from './PefAvg';
export default function Contents() {
  return (
    <ScrollViewContainer>
      <MainLayout>
        <PefAvg/>
      </MainLayout>
    </ScrollViewContainer>
  )
}

const ScrollViewContainer = styled.ScrollView``;
const MainLayout = styled.View`
justify-content : center;
align-items : center;
`;
