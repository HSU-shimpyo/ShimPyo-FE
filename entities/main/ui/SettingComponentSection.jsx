import React,{useState} from 'react'
import styled from 'styled-components'

import pill from '../../../assets/images/Pill.png';
import stethoscope from '../../../assets/images/Stethoscope.png';
import SettingComponent from './SettingComponent';

export default function SettingComponentSection() {
const [time, setTime] = useState("30분");
  const [day, setDay] = useState("5일");
  return (
    <MainLayout>
        <SettingComponent text={`약 복용까지 ${time} 남았어요`} img={pill} part={"pill"} />
        <SettingComponent text={`병원 진료까지 ${day} 남았어요`} img={stethoscope} part={"hospital"} />
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
  bottom: 3%;
`;
