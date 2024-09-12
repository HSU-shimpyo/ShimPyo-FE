import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import screw from '../../../assets/images/screw.png'
import toucharrow from '../../../assets/images/toucharrow.png'
import measureButton from '../../../assets/images/measurebutton.png'
import { useNavigation } from '@react-navigation/native';
import { getResult } from '../../TodaysShim/api/TodaysShimApi'

//이미지
import GreenSum from '../../../assets/images/greensum.png'
import RedSum from '../../../assets/images/redsum.png'
import YellowSum from '../../../assets/images/yellowsum.png'

export default function MeasureBreathButton({ year, month, day }) {
  const navigation = useNavigation();
  const [isMeasure, setIsMeasure] = useState(false);
  const [pef, setPef] = useState();
  const [status, setStatus] = useState();
  const [color , setColor] = useState();
  const [image,setImage] = useState();

  useEffect(() => {
    getResult().then((res) => {
      if (res === null) {
        setIsMeasure(false)
      } else { setIsMeasure(true) }

      const integerBreathingRate = Math.floor(res.breathingRate);
      setPef(integerBreathingRate)
      setStatus(res.status)
    })

    switch(status) {
      case "양호" : setColor("#04B014"); setImage(GreenSum); break;
      case "경고" : setColor("#FA0"); setImage(YellowSum); break;
      case "위험" : setColor("#DC0000"); setImage(RedSum); break;
    }
  }, [])

  const clickButton = () => {
    navigation.navigate("TodaysShim", { year, month, day, isMeasure })
  }
  return (
    <>
      {
        isMeasure ?
          <MeasuredMainLayout>

            <StyledText color="#767676" fontWeight="400" fontSize="18px" lineHeight="28px" letterSpacing="-0.45px" marginBottom="10px">
              오늘의 최대 호기량
            </StyledText>

            <StyledText color="#111" fontWeight="400" fontSize="56px" lineHeight="72px" letterSpacing="-1.4px">
              {pef} <StyledText color="#111" fontWeight="400" fontSize="28px" lineHeight="38px" letterSpacing="-0.7px">Lpm</StyledText>
            </StyledText>

            <WrapStatus>
              <StyledText color={color} marginBottom="56px">{status}</StyledText>
              <SumImage source={image}/>
            </WrapStatus>

            <ReMeasureButton onPress={clickButton}>
              <StyledText>재측정하기</StyledText>
            </ReMeasureButton>


          </MeasuredMainLayout>

          :

          <MainLayout>

            <Wrap onPress={clickButton}>
              <ArrowImage source={toucharrow} />
              <CircleImg source={measureButton} />
            </Wrap>

            <MeasureButton>
              <WrapScrew>
                <ScrewImg source={screw} />
                <ScrewImg source={screw} />
              </WrapScrew>
              <StyledText>오늘의 쉼 측정하기</StyledText>
              <WrapScrew>
                <ScrewImg source={screw} />
                <ScrewImg source={screw} />
              </WrapScrew>
            </MeasureButton>

          </MainLayout>

      }
    </>

  )
}

const MainLayout = styled.View`
width : 335px;
height : 322px;
background-color : #fff;
border-radius : 32px;
display : flex;
justify-content : space-between;
align-items : center;
position : relative;
z-index : 1;
bottom : 6%;
shadow-color: rgba(35, 48, 59, 0.15);
shadow-offset: 0px 20px;
shadow-opacity: 0.44;
shadow-radius: 44px;
elevation: 5; 
`;

const MeasuredMainLayout = styled.View`
width : 335px;
height : 322px;
background-color : #fff;
border-radius : 32px;
display : flex;
justify-content : space-evenl;
align-items : center;
position : relative;
z-index : 1;
bottom : 6%;
shadow-color: rgba(35, 48, 59, 0.15);
shadow-offset: 0px 20px;
shadow-opacity: 0.44;
shadow-radius: 44px;
elevation: 5; 
padding-top : 40px;
`;

const Wrap = styled.TouchableOpacity`
width : 100%;
height : 80%;
justify-content : center;
align-items : center;
`;
const CircleImg = styled.Image`
width : 200px;
height : 200px;
margin-bottom : 10%;
`;

const WrapScrew = styled.View`
justify-content : space-between;
`;
const ScrewImg = styled.Image`
width : 5px;
height : 5px;
`;
const ArrowImage = styled.Image`
width : 43.33px;
height : 44px;
position : relative;
right  : 38%;
top : 15%;
`;
const MeasureButton = styled.View`
width : '178px';
height : '34px';
background-color : #3C63EC;
text-align : center;
margin-bottom : 32px;
border-radius: 6px;
flex-direction : row;
justify-content : space-between;
flex-wrap: wrap;
padding : 4px 5px;
`;
const StyledText = styled.Text`
color : ${({ color }) => color || '#fff'};
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '16px'};
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || '600'};
line-height: ${({ lineHeight }) => lineHeight || '24px'};
letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.4'};
margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const ReMeasureButton = styled.TouchableOpacity`
width : 247px;
height : 42px;
background-color : #3C63EC;
justify-content : center;
align-items : center;
margin-bottom : 32px;
border-radius: 6px;
padding : 4px 5px;
`;

const SumImage = styled.Image`
width : 28px;
height : 28px;
`;
const WrapStatus = styled.View`
width : 100%;
flex-direction : row;
justify-content : center;
`;