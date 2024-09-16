import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ToolBar from '../shared/component/ToolBar';
import NavigationBar from '../shared/component/NavigationBar';
import WeeklyContents from '../entities/SumHistory/ui/WeeklyContents';
import Selector from '../entities/SumHistory/ui/Selector';
import MonthlyContents from '../entities/SumHistory/ui/MonthlyContents';
export default function SumHistory() {
  const [isSelect, setIsSelect] = useState(true)
  return (
    <MainLayout>
      {/* 상단바 */}
      <ToolBar page="숨 지표" />


      <ScrollViewContainer showsVerticalScrollIndicator={false}>
        <Selector isSelect={isSelect} setIsSelect={setIsSelect} />

        <StyledText>매일 측정할수록 더 정확한 최대 호기량을 측정할 수 있어요!</StyledText>

        {
          isSelect ? <WeeklyContents /> : <MonthlyContents />
        }

      </ScrollViewContainer>


      {/* 네비게이션바 */}
      <NavigationBar history />
    </MainLayout>
  )
}

const ScrollViewContainer = styled.ScrollView`
`;
const MainLayout = styled.View`
height : 100%;
background-color: #f7f7fb;
justify-content : space-between;
align-items : center;
`;

const StyledText = styled.Text`
color: #767676;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom : 24px;
text-align : center;
`;