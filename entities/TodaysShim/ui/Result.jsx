import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Graph from './Graph';
import History from './History';
import TitleSection from './TitleSection';

export default function Result() {
  const [status, setStatue] = useState("양호");
  const [PEF, setPEF] = useState("275");
  const [percentage, setPercentage] = useState("20%")
  return (
    <ScrollContainer>
      <MainLayout>

        {/* 상태 / 최대호기속도 / 전날 대비 텍스트 */}
        <TitleSection status={status} PEF={PEF} percentage={percentage}/>

        {/* 상세지표 그래프 */}
        <Graph PEF={PEF}/>

        {/* 지난 7일간 측정 내역 그래프 */}
        <History PEF={PEF}/>

      </MainLayout>
    </ScrollContainer>
  )
}

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  height : 150%;
  background-color: #f7f7fb;
`;

const MainLayout = styled.View`
width : 100%;
position : flex;
z-index : 1 ;
align-items : center;
`;

