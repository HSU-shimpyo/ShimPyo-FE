import React from 'react'
import styled from 'styled-components'
import TitleBar from '../entities/SumAiChat/ui/TitleBar'
import Search from '../entities/SumAiChat/ui/Search';
import Background from '../entities/SumAiChat/ui/Background';
import FloatingButton from '../entities/SumAiChat/ui/FloatingButton';
import { ScrollView } from 'react-native';
export default function SumAiChat() {
  return (
    <ScrollView>
        <MainLayout>

        {/* 타이틀 바 */}
        <TitleBar/>

        {/* 검색창 */}
        <Search/>

        {/* 배경 */}
        <Background/>

        {/* 플로팅 버튼 */}
        <FloatingButton/>

        </MainLayout>
    </ScrollView>
  )
}

const MainLayout = styled.View`
  flex: 1;
  align-items :  center;
`;
