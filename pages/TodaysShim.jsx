import React, { useState } from 'react';
import styled from 'styled-components';
import AudioRecord from '../entities/TodaysShim/ui/AudioRecord';
import PlayAudio from '../entities/TodaysShim/ui/PlayAudio'
import ToolBar from '../shared/component/ToolBar';
import BreathNow from '../entities/TodaysShim/ui/BreathNow';
import Loading from '../entities/TodaysShim/ui/Loading';
import Result from '../entities/TodaysShim/ui/Result';

export default function TodaysShim() {
  const [isComplete, setIsComplete] = useState(false)
  const [isResult, setIsResult] = useState(false)
  const [audioFileArray, setAudioFileArray] = useState([]); // 녹음 파일 URI를 저장할 배열
  return (
    <MainLayout>

        {/* 툴바 */}
        <ToolBar page={isResult===true ? "오늘의 쉼 결과" : "오늘의 쉼"}/>

        {/* 숨 측정 */}
        {!isResult && <BreathNow setIsComplete={setIsComplete} setAudioFileArray={setAudioFileArray}/> }
       
        {/* 로딩중 */}
        {isComplete &&  !isResult && <Loading setIsResult={setIsResult}/>}

        {/* 결과 */}
        {isComplete && isResult &&  <Result/> }
       
    </MainLayout>
  );

}

const MainLayout = styled.View`
background-color: #f7f7fb;
width : 100%;
height : 100%;
flex-direction : column;
justify-content : space-between;
align-items : center;
`;
