import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts'; { }
export default function Graph({ PEF, first, second, third }) {
  const screenWidth = Dimensions.get('window').width;

  // 데이터가 유효하지 않은 경우 기본값 0을 설정
  const safeData = [first, second, third].map(value => isNaN(value) ? 0 : value);

  // 가장 큰 값 찾기
  const maxValue = Math.max(...safeData);

  const lineData = [
    { value: safeData[0], label: '1회차', labelTextStyle: { color: safeData[0] === maxValue ? '#3776CB' : '#505050', fontWeight : safeData[0] === maxValue ? 600 : 400 } },
    { value: safeData[1], label: '2회차', labelTextStyle: { color: safeData[1] === maxValue ? '#3776CB' : '#505050',  fontWeight : safeData[1] === maxValue ? 600 : 400  } },
    { value: safeData[2], label: '3회차', labelTextStyle: { color: safeData[2] === maxValue ? '#3776CB' : '#505050',  fontWeight : safeData[2] === maxValue ? 600 : 400  } }
  ];

  return (
    <MainLayout>
      <StyledText>상세 지표</StyledText>
      <WrapChart>
        <LineChart
          disableScroll={true} // 스크롤 비활성화
          data={lineData} // 차트 데이터
          height={250} // 차트 높이
          color="#3F51B5" // 라인 색상
          dataPointsColor="#275F63" // 데이터 포인트 색상
          thickness={3} // 라인 두께
          hideDataPoints={false} // 데이터 포인트 표시
          hideRules={true} // Y축의 눈금선 숨기기
          areaChart={true} // 영역 그래프 표시
          startFillColor="#8FBEEA" // 그라데이션 시작 색상
          startOpacity={0.9}
          endOpacity={0}
          endFillColor="#ffffff" // 그라데이션 끝 색상
          hideYAxisText={false} // Y축 텍스트 숨기기
          maxValue={300}
          minValue={0}
          noOfSections={3}
          yAxisThickness={0} // Y축 두께 숨기기
          xAxisThickness={0} // X축 두께 숨기기
          adjustToWidth={true} // 화면 너비에 맞춤
          spacing={115} // 데이터 간격 설정
          xAxisLabelTextStyle={{ //x축 라벨 스타일
            fontSize: 14,
            fontWeight: 400,
            color: '#505050'

          }}
          yAxisLabelTextStyle={{ //y축 라벨 스타일
            fontSize: 12,
            fontWeight: 400,
            color: '#767676'
          }}
          curved={true} //곡선 여부
        />

      </WrapChart>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 327px;
  height: 379px;
  align-items : center;
  background-color: #fff;
  border-radius: 32px;
  margin-bottom: 20px;
  shadow-color: rgba(0, 0, 0, 0.04);
  shadow-offset: 0px 20px;
  shadow-opacity: 0.1;
  shadow-radius: 44px;
`;

const WrapChart = styled.View`
width : 100%;
position : relative;
left : 3%;
top : 5%;
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
  width : 100%;
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
