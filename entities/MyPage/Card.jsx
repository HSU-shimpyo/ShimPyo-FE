import React from 'react'
import styled from 'styled-components/native'
export default function Card() {
  return (
    <MainLayout>
        <TopCard>
            <WrapRound>
                <Round></Round>
                <Round width="28px" height="28px"></Round>
            </WrapRound>
        </TopCard>
        <BottomCard>
        </BottomCard>
    </MainLayout>
  )
}

const MainLayout = styled.View`

`;

const TopCard = styled.View`
width : 280px;
height : 324px;
background-color : #3C63EC;
border-radius : 24px;
align-items : center;
`;
const WrapRound = styled.View`
width : 80%;
margin-top : 24px;
flex-direction : row;
justify-content : space-between;
align-items : center;
`;
const Round = styled.View`
width : ${({ width }) => width || '70px'};
height : ${({ height }) => height || '20px'};
background-color : #F7F7FB;
border-radius : 100px;
`;

const BottomCard = styled.View`
width : 280px;
height : 140px;
background-color : #3C63EC;
border-radius : 24px;
border-top-width: 1px;
border-top-color: #FFFFFF80;
`;
