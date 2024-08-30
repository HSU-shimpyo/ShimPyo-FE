import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

//이미지
import logo from '../../../assets/images/logo_ver3.png'
import Sum from '../../../assets/images/aboutusSum.png'
import Email from '../../../assets/images/email.png'

export default function Card({ name, email, img, part, marginLeft }) {

    return (
        <Container marginLeft={marginLeft}>

            <TopCard>

                <WrapRound>

                    <Round padding="4px 14px 4px 14px">
                        <StyledText fontSize="14px" color="#3C63EC" lineHeight="20px" letterSpacing="-0.35px" fontWeight="700">
                            {part}
                        </StyledText>
                    </Round>

                    <Round width="28px" height="28px">
                        <Img source={logo} />
                    </Round>

                </WrapRound>

                <Img source={img} width="200px" height="200px" marginBottom="15%" />

            </TopCard>

            <BottomCard>

                <StyledText fontSize="36px" fontWeight="600" lineHeight="44px" letterSpacing="-0.9px" color="#F7F7FB" marginBottom="12px">
                    {name}
                </StyledText>

                <WrapEmail>
                    <Img source={Email} width="13px" height="10px" marginRight="3px" />
                    <StyledText fontWeight="600">E-mail</StyledText>
                </WrapEmail>

                <StyledText>{email}</StyledText>

                <Img
                    source={Sum}
                    width="105px"
                    height="110px"
                    position="absolute"
                />

            </BottomCard>

        </Container>
    )
}
const Container = styled.View`
height : 100%;
margin-right : 32px;
margin-left :  ${({ marginLeft }) => marginLeft || '0px'};
`;

const StyledText = styled.Text`
color: ${({ color }) => color || '#fff'};
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '12px'};
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || '400'};
line-height: ${({ lineHeight }) => lineHeight || '18px'};
letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
margin-bottom :  ${({ marginBottom }) => marginBottom || '0px'};
`;

const TopCard = styled.View`
width : 280px;
height : 324px;
background-color : #3C63EC;
border-radius : 24px;
align-items : center;
justify-content : space-between;
`;
const WrapRound = styled.View`
width : 80%;
margin-top : 24px;
flex-direction : row;
justify-content : space-between;
align-items : center;
`;
const Round = styled.View`
width : ${({ width }) => width || '98px'};
height : ${({ height }) => height || '28px'};
background-color : #F7F7FB;
border-radius : 100px;
padding : ${({ padding }) => padding || '6px'};
`;

const Img = styled.Image`
width : ${({ width }) => width || '16px'};
height : ${({ height }) => height || '16px'};
position : ${({ position }) => position || 'none'};
right : 0;
bottom : 0;
margin-bottom : ${({ marginBottom }) => marginBottom || '0'};
margin-right : ${({ marginRight }) => marginRight || '0'};
`;

const BottomCard = styled.View`
width : 280px;
height : 140px;
background-color : #3C63EC;
border-radius : 24px;
border-top-width: 1px;
border-top-color: #FFFFFF80;
padding-left : 24px;
padding-top : 23px;
`;

const WrapEmail = styled.View`
flex-direction : row;
align-items : center;
`;
