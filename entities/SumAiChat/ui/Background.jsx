import React from 'react'
import styled from 'styled-components'
import SumIcon from '../../../assets/images/headphoneSum.png'
export default function Background() {
  return (
    <MainLayout>
        <Icon source={SumIcon}/>
        <StyledText>숨숨이 질문방을 생성해보세요!</StyledText>
    </MainLayout>
  )
}
const MainLayout = styled.View`
width : 100%;
align-items : center;
margin-bottom : 180px;
`;
const Icon = styled.Image`
width : 100px;
height : 100px;
margin-bottom : 12px;
`;

const StyledText = styled.Text`
color : #767676;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: -0.4px;
`;

