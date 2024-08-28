import React, { useState } from 'react'
import styled from 'styled-components'
import ToolBar from '../shared/component/ToolBar';
import MyInfo from '../entities/MyPage/MyInfo';
import PEFInfo from '../entities/MyPage/PEFInfo';
import Menu from '../entities/MyPage/Menu'
import AboutUs from '../entities/MyPage/AboutUs';
export default function MyPage() {
  const [isViewAboutUs, setIsViewAboutUs] = useState(false);
  return (
    <MainLayout>
      
      <ToolBar page={isViewAboutUs ? "About Us" : "마이페이지"}/>

      {!isViewAboutUs && <MyInfo/> }

      {!isViewAboutUs && <PEFInfo/>}

      {!isViewAboutUs && <Menu setIsViewAboutUs={setIsViewAboutUs}/>}

      {isViewAboutUs && <AboutUs/>}

    </MainLayout>
  )
}


const MainLayout = styled.View`
height : 100%;
background-color : #F7F7FB;
`;