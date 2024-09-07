import React from 'react'
import styled from 'styled-components'
import SumIcon from '../../../assets/images/headphoneSum.png'
export default function Background() {
  return (
    <MainLayout>
        <IconContainer> 
          <Icon source={SumIcon}/>
        <StyledText>숨숨이 질문방을 생성해보세요!</StyledText>
    </IconContainer>
    </MainLayout>
       
  )
}
const MainLayout = styled.View`
width : 100%;
height:69%;      
align-items : center;

`;
const Icon = styled.Image`
width : 100px;
height : 100px;
margin-bottom : 12px;
justify-content:center;
align-items : center;
display:flex;
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

const IconContainer=styled.View`
justify-content:center;
align-items: center;
display:flex;
`;