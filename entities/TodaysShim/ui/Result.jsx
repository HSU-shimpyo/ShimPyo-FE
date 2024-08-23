import React, { useState } from 'react'
import styled from 'styled-components'
import {View} from 'react-native'
import DetailGraph from './Graph';
import TitleSection from './TitleSection';

export default function Result() {
  return (
    <ScrollContainer>
      <MainLayout>

        {/* 상태 / 최대호기속도 / 전날 대비 텍스트 */}
        <TitleSection/>

        {/* 상세지표 그래프 */}
        <DetailGraph type="detail"/>

        {/* 지난 7일간 측정 내역 그래프 */}
        <DetailGraph type="week"/>

      </MainLayout>
    </ScrollContainer>
  )
}

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #f7f7fb;
`;


const MainLayout = styled.View`
width : 100%;
position : absolute;
z-index : 1 ;
align-items : center;
`;

