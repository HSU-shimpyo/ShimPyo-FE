import React from 'react'
import styled from 'styled-components'
import ThisWeekShimStatus from './ThisWeekShimStatus';
import ComparedLastWeek from './ComparedLastWeek';
import PefAvg from './PefAvg';
import Info from './Info'
export default function WeeklyContents() {
  return (
      <MainLayout>
        
        <PefAvg/>

        <ComparedLastWeek/>

        <ThisWeekShimStatus/>

        <Info/>

      </MainLayout>
  )
}

const MainLayout = styled.View`
justify-content : space-around;
align-items : center;
`;
