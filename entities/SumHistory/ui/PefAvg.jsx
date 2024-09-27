import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { Dimensions } from 'react-native'; // Necessary for dynamic width
import { BarChart } from 'react-native-gifted-charts';
import { getWeeklyAverage } from '../api/SumHistory';

export default function PefAvg() {
  const screenWidth = Dimensions.get('window').width;
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];
  const [averagePef, setAveragePef] = useState(0);
  const [data, setData] = useState([]);


  useEffect(() => {
    getWeeklyAverage().then((res) => {
      //if (res && res.success && res.data && res.data.weeklyData) {
      setAveragePef(res.averagePef); // 평균 호흡률 설정
      // breathingRate만 추출하여 data에 저장
      const breathingRates = res.weeklyData.map(item =>
        item.breathingRate !== null ? item.breathingRate : 45
      );
      setData(breathingRates); // 추출한 breathingRate 배열을 상태로 설정
      //}
    });
  }, []);

  // data 배열이 올바르게 설정되었을 때만 barData 생성
  const barData = weeks.map((week, i) => ({
    value: (data[i] !== undefined) ? data[i] : 0,
    label: week,
    frontColor: (data[i] === 45) ? '#F1F1F5' : '#9CC9F5'
  }));

  // const barData = [
  //   {value: 397, label:'화', frontColor: '#9CC9F5'},
  //   {value: 400, label:'월', frontColor: '#9CC9F5'},
  //   {value: 396, label:'일', frontColor: '#9CC9F5'},
  //   {value: 369, label:'토', frontColor: '#9CC9F5'},
  //   {value: 380, label:'월', frontColor: '#9CC9F5'},
  //   {value: 389, label:'화', frontColor: '#9CC9F5'},
  //   {value: 410, label:'수', frontColor: '#9CC9F5'},
  // ]

  const yLabelStyle = {
    color: '#CACAD7',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    letterSpacing: -0.3
  };

  return (
    <MainLayout>
      <WrapText>
        <StyledText><StyledText fontWeight='600'>이주연</StyledText>님의 주간 평균 최대 호기량</StyledText>
        <StyledText fontSize='56px' lineHeight='72px' letterSpacing='-1.4px'>
          {averagePef}<StyledText fontSize='28px' lineHeight='48px' letterSpacing='-0.7px'> Lpm</StyledText>
        </StyledText>
      </WrapText>
      <WrapChart>
        <BarChart
          disableScroll={true}
          maxValue={600}
          minValue={0}
          hideRules={true}
          height={300}
          width={300}
          barWidth={20}
          noOfSections={4}
          barBorderRadius={32}
          frontColor="lightgray"
          data={barData} // 생성한 barData 전달
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={yLabelStyle}  // yAxisTextStyle 사용
          barMarginBottom={8}
          spacing={15}
          //참조선
          // showReferenceLine1={true}     
          // referenceLine1Config={{
          //   value: 100,
          //   color: '#3C63EC',
          //   thickness: 1,
          // }}  
          //initialSpacing={40} //첫번째바 전의 간격
        />
      </WrapChart>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 327px;
  height: 493px;
  background-color: #fff;
  border-radius: 24px;
  justify-content: space-between;
  align-items: center;
`;

const WrapText = styled.View`
  width: 100%;
  padding-left: 20px;
  margin-top: 24px;
`;

const StyledText = styled.Text`
  color: #111;
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.4px'};
`;

const WrapChart = styled.View`
width : 100%;
padding-left : 5%;
margin-bottom : 24px;
`;
