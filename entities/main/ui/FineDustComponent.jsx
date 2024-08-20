import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {Text} from 'react-native'

//이모지 이미지
import GoodFace from '../../../assets/images/GoodFace.png'
import SmilingFace from '../../../assets/images/SmilingFace.png'
import WorriedFace from '../../../assets/images/WorriedFace.png'
import AnguishedFace from '../../../assets/images/AnguishedFace.png'

export default function FineDustComponent({value,text}) {
  const [emoji, setEmoji] = useState();
  const [status, setStatus] = useState("보통");
  const [percentage,setPersentage] = useState("");
  const [color, setColor] = useState('')

  useEffect(()=>{
    if (text==="미세먼지") {
        switch (true) { 
          case ( value >= 0 && value <= 30):
            setEmoji(GoodFace);
            setStatus("좋음");
            setColor("#2F66BA")
            setPersentage(20)
            break;
          case ( value >= 31 && value <= 80):
            setEmoji(SmilingFace);
            setStatus("보통");
            setColor("#4AA63C")
            setPersentage(50)
            break; 
          case ( value >= 81 && value <= 150):
            setEmoji(WorriedFace);
            setStatus("나쁨");
            setColor("#FFB02E")
            setPersentage(80)
            break; 
          case ( value >= 151):
            setEmoji(AnguishedFace);
            setStatus("심각");
            setColor("#BB1D80")
            setPersentage(100)
            break;  
        }
    }
    else if(text==="초미세먼지") {
      switch (true) { 
        case ( value >= 0 && value <= 15):
          setEmoji(GoodFace);
          setStatus("좋음");
          setColor("#2F66BA")
          setPersentage(20)
          break;
        case ( value >= 16 && value <= 35):
          setEmoji(SmilingFace);
          setStatus("보통");
          setColor("#4AA63C")
          setPersentage(50)
          break; 
        case ( value >= 36 && value <= 75):
          setEmoji(WorriedFace);
          setStatus("나쁨");
          setColor("#FFB02E")
          setPersentage(80)
          break; 
        case ( value >= 76):
          setEmoji(AnguishedFace);
          setStatus("심각");
          setColor("#BB1D80")
          setPersentage(100)
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
          <DustText color="#111" >({value}㎍/㎥)</DustText>
        </ValueSection>

        <DustText fontSize="14px">{text}</DustText> 

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
`;