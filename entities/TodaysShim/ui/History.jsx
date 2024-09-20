import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-gifted-charts';

export default function History({ labels, data }) {
  const screenWidth = Dimensions.get('window').width;

  const XLabelStyle = {
    fontSize: 12,
    color: '#767676',
    fontWeight: 400
  };

  useEffect(() => {
    console.log("labels", labels);
  }, [labels]);

  // 데이터와 레이블이 비어있지 않은 경우에만 차트 렌더링
  if (!labels.length || !data.length) {
    return <StyledText>데이터가 없습니다.</StyledText>;  // 데이터가 없을 때 표시할 메시지
  }

  // 차트 데이터 구성
  const lineData = labels.map((label, i) => ({
    value: data[i] || 0,  // 데이터가 없으면 0으로 처리
    label: label || ''    // 레이블이 없으면 빈 문자열 처리
  }));

  return (
    <MainLayout>
      <StyledText>지난 7일간 측정 내역</StyledText>
      <WrapChart>
        <LineChart
          disableScroll={true}
          data={lineData}
          height={230}
          color="#275F63"
          dataPointsColor="#275F63"
          thickness={3}
          hideDataPoints={false}
          hideRules={true}
          areaChart={true}
          startFillColor="#8FEAD4"
          startOpacity={0.6}
          endFillColor="#ffffff"
          endOpacity={0.1}
          hideYAxisText={true}
          yAxisThickness={0}
          xAxisThickness={0}
          adjustToWidth={true}
          spacing={40}
          xAxisLabelTextStyle={XLabelStyle}
        />
      </WrapChart>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 327px;
  height: 379px;
  background-color: #fff;
  border-radius: 32px;
  margin-bottom: 20px;
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
  line-height: 28px; 
  letter-spacing: -0.5px;
  color: #111;
  padding: 23px 0 0 16px;
`;

const WrapChart = styled.View`
  width: 100%;
  position: relative;
  left: 3%;
  top: 5%;
`;
