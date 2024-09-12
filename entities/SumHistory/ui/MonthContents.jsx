import React from 'react'
import styled from 'styled-components'
import {Text} from 'react-native'
export default function MonthContents() {
  return (
      <MainLayout>
        
        <Text>월간 숨 지표</Text>

      </MainLayout>
  )
}

const MainLayout = styled.View`
justify-content : space-around;
align-items : center;
`;