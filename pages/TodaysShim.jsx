import React, { useState } from 'react';
import styled from 'styled-components';
import AudioRecord from '../entities/BreathMeasure/ui/AudioRecord';
import PlayAudio from '../entities/BreathMeasure/ui/PlayAudio'
import ToolBar from '../shared/component/ToolBar';
import BreathNow from '../entities/BreathMeasure/ui/BreathNow';
import Loading from '../entities/BreathMeasure/ui/Loading';
import Result from '../entities/BreathMeasure/ui/Result';

export default function TodaysShim() {
  const [isComplete, setIsComplete] = useState(false)
  const [isResult, setIsResult] = useState(false)
  return (
    <MainLayout>

        {/* 툴바 */}
        <ToolBar page={isResult===true ? "오늘의 쉼 결과" : "오늘의 쉼"}/>

        {/* 숨 측정 */}
        {!isComplete && !isResult &&  <BreathNow setIsComplete={setIsComplete}/> }
       
        {/* 로딩중 */}
        {isComplete &&  !isResult && <Loading setIsResult={setIsResult}/>}

        {/* 결과 */}
        {isComplete && isResult &&  <Result/> }
       
    </MainLayout>
  );

}

const MainLayout = styled.View`
width : 100%;
height : 100%;
flex-direction : column;
justify-content : space-between;
align-items : center;
`;
