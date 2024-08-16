import React,{useState} from 'react'
import styled from 'styled-components'
import closeButton from '../../../assets/images/whiteclosebutton.png'
import glasses from '../../../assets/images/glasses.png'
import {View, Modal, TouchableOpacity} from 'react-native'
import { BlurView } from 'expo-blur';
import StandardButton from '../../../shared/component/StandardButton'
import TimePicker from './TimePicker'

export default function HospitalReservationTimeModal({setIsDayClick, setIsHospitalSelected, setIsComplete, setButtonStatus, setButtonColor}) {
    const [isTimeSettingComplete, setIsTimeSettingComplete] = useState(false);

    const CompleteButtonClick = () => {
      setIsHospitalSelected(false)
      setIsDayClick(false)
      setButtonStatus("저장하기")
      setButtonColor("#3C63EC")
    }
  return (
<Container intensity={15}>

  <ModalContainer>

    <TopBar>
      <StyledText>병원 예약 시간</StyledText>
      <TouchableOpacity onPress={()=>setIsHospitalSelected(false)}>
        <StyledImg source={closeButton}/>
      </TouchableOpacity>
    </TopBar>

    <TimePicker setIsTimeSettingComplete={setIsTimeSettingComplete}/>

    <StandardButton 
        text='시간 작성 완료' 
        color={setIsTimeSettingComplete ? '#fff' : '#999'}
        backgroundColor={isTimeSettingComplete ? '#4896EC' : '#F1F1F5'}
        width='137px' 
        height='48px' 
        borderRadius='100px' 
        fontSize='14px'
        marginBottom='24px'
        onPress={CompleteButtonClick}
        />
  </ModalContainer>

</Container>
  )
}


const Container = styled(BlurView)`
width : 100%;
height : 100%;
position : absolute;
justify-content : center;
align-items : center;

`;

const ModalContainer = styled.View`
width : 327px;
height : 331px;
background-color : rgba(68, 68, 68, 0.80);
bottom : 8%;
border-radius : 24px;
flex-direction : column;
align-items : center;
justify-content : space-between;
`;

const TopBar = styled.View`
width : 327px;
height : 56px;
flex-direction : row;
justify-content : space-between;
`;

const StyledText = styled.Text`
color : #fff;
margin-top : 5%; 
font-size : 18px;
font-weight : 600;
margin-top : 14px;
margin-left : 120px;
`;

const StyledImg = styled.Image`
width : 28px;
height : 28px;
margin-right : 24px;
margin-top : 14px;
`;

