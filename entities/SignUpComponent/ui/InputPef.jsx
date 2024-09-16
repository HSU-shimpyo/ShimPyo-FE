import React from 'react'
import styled from 'styled-components'
import Input from '../../SignUpComponent/ui/Input'

export default function InputPef({setPef}) {
  return (
    <MainLayout>
      <Input type="최대호기량(PEF)" pleacholder="평소 최대호기량을 입력해주세요" setValue={setPef} placeholderTextColor={"#999"}/>
  
     <TextContainer>
        <Image source={require('../../../assets/images/exclamation.png')} />
        <Text>해당 호기량 수치는 초기 기록의 기준치로 사용될 예정입니다.</Text>
      </TextContainer>

    </MainLayout>
  )
}

const MainLayout = styled.View`
  padding-left : 24px;
  margin-top:32px;
`;



const TextContainer=styled.View`
  width:300px;
  display:flex;
  flex-direction:row;
  justify-content:center; 
  align-items:center;
  margin-left:-15px;
`;


const Image=styled.Image`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin-right:4px;
`;

const Text=styled.Text`  
  color: #3C63EC;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; 
  letter-spacing: -0.3px;
`;
