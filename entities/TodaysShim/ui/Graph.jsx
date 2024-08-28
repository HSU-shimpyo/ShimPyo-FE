import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {View, Text, Dimensions} from 'react-native'
import { LineChart } from "react-native-chart-kit";



export default function DetailGraph({PEF}) {
    const screenWidth = Dimensions.get('window').width;
  return (
    <MainLayout>
      <StyledText>상세 지표</StyledText>
      <LineChart
        data={{
          labels: ["1회차","2회차","3회차"],
          datasets: [
            {
              data: [190,150,275]
            }
          ]
        }}
        withInnerLines={false} //차트 내부 대시라인 여부
        withOuterLines={false} //차트 외부 대시라인 여부
        withHorizontalLabels={true}
        segments={3} //수평 라인 개수 , 기본값 4
        fromZero={true} //0부터 랜더링
        width={screenWidth} //차트의 너비 조절
        height={300}
        yAxisInterval={3} 
        xLabelsOffset={5}
        yLabelsOffset={40}
        chartConfig={{
          backgroundGradientFrom: "rgb(0,0,0,0.1)",
          backgroundGradientTo: "rgb(0,0,0,0.1)",
          decimalPlaces: 0, //y축 값 소수점
          color: (opacity = 1) => `#3F51B5` , //차트 선 색상
          labelColor: (opacity = 1) => `#767676`, // 라벨 색상
          fillShadowGradientFrom: '#8FBEEA' , //그라데이션 시작 색상
          fillShadowGradientTo: "#fff", //그라데이션 끝 색상
          fillShadowGradientFromOpacity: 1, //시작 색상 불투명도
          fillShadowGradientToOpacity: 0, //끝 색상 불투명도
          propsForDots: {
            r: "0"
          },
          propsForLabels: {
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: -0.35
          }
        }}
        style={{
          marginTop: 31,
          marginLeft : 15
        }}
      />
    <Mark><MarkText>{PEF}</MarkText></Mark>
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

const Mark = styled.View`
width : 40px;
height : 21px;
border-radius : 100px;
background-color : #F1F1F5;
position : absolute;
top : 17%;
right : 6%;
justify-content : center;
align-items : center;
shadow-color: rgba(35, 48, 59, 0.10);
shadow-offset: 0px 20px;
shadow-opacity: 0.1;
shadow-radius: 44px;
`;

const MarkText = styled.Text`
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
letter-spacing: -0.3px;
color : #303F9F;
`;