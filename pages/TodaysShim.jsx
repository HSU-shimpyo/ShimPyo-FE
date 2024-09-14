import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AudioRecord from '../entities/TodaysShim/ui/AudioRecord';
import PlayAudio from '../entities/TodaysShim/ui/PlayAudio'
import ToolBar from '../shared/component/ToolBar';
import BreathNow from '../entities/TodaysShim/ui/BreathNow';
import Loading from '../entities/TodaysShim/ui/Loading';
import Result from '../entities/TodaysShim/ui/Result';
import { ScrollView } from 'react-native';
import { getResult } from '../entities/TodaysShim/api/TodaysShimApi';

export default function TodaysShim({route}) {
  const {year, month, day,isMeasure} = route.params;
  const [isComplete, setIsComplete] = useState(true)
  const [isResult, setIsResult] = useState(true)
  const [audioFileArray, setAudioFileArray] = useState([]); // 녹음 파일 URI를 저장할 배열

  return (
    <ScrollViewContainer>
      <MainLayout>

      {/* 툴바 */}
      <ToolBar page={ isResult ? "오늘의 쉼 결과" : "오늘의 쉼"}/>

      {/* 숨 측정 */}
      {!isResult && 
        <BreathNow 
          setIsComplete={setIsComplete} 
          audioFileArray={audioFileArray}
          setAudioFileArray={setAudioFileArray}
          year={year}
          month={month}
          day={day}
          isMeasure={isMeasure}
          /> }

      {/* 로딩중 */}
      {isComplete &&  !isResult && <Loading setIsResult={setIsResult}/>}

      {/* 결과 */}
      {isComplete && isResult &&  <Result audioFileArray={audioFileArray}/> }

      </MainLayout>
    </ScrollViewContainer>
  );

}

const ScrollViewContainer = styled.ScrollView`
width : 100%;
height : 100%;
background-color: #f7f7fb;
`;
const MainLayout = styled.View`
flex-direction : column;
justify-content : space-between;
align-items : center;
padding-bottom : 30%;
`;


