import React from 'react'
import styled from 'styled-components'
import ThisWeekShimStatus from './ThisWeekShimStatus';
import ComparedLastWeek from './ComparedLastWeek';
import PefAvg from './PefAvg';
export default function Contents() {
  return (
    <ScrollViewContainer>
      <MainLayout>
        
        <PefAvg/>

        <ComparedLastWeek/>

        <ThisWeekShimStatus/>

      </MainLayout>
    </ScrollViewContainer>
  )
}

const ScrollViewContainer = styled.ScrollView``;
const MainLayout = styled.View`
justify-content : space-around;
align-items : center;
`;
