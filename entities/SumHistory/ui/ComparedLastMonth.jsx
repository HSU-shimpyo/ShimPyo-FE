import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { Dimensions } from 'react-native'; // Necessary for dynamic width
import { BarChart } from 'react-native-gifted-charts';
import { getMonthlyDifference } from '../api/SumHistory';

export default function ComparedLastMonth() {
  const screenWidth = Dimensions.get('window').width;
  const [lastMonth, setLastMonth] = useState(0);
  const [thisMonth, setThisMonth] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('#000'); // 기본값 설정

  useEffect(() => {
    getMonthlyDifference().then((res) => {
      const lastMonthValue = isNaN(res.lastMonthAverage) ? 0 : parseFloat(res.lastMonthAverage) || 0;
      const thisMonthValue = isNaN(res.thisMonthAverage) ? 0 : parseFloat(res.thisMonthAverage) || 0;

      setLastMonth(lastMonthValue);
      setThisMonth(thisMonthValue);
      setPercentage(res.differencePercent || 0);
      setStatus(res.changeDirection || '');
    }).catch((error) => {
      console.error("Error fetching monthly difference:", error);
    });
  }, []); // 빈 의존성 배열로 한 번만 실행
  const yLabelStyle = {
    color: '#CACAD7',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    letterSpacing: -0.3
  };

  const XLabelStyle = {
    fontSize: 15, // 라벨 폰트 크기
    color: '#505050', // 라벨 폰트 색상
    fontWeight: 400
  };

  // status가 변경될 때 색상을 업데이트하는 useEffect
  useEffect(() => {
    switch (status) {
      case '증가':
        setColor('#4AA8EE');
        break;
      case '감소':
        setColor('#E15241');
        break;
      default:
        setColor('#000'); // 기본 색상
        break;
    }
  }, [status]); // status가 변경될 때마다 실행

  const maxValue = Math.max(lastMonth, thisMonth)

  const barData = [
    {
      value: (lastMonth !== 0) ? lastMonth : 50,
      label: '저번달',
      frontColor: (lastMonth > thisMonth) ? '#9CC9F5' : '#E8EAF6',
      labelTextStyle: { fontWeight: lastMonth === maxValue ? 600 : 400 }
    },
    {
      value: (thisMonth !== 0) ? thisMonth : 50,
      label: '이번달',
      frontColor: (thisMonth > lastMonth) ? '#9CC9F5' : '#E8EAF6',
      labelTextStyle: { fontWeight: thisMonth === maxValue ? 600 : 400 }
    }
  ];

  return (
    <MainLayout>
      <WrapText>
        <StyledText>저번달 대비 최대 호기량 수치가</StyledText>
        <StyledText>
          <StyledText
            fontSize='56px'
            lineHeight='72px'
            letterSpacing='-1.4px'
            color={color}
            fontWeight="600"
          >
            {percentage}<StyledText color="#4AA8EE" fontSize='32px'>%</StyledText>
          </StyledText>
          <StyledText fontSize='16px' color={color} fontWeight="600" lineHeight='24px'>{status}</StyledText> 하였습니다
        </StyledText>
      </WrapText>
      <WrapChart>
        <BarChart
          disableScroll={true}
          hideAxes={false}
          hideRules={true}
          height={250}
          barWidth={130}
          barBorderRadius={12}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          barMarginBottom={8}
          hideYAxisText={true}  // Y축 라벨 숨김
          yAxisTextStyle={yLabelStyle}  // yAxisTextStyle 사용
          xAxisLabelTextStyle={XLabelStyle}
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
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`;

const WrapText = styled.View`
  width: 100%;
  padding-left: 20px;
`;

const WrapChart = styled.View`
  width : 100%;
  position : relative;
  right : 2%;
`;

const StyledText = styled.Text`
  color:  ${({ color }) => color || '#111'};
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  line-height: ${({ lineHeight }) => lineHeight || '20px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0.35px'};
`;
