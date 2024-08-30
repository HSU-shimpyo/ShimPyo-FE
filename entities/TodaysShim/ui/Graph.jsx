import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function DetailGraph({ PEF }) {
  const screenWidth = Dimensions.get('window').width;

  return (
    <MainLayout>
      <StyledText>상세 지표</StyledText>
      <LineChart
        data={{
          labels: ["1회차", "2회차", "3회차"],
          datasets: [
            {
              data: [190, 150, 275],
            },
          ],
        }}
        withInnerLines={false}
        withOuterLines={false}
        withHorizontalLabels={true}
        segments={3}
        fromZero={true}
        width={screenWidth}
        height={300}
        yAxisInterval={3}
        xLabelsOffset={5}
        yLabelsOffset={40}
        chartConfig={{
          backgroundGradientFrom: "rgb(0,0,0,0.1)",
          backgroundGradientTo: "rgb(0,0,0,0.1)",
          decimalPlaces: 0,
          color: (opacity = 1) => `#3F51B5`, // 차트 선 색상
          labelColor: (opacity = 1) => `#767676`, // 라벨 색상
          fillShadowGradientFrom: '#8FBEEA', // 그라데이션 시작 색상
          fillShadowGradientTo: "#fff", // 그라데이션 끝 색상
          fillShadowGradientFromOpacity: 0.3, // 그라데이션 시작 색상 불투명도
          fillShadowGradientToOpacity: 0.1, // 그라데이션 끝 색상 불투명도
          propsForDots: {
            r: "3",
            strokeWidth: "5",
            fill: "#3F51B5",
          },
          propsForLabels: {
            fontSize: 14,
            fontWeight: "400",
            letterSpacing: -0.35
          },
        }}
        style={{
          marginTop: 31,
          marginLeft: 15,
        }}
      />
      <Mark>
        <MarkText>{PEF}</MarkText>
      </Mark>
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

const Mark = styled.View`
  width: 40px;
  height: 21px;
  border-radius: 100px;
  background-color: #f1f1f5;
  position: absolute;
  top: 17%;
  right: 6%;
  justify-content: center;
  align-items: center;
  shadow-color: rgba(0, 0, 0, 0.10);
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
`;

const MarkText = styled.Text`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  color: #303f9f;
`;
