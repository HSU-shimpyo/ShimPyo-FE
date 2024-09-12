import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { Dimensions } from 'react-native'; // Necessary for dynamic width
import { BarChart } from 'react-native-gifted-charts';
import { getMonthlyAverage } from '../api/SumHistory';

export default function MonthlyPefAvg() {
  const screenWidth = Dimensions.get('window').width;
  const [averagePef, setAveragePef] = useState(0);
  const [week1, setWeek1] = useState(0); // 기본값 0 설정
  const [week2, setWeek2] = useState(0);
  const [week3, setWeek3] = useState(0);
  const [week4, setWeek4] = useState(0);

  // API 호출
  useEffect(() => {
    getMonthlyAverage().then((res) => {
      const integerBreathingRate = Math.floor(res.monthlyAverage || 0);
      setAveragePef(integerBreathingRate);
      setWeek1(res.week1Average || 0); // 값이 없을 경우 기본값 0
      setWeek2(res.week2Average || 0);
      setWeek3(res.week3Average || 0);
      setWeek4(res.week4Average || 0);
    });
  }, []);

  // 데이터가 설정되었을 때만 barData 생성
  const barData = [
    { value: week1, label: '1주차', frontColor: '#9CC9F5' },
    { value: week2, label: '2주차', frontColor: '#9CC9F5' },
    { value: week3, label: '3주차', frontColor: '#9CC9F5' },
    { value: week4, label: '4주차', frontColor: '#9CC9F5' }
  ];

  const yLabelStyle = {
    color: '#CACAD7',
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: -0.3
  };

  return (
    <MainLayout>
      <WrapText>
        <StyledText><StyledText fontWeight='600'>이주연</StyledText>님의 월간 평균 최대 호기량</StyledText>
        <StyledText fontSize='56px' lineHeight='72px' letterSpacing='-1.4px'>
          {averagePef}<StyledText fontSize='28px' lineHeight='48px' letterSpacing='-0.7px'> Lpm</StyledText>
        </StyledText>
      </WrapText>
      {/* BarChart는 값이 0 이상일 때만 렌더링 */}
      {week1 || week2 || week3 || week4 ? (
        <BarChart
          disableScroll={true}
          maxValue={400}
          minValue={0}
          hideRules={true}
          height={300}
          barWidth={48}
          noOfSections={4}
          barBorderRadius={32}
          frontColor="lightgray"
          data={barData} //생성한 barData 전달
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisLabelStyle={yLabelStyle}
          barMarginBottom={8}
        />
      ) : (
        <StyledText>데이터를 불러오는 중입니다...</StyledText>
      )}
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
