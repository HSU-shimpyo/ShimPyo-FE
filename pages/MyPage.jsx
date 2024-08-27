import React from 'react'
import styled from 'styled-components'
import ToolBar from '../shared/component/ToolBar';
import MyInfo from '../entities/MyPage/MyInfo';
import PEFInfo from '../entities/MyPage/PEFInfo';
import Menu from '../entities/MyPage/Menu'
export default function MyPage() {
  return (
    <MainLayout>
      
      <ToolBar page="마이페이지"/>

      <MyInfo/>

      <PEFInfo/>

      <Menu/>

    </MainLayout>
  )
}


const MainLayout = styled.View`
height : 100%;
background-color : #F7F7FB;
`;