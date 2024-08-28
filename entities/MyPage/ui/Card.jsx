import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

//이미지
import logo from '../../../assets/images/logo_ver3.png'
import Sum from '../../../assets/images/aboutusSum.png'
import Email from '../../../assets/images/email.png'
import Jy from '../../../assets/images/jy.png'
import Ye from '../../../assets/images/ye.png'
import Hj from '../../../assets/images/hj.png'
import Je from '../../../assets/images/je.png'
import Kn from '../../../assets/images/kn.png'

export default function Card() {
    const [itemWidth, setItemWidth] = useState(0);
    const member =[
        {
            name : "이주연",
            part : "Front-End",
            email : "2191047@hansung.ac.kr",
            img : Jy
        },
        {
            name : "임예은",
            part : "Front-End",
            email : "2271514@hansung.ac.kr",
            img : Ye
        },
        {
            name : "임혜정",
            part : "Back-End",
            email : "2191233@hansung.ac.kr",
            img : Hj
        },
        {
            name : "김정은",
            part : "Back-End",
            email : "2211013@hansung.ac.kr",
            img : Je
        },
        {
            name : "권기남",
            part : "Designer",
            email : "rlska0711@hansung.ac.kr",
            img : Kn
        },
    ];
    
  return (
    <Container>

    <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={{width: `${100 * member.length}%`}}
        scrollEventThrottle={200}
        decelerationRate="fast"
        onContentSizeChange={w => setItemWidth(w / member.length)}
        showsHorizontalScrollIndicator={false}
    >
        {
            member.map((item,index)=>(
                <MainLayout width={itemWidth}>

                    <TopCard>

                        <WrapRound>

                            <Round padding="4px 14px 4px 14px">
                                <StyledText fontSize="14px" color="#3C63EC" lineHeight="20px" letterSpacing="-0.35px" fontWeight="700">
                                    {item.part}
                                </StyledText>
                            </Round>

                            <Round width="28px" height="28px">
                                <Img source={logo}/>
                            </Round>

                        </WrapRound>

                        <Img source={item.img} width="200px" height="200px" marginBottom="15%"/>

                    </TopCard>

                    <BottomCard>

                        <StyledText fontSize="36px" fontWeight="600" lineHeight="44px" letterSpacing="-0.9px" color="#F7F7FB" marginBottom="12px">
                            {item.name}
                        </StyledText>

                        <WrapEmail>
                            <Img source={Email} width="13px" height="10px" marginRight="3px"/>
                            <StyledText fontWeight="600">E-mail</StyledText>
                        </WrapEmail>

                        <StyledText>{item.email}</StyledText>

                        <Img 
                            source={Sum} 
                            width="105px" 
                            height="110px"
                            position="absolute"
                        />

                    </BottomCard>

                </MainLayout>
            ))
        }
    </ScrollView>
    </Container>
  )
}
const Container = styled.View`
height : 60%;

`;

const MainLayout = styled.View`
justify-content : center;
align-items : center;
width : ${({ width }) => width || '20%'};
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
