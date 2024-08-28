import React from 'react'
import styled from 'styled-components'
import headphone from '../../assets/images/chatIcon.png'
export default function DefaultChat() {
    const QuestionArray =["호기량 늘리는 운동법", "천식에 좋은 음식", "계절에 따른 천식 관리법", "천식 증상"]
  return (
    <MainLayout>
        <Icon source={headphone}/>  

        <TextSection>
            <StyledText>안녕하세요, 권기남님! 쉼표 AI 챗봇 숨숨이에요. 무엇이 궁금하실까요?</StyledText>
        </TextSection>   

        <DefaultSection>
            {QuestionArray.map((content,index) => (
                    <DefaultQuestion key={index}>
                        <StyledText color="#4188DE">{content}</StyledText>
                    </DefaultQuestion> 
                ))
            }
        </DefaultSection>

    </MainLayout>
  )
}

const MainLayout = styled.View`
width: 258px;
height : 234px;
justify-content : space-between;
margin-left : 24px;
`;  
 
const Icon = styled.Image`
width: 50px;
height: 50px;
margin-bottom : 8px;
`;  

const TextSection = styled.View`
width : 155px;
height : 84px;
background-color : #fff;
border-radius: 0px 8px 8px 8px;
padding : 12px;
margin-bottom : 12px;
`;

const StyledText = styled.Text`
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
color : ${({ color }) => color || '#505050'};
 `;

const DefaultSection = styled.View`
width : 108%;
flex-direction : row;
flex-wrap: wrap;
`;

const DefaultQuestion = styled.View`
background-color : #fff;
align-self: flex-start; 
padding : 8px 12px 8px 12px;
border : 1px solid #4188DE;
border-radius : 100px;
color : #4188DE;
margin-bottom : 8px;
margin-right : 8px;
`;

