import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { View, Text, Dimensions } from 'react-native'
//import { LineChart } from "react-native-chart-kit";
import { LineChart } from 'react-native-gifted-charts';



export default function History({ labels, data }) {
  const screenWidth = Dimensions.get('window').width;

  const XLabelStyle = {
    fontSize: 12, // 라벨 폰트 크기
    color: '#767676', // 라벨 폰트 색상
    fontWeight : 400
  };


  // const lineData = labels.map((label, i) => ({
  //   value: (data[i] !== undefined) ? data[i] : 0, 
  //   label: labels
  // }))

  const lineData = [
    { value: 100, label: '07.03' },
    { value: 150, label: '07.04' },
    { value: 90, label: '07.05' },
    { value: 130, label: '07.06' },
    { value: 140, label: '07.07' },
    { value: 180, label: '07.08' },
    { value: 275, label: '07.09' },
  ];

  return (
    <MainLayout>
      <StyledText>지난 7일간 측정 내역</StyledText>
      <WrapChart>
      <LineChart
        disableScroll={true} // 스크롤 비활성화
        data={lineData} // 차트 데이터
        height={250} // 차트 높이
        color="#275F63" // 라인 색상
        dataPointsColor="#275F63" // 데이터 포인트 색상
        thickness={3} // 라인 두께
        hideDataPoints={false} // 데이터 포인트 표시
        hideRules={true} // Y축의 눈금선 숨기기
        areaChart={true} // 영역 그래프 표시
        startFillColor="#8FEAD4" // 그라데이션 시작 색상
        startOpacity={0.9}
        endFillColor="#ffffff" // 그라데이션 끝 색상
        endOpacity={0.2}
        hideYAxisText={true} // Y축 텍스트 숨기기
        yAxisThickness={0} // Y축 두께 숨기기
        xAxisThickness={0} // X축 두께 숨기기
        adjustToWidth={true} // 화면 너비에 맞춤
        spacing={40} // 데이터 간격 설정
        xAxisLabelTextStyle={XLabelStyle} // X축 라벨 스타일 적용
      />
      </WrapChart>
    </MainLayout>

  )
}

const MainLayout = styled.View`
width : 327px;
height : 379px;
background-color : #fff;
border-radius : 32px;
margin-bottom : 20px;
shadow-color: rgba(0, 0, 0, 0.04);
shadow-offset: 0px 20px;
shadow-opacity: 0.1;
shadow-radius: 44px;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; /* 140% */
letter-spacing: -0.5px;
color : #111;
padding : 23px 0 0 16px;
`;

const WrapChart = styled.View`
width : 100%;
position : relative;
left : 3%;
top : 5%;
`;

const Mark = styled.View`
width : 40px;
height : 21px;
border-radius : 100px;
background-color : #F1F1F5;
position : absolute;
top : 17%;
right : 5%;
justify-content : center;
align-items : center;
shadow-color: rgba(0, 0, 0, 0.10);
shadow-offset: 0px 5px;
shadow-opacity: 0.3;
`;

const MarkText = styled.Text`
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
letter-spacing: -0.3px;
color : #38818D;
`;