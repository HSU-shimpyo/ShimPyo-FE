import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import MeasureBreathButton from '../entities/main/ui/MeasureBreathButton';
import WeeklyCalendar from '../entities/main/ui/WeeklyCalendar';
import FineDustSection from '../entities/main/ui/FineDustSection';
import SettingComponentSection from '../entities/main/ui/SettingComponentSection';
import NavigationBar from '../shared/component/NavigationBar';
import {View} from 'react-native'
export default function Main() {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  useEffect(()=>{
    //console.log(`${year}, ${month}, ${day}`)
  },[,year,month,day])
  return (
    <Container>
    <ScrollContainer>
        <MainLayout>

          {/* 주간캘린더 */}
          <WeeklyCalendar setYear={setYear} setMonth={setMonth} setDay={setDay}/>

          {/* 측정 버튼  */}
          <MeasureBreathButton year={year} month={month} day={day}/>

          {/* 미세먼지 */}
          <FineDustSection/>

          {/* 약 복용 & 병원 진료 알림 설정 */}
          <SettingComponentSection/>

        </MainLayout>
      </ScrollContainer>
      <NavigationBar main/>
    </Container>
        
  )
}

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #f7f7fb;
`;
const Container = styled.View`
width : 100%;
height : 100%;
`;

const MainLayout = styled.View`
  background-color: #f7f7fb;
  width: 100%;
  flex: 1;
  flex-direction: column; 
  align-items: center;
`;

