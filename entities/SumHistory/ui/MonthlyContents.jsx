import React from 'react'
import styled from 'styled-components'
import MonthPefAvg from './MonthlyPefAvg';
import ComparedLastMonth from './ComparedLastMonth';
import ThisMonthShimStatus from './ThisMonthShimStatus';
import Info from './Info';
export default function MonthContents() {
  return (
      <MainLayout>
        
        <MonthPefAvg/>

        <ComparedLastMonth/>

        <ThisMonthShimStatus/>

        <Info/>

      </MainLayout>
  )
}

const MainLayout = styled.View`
justify-content : space-around;
align-items : center;
`;