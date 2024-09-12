import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { getWeeklyResult } from '../api/TodaysShimApi';



export default function History({ PEF }) {
  const screenWidth = Dimensions.get('window').width;

  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  // 데이터가 유효하지 않은 경우 기본값 0을 설정
  useEffect(() => {
    getWeeklyResult().then((res) => {
      if (res && res.success) {
        const labelsArray = res.data.map((item) => {
          const date = new Date(item.date);
          const formattedDate = `${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
          return formattedDate;
        });

        const dataArray = res.data.map((item) => {
          return item.breathingRate !== null ? item.breathingRate : 0;
        })

        setLabels(labelsArray);
        setData(dataArray);
      }
    })


  }, [])


  return (
    <MainLayout>
      <StyledText>지난 7일간 측정 내역</StyledText>
      <LineChart
        data={{
          labels: ["07.03", "07.04", "07.05", "07.06", "07.07", "07.08", "07.09"],
          datasets: [
            {
              data: [170, 200, 150, 210, 230, 250, 275]
            }
          ]
        }}
        withInnerLines={false} //차트 내부 대시라인 여부
        withOuterLines={false} //차트 외부 대시라인 여부
        withHorizontalLabels={false}
        segments={3} //수평 라인 개수 , 기본값 4
        fromZero={true} //0부터 랜더링
        width={screenWidth - 10} //차트의 너비 조절
        height={300}
        yAxisInterval={3}
        chartConfig={{
          backgroundGradientFrom: "rgb(0,0,0,0.1)",
          backgroundGradientTo: "rgb(0,0,0,0.1)",
          decimalPlaces: 0, //y축 값 소수점
          color: (opacity = 1) => `#275F63`, //차트 선 색상
          labelColor: (opacity = 1) => `#767676`, // 라벨 색상
          fillShadowGradientFrom: '#8FEAD4', //그라데이션 시작 색상
          fillShadowGradientTo: "#fff", //그라데이션 끝 색상
          fillShadowGradientFromOpacity: 0.2, //시작 색상 불투명도
          fillShadowGradientToOpacity: 0.4, //끝 색상 불투명도
          propsForDots: {
            r: "0"
          },
          propsForLabels: {
            fontFamily: 'Pretendard',
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: -0.3,
          }
        }}
        style={{
          marginTop: 31,
          position: 'relative',
          right: 30,
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