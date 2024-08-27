import React from 'react'
import styled from 'styled-components'
import NextButton from '../../assets/images/nextbutton.png'
export default function Menu() {
    const list = ["Push 알림 받기", "이용 약관", "개인 정보 처리 방침", "버전 정보", "About Us"]
  return (
    <MainLayout>
        
            {
                list.map((item,index)=>(
                <WrapMenu key={index} borderBottom={index=== list.length -1 ? "0px" : "1px"}>
                    <StyledText>
                        {item}
                    </StyledText>
                    <Next source={NextButton}/>
                </WrapMenu>
                ))
            }
        
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 327px;
height : 280px;
background-color : #fff;
border-radius : 12px;
margin-left : 24px;
margin-top : 64px;
align-items: center;
shadow-color: rgba(35, 48, 59, 0.15);
shadow-offset: 0px 20px;
shadow-opacity: 0.44;
shadow-radius: 44px;
elevation: 5;
`;

const WrapMenu = styled.View`
flex-direction : row;
width : 90%;
height : 56px;
text-align : left;
padding-top : 20px;
border-bottom-width: ${({ borderBottom }) => borderBottom || '1px'};
border-bottom-color: #F1F1F5;
justify-content : space-between;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 400;
letter-spacing: -0.45px;
color : #111;
`;

const Next = styled.Image`
width : 20px;
height : 20px;
margin-right : 2px;
`;
