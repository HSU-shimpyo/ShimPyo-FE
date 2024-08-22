import React, { useState } from 'react';
import styled from "styled-components/native";
import MeasureBreathButton from '../entities/main/ui/MeasureBreathButton';
import WeeklyCalendar from '../entities/main/ui/WeeklyCalendar';
import FineDustSection from '../entities/main/ui/FineDustSection';
import SettingComponent from '../entities/main/ui/SettingComponent';
import SettingComponentSection from '../entities/main/ui/SettingComponentSection';

export default function Main() {
  return (
    <ScrollContainer>
      <MainLayout>

        {/* 주간캘린더 */}
        <WeeklyCalendar />

        {/* 측정 버튼  */}
        <MeasureBreathButton />

        {/* 미세먼지 */}
        <FineDustSection/>

        {/* 약 복용 & 병원 진료 알림 설정 */}
        <SettingComponentSection/>

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
  background-color: #f7f7fb;
  width: 100%;
  flex: 1;
  flex-direction: column; 
  align-items: center;
`;

