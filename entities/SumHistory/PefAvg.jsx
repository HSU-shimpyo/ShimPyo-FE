import React from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native'; // Necessary for dynamic width

export default function PefAvg() {
    const screenWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: "rgb(0,0,0,0.1)",
          backgroundGradientTo: "rgb(0,0,0,0.1)",
          decimalPlaces: 0,
          color: (opacity = 1) => `#3F51B5`, // 차트 선 색상
          labelColor: (opacity = 1) => `#767676`, // 라벨 색상
          fillShadowGradientFrom: '#9CC9F5', // 그라데이션 시작 색상
          fillShadowGradientTo: "#9CC9F5", // 그라데이션 끝 색상
          fillShadowGradientFromOpacity: 1, // 그라데이션 시작 색상 불투명도
          fillShadowGradientToOpacity: 1, // 그라데이션 끝 색상 불투명도
    };

    const data = {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
            {
                data: [210, 300, 20, 280, 285, 290],
                colors: [
                    () => '#FFA800', // custom bar color
                ],
            },
        ],
    };

    return (
        <MainLayout>
            <BarChart
                style={{ marginVertical: 8 }}
                data={data}
                width={screenWidth - 70} // dynamic width based on screen size
                height={220} // adjusted height
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={chartConfig}
                verticalLabelRotation={30} // rotate labels if needed
                showBarTops={false}
                fromZero={true}
                withInnerLines={false} // disable inner lines
                withHorizontalLabels={true}
                yAxisInterval={1}
                flatColor={true}
            />
        </MainLayout>
    );
}

const MainLayout = styled.View`
    width: 327px;
    height: 493px;
    background-color: #fff;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
`;
