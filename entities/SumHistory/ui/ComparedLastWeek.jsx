import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { Dimensions } from 'react-native'; // Necessary for dynamic width
import { BarChart } from 'react-native-gifted-charts';
import { getDifference, getdifference } from '../api/SumHistory';

export default function ComparedLastWeek() {
  const screenWidth = Dimensions.get('window').width;
  const [lastWeek, setLastWeek] = useState(0);
  const [thisWeek, setThisWeek] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('#000'); // 기본값 설정

  useEffect(() => {
    getDifference().then((res) => {
      const integerLastWeek = Math.floor(res.lastWeekAverage);
      setLastWeek(integerLastWeek);
      const integerThisWeek = Math.floor(res.thisWeekAverage);
      setThisWeek(integerThisWeek);
      setPercentage(res.differencePercent);
      setStatus(res.state);
    });
  }, []); // 의존성 배열을 빈 배열로 설정해 한 번만 실행

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

  const XLabelStyle = {
    fontSize: 15, // 라벨 폰트 크기
    color: '#505050', // 라벨 폰트 색상
    fontWeight : 400
  };

  const maxValue = Math.max(lastWeek, thisWeek);

  const barData = [
    {
      value: (lastWeek !== 0) ? lastWeek : 50,
      label: '저번주',
      frontColor: (lastWeek > thisWeek) ? '#9CC9F5' : '#E8EAF6',
      labelTextStyle: { fontWeight: lastWeek === maxValue ? 600 : 400 }
    },
    {
      value: (thisWeek !== 0) ? thisWeek : 50,
      label: '이번주',
      frontColor: (thisWeek > lastWeek) ? '#9CC9F5' : '#E8EAF6',
      labelTextStyle: { fontWeight: thisWeek === maxValue ? 600 : 400 }
    }
  ];

  return (
    <MainLayout>
      <WrapText>
        <StyledText>저번주 대비 최대 호기량 수치가</StyledText>
        <StyledText>
          <StyledText
            fontSize='56px'
            lineHeight='72px'
            letterSpacing='-1.4px'
            color={color}
            fontWeight="600"
          >
            {percentage}<StyledText color={color} fontSize='32px'>%</StyledText></StyledText> <StyledText fontSize='16px' color={color} fontWeight="600" lineHeight='24px'>{status}</StyledText> 하였습니다
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
          xAxisLabelTextStyle={XLabelStyle}
        />
        <LastWeek color={(lastWeek > thisWeek) ? '#FFF' : '#999'} fontWeight={(lastWeek > thisWeek) ? '600' : '400'}>{lastWeek}</LastWeek>
        <ThisWeek color={(thisWeek > lastWeek) ? '#FFF' : '#999'} fontWeight={(thisWeek > lastWeek) ? '600' : '400'}>{thisWeek}</ThisWeek>
      </WrapChart>
    </MainLayout>
  );
}

const MainLayout = styled.View`
    width: 327px;
    height: 492px;
    background-color: #fff;
    border-radius: 24px;
    justify-content: space-around;
    align-items: center;
    margin-top : 32px;
`;

const WrapText = styled.View`
    width : 100%;
    padding-left : 20px;
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

const LastWeek = styled.Text`
position : absolute;
bottom : 20%;
left : 23%;
color:  ${({ color }) => color || '#111'};
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || 400};
line-height: 34px; /* 141.667% */
letter-spacing: -0.6px;
`;

const ThisWeek = styled.Text`
position : absolute;
bottom : 20%;
right : 18%;
color : ${({ color }) => color || '#111'};
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || 400};
line-height: 34px; /* 141.667% */
letter-spacing: -0.6px;
`;