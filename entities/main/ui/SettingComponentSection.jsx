import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { getTimeLeft } from '../api/MainApi';
import SettingComponent from './SettingComponent';

export default function SettingComponentSection() {

  const [pill,setPill] = useState(30)
  const [hospital,setHospital] = useState()

  useEffect(()=>{
    getTimeLeft(setHospital)
  },[])

  return (
    <MainLayout>

        <SettingComponent type="pill" value={pill} />
        <SettingComponent type="hospital" value={hospital} />
        
    </MainLayout>
  )
}


const MainLayout = styled.View`
width: 100%;
  height: 140px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  bottom: 1%;
`;


