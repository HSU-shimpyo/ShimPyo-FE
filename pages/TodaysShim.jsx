import React from 'react';
import styled from 'styled-components';
import AudioRecord from '../entities/BreathMeasure/ui/AudioRecord';
import PlayAudio from '../entities/BreathMeasure/ui/PlayAudio'
import ToolBar from '../shared/component/ToolBar';
import BreathNow from '../entities/BreathMeasure/ui/BreathNow';

import {View} from 'react-native'
export default function TodaysShim() {
  return (
    <MainLayout>
        {/* 툴바 */}
        <ToolBar page={"오늘의 쉼"} marginLeft={"40%"}/>

        <BreathNow/>

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
