import React from 'react';
import styled from 'styled-components/native'; // Updated to .native
import { Dimensions } from 'react-native'; // Necessary for dynamic width
import { BarChart } from 'react-native-gifted-charts';

export default function PefAvg() {
    const screenWidth = Dimensions.get('window').width;

    const barData = [
        { value: 235, label: '저번주', frontColor: '#E8EAF6' },
        { value: 275, label: '이번주', frontColor: '#9CC9F5' }
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
                    color="#4AA8EE"
                    fontWeight="600"
                > 
                   20<StyledText color="#4AA8EE" fontSize='32px'>%</StyledText></StyledText> <StyledText fontSize='16px' color="#4AA8EE" fontWeight="600" lineHeight='24px'>증가</StyledText> 하였습니다
                </StyledText>
            </WrapText>
            <BarChart
                disableScroll={true}
                hideAxes={false}
                hideRules={true}
                height={250}
                barWidth={120}
                barBorderRadius={12}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                // yAxisLabelStyle 속성을 제거하여 Y축 라벨을 숨김
                barMarginBottom={8}
                hideYAxisText={true}  // Y축 라벨 숨김
            />
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
    margin-top : 32px;
`;

const WrapText = styled.View`
    width : 100%;
    padding-left : 20px;
`;

const StyledText = styled.Text`
    color:  ${({color}) => color || '#111'};;
    font-family: Pretendard;
    font-size: ${({fontSize}) => fontSize || '14px'};
    font-style: normal;
    font-weight: ${({fontWeight}) => fontWeight || '400'};
    line-height: ${({lineHeight}) => lineHeight || '20px'};
    letter-spacing: ${({letterSpacing}) => letterSpacing || '0.35px'};
`;
