import React from 'react'
import styled from 'styled-components'
import ToolBar from '../shared/component/ToolBar';
import NavigationBar from '../shared/component/NavigationBar';


export default function SumHistory() {
  return (
    <MainLayout>
        {/* 상단바 */}
        <ToolBar page="숨 지표"/>

        {/* 네비게이션바 */}
        <NavigationBar history/>    
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 100%;
background-color: #f7f7fb;
justify-content : space-between;
`;
