import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function DetailGraph({type}) {
    const [title, setTitle] = useState();
    useEffect(()=>{
       type==="detail" ? setTitle("상세 지표") : setTitle("지난 7일간 측정 내역") 
    },[])
  return (
    <MainLayout>
      <StyledText>
        {title}
      </StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 327px;
height : 379px;
background-color : #fff;
border-radius : 32px;
margin-bottom : 20px;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; /* 140% */
letter-spacing: -0.5px;
color : #111;
padding : 23px 0 0 16px;
`;