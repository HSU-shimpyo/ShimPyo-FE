import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Graph from './Graph';
import History from './History';
import TitleSection from './TitleSection';
import { getResult } from '../api/TodaysShimApi';

export default function Result() {
  const [status, setStatus] = useState();
  const [PEF, setPEF] = useState();
  const [percentage, setPercentage] = useState()
  const [statusColor,setStatusColor] = useState();
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [direction, setDirection] = useState();
  
  useEffect(()=>{
    getResult().then((res) => {
      const integerBreathingRate = Math.floor(res.breathingRate);
      setPEF(integerBreathingRate)
      setStatus(res.status)
      setPercentage(res.variance)
      setFirst(res.first)
      setSecond(res.second)
      setThird(res.third)
      setDirection(res.rateChangeDirection);
    })
  },[])

  useEffect(()=>{
    switch(status) {
      case "양호" : setStatusColor("#04B014"); break;
      case "경고" : setStatusColor("#FA0");  break;
      case "위험" : setStatusColor("#DC0000");  break;
      default : break;
    }
  },[status])
  return (
    <ScrollContainer>
      <MainLayout>

        {/* 상태 / 최대호기속도 / 전날 대비 텍스트 */}
        <TitleSection status={status} PEF={PEF} percentage={percentage} statusColor={statusColor}/>

        {/* 상세지표 그래프 */}
        <Graph PEF={PEF} first={first} second={second} third={third}/>

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

