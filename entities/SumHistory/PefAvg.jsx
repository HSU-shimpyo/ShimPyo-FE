import React from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { Dimensions } from 'react-native'; // Necessary for dynamic width
import { BarChart } from 'react-native-gifted-charts';

export default function PefAvg() {
    const screenWidth = Dimensions.get('window').width;

    const barData = [
        { value: 210, label: '월', frontColor: '#9CC9F5' },
        { value: 300, label: '화', frontColor: '#9CC9F5' },
        { value: 30, label: '수', frontColor: '#F1F1F5' },
        { value: 120, label: '목', frontColor: '#9CC9F5' },
        { value: 270, label: '금', frontColor: '#9CC9F5' },
        { value: 280, label: '토', frontColor: '#9CC9F5' },
        { value: 295, label: '일', frontColor: '#9CC9F5' },
    ];

    const yLabelStyle = {
        color: '#CACAD7',        // X축 라벨 색상
        fontSize: 12,         // X축 라벨 폰트 크기
        fontWeight: 400,   // X축 라벨 폰트 두께
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        lineHeight: 18,
        letterSpacing: -0.3
    }

    return (
        <MainLayout>
            <WrapText>
                <StyledText><StyledText fontWeight='600'>권기남</StyledText>님의 주간 평균 최대 호기량</StyledText>
                <StyledText 
                    fontSize='56px'
                    lineHeight='72px'
                    letterSpacing='-1.4px'
                > 
                    275<StyledText fontSize='28px' lineHeight='48px' letterSpacing='-0.7px'> Lpm</StyledText>
                </StyledText>
            </WrapText>
            <BarChart
                disableScroll={true}
                maxValue={300}
                minValue={0}
                hideRules={true}
                height={300}
                barWidth={20}
                noOfSections={4}
                barBorderRadius={32}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                yAxisLabelStyle={yLabelStyle}
                barMarginBottom={8}
            />
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
width : 100%;
padding-left : 20px;
margin-top : 24px;
`;

const StyledText = styled.Text`
color: #111;
font-family: Pretendard;
font-size: ${({fontSize}) => fontSize || '16px'};
font-style: normal;
font-weight: ${({fontWeight}) => fontWeight || '400'};
line-height: ${({lineHeight}) => lineHeight || '24px'};
letter-spacing: ${({letterSpacing}) => letterSpacing || '-0.4px'};
`;
