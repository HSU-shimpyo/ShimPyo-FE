import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {Text} from 'react-native'
import {anguished, good, model, smiling, worried} from '../model/model'
export default function FineDustComponent({value,text}) {
  const [emoji, setEmoji] = useState();
  const [status, setStatus] = useState("보통");
  const [percentage,setPercentage] = useState("");
  const [color, setColor] = useState('')

  useEffect(()=>{
    if (text==="미세먼지") {
        switch (true) { 
          case ( value >= 0 && value <= 30):
            setEmoji(good.emoji);
            setStatus(good.status);
            setColor(good.color)
            setPercentage(good.percentage)
            break;
          case ( value >= 31 && value <= 80):
            setEmoji(smiling.emoji);
            setStatus(smiling.status);
            setColor(smiling.color)
            setPercentage(smiling.percentage)
            break; 
          case ( value >= 81 && value <= 150):
            setEmoji(worried.emoji);
            setStatus(worried.status);
            setColor(worried.color)
            setPercentage(worried.percentage)
            break; 
          case ( value >= 151):
            setEmoji(anguished.emoji);
            setStatus(anguished.status);
            setColor(anguished.color)
            setPercentage(anguished.percentage)
            break;  
        }
    }
    else if(text==="초미세먼지") {
      switch (true) { 
        case ( value >= 0 && value <= 15):
          setEmoji(good.emoji);
          setStatus(good.status);
          setColor(good.color)
          setPercentage(good.percentage)
          break;
        case ( value >= 16 && value <= 35):
          setEmoji(smiling.emoji);
          setStatus(smiling.status);
          setColor(smiling.color)
          setPercentage(smiling.percentage)
          break; 
        case ( value >= 36 && value <= 75):
          setEmoji(worried.emoji);
          setStatus(worried.status);
          setColor(worried.color)
          setPercentage(worried.percentage)
          break; 
        case ( value >= 76):
          setEmoji(anguished.emoji);
          setStatus(anguished.status);
          setColor(anguished.color)
          setPercentage(anguished.percentage)
          break;  
      }
    }
  },[])

  return (
    <MainLayout>

        <Emoji source={emoji}/>

        <ProgressBar>
          <ColorField color={color} percentage={percentage}/>
          <NonColorField percentage={100-percentage}/> 
        </ProgressBar>

        <ValueSection>
          <DustText color={color}>{status}</DustText> 
          <DustText color="#111" letterSpacing="-0.45px">({value}㎍/㎥)</DustText>
        </ValueSection>

        <DustText fontSize="14px" letterSpacing="-0.35px">{text}</DustText> 

    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 161px;
height : 140px;
background-color : #fff;
border-radius : 20px;
display : flex;
fiex-direction : column;
justify-content : space-evenly;
padding: 16px 16px 20px 16px;
`;

const ValueSection = styled.View`
flex-direction : row;
`;
const Emoji = styled.Image`
width : 24px;
height : 24px;
`;

const ProgressBar = styled.View`
width : 126px;
flex-direction : row;
padding-left : 2%;
`;

const NonColorField = styled.View`
width : ${({ percentage }) => `${percentage}%` || '100%'};
height : 2px;
background-color :  ${({ color }) => color || '#D9D9D9'};
`;

const ColorField = styled.View`
width : ${({ percentage }) => `${percentage}%` || '100%'};;
height : 2px;
background-color :  ${({ color }) => color || '#D9D9D9'};
`;

const DustText = styled.Text`
color : ${({ color }) => color || '#777'};
font-size : ${({ fontSize }) => fontSize || '20px'};
font-weight : 600;
letter-spacing:  ${({ letterSpacing }) => letterSpacing || '-0.5px'};
`;