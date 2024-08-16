import React, { useState } from 'react';
import styled from "styled-components/native";
import MeasureBreathButton from '../entities/main/ui/MeasureBreathButton';
import WeeklyCalendar from '../entities/main/ui/WeeklyCalendar';
import FineDustComponent from '../entities/main/ui/FineDustComponent';
import SettingComponent from '../entities/main/ui/SettingComponent';
import pill from '../assets/images/Pill.png';
import stethoscope from '../assets/images/Stethoscope.png';

export default function Main() {
  const [time, setTime] = useState("30분");
  const [day, setDay] = useState("5일");

  return (
    <ScrollContainer>
      <MainLayout>

        {/* 주간캘린더 */}
        <WeeklyCalendar />

        {/* 측정 버튼  */}
        <MeasureBreathButton />

        {/* 미세먼지 */}
        <FineDustComponentContainer>
          <FineDustComponent text={"미세먼지"} />
          <FineDustComponent text={"초미세먼지"} />
        </FineDustComponentContainer>

        {/* 약 복용 & 병원 진료 알림 설정 */}
        <SettingComponentContainer>
          <SettingComponent text={`약 복용까지 ${time} 남았어요`} img={pill} />
          <SettingComponent text={`병원 진료까지 ${day} 남았어요`} img={stethoscope} />
        </SettingComponentContainer>

      </MainLayout>
    </ScrollContainer>
  )
}

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const MainLayout = styled.View`
  background-color: #f7f7fb;
  width: 100%;
  flex: 1;
  flex-direction: column; 
  align-items: center;
`;

const FineDustComponentContainer = styled.View`
  width: 100%;
  height: 140px;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  bottom: 10%;
  margin-left: 20px;
  margin-right: 20px;
`;

const SettingComponentContainer = styled.View`
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

