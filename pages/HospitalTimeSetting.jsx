import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ToolBar from '../shared/component/ToolBar';
import StandardButton from '../shared/component/StandardButton';
import Calendar from '../entities/HospitalTimeSettingComponent/ui/Calendar';
import Complete from '../entities/HospitalTimeSettingComponent/ui/Complete';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import HospitalSearchModal from '../entities/HospitalTimeSettingComponent/ui/HospitalSearchModal';
import HospitalReservationTimeModal from '../entities/HospitalTimeSettingComponent/ui/HospitalReservationTimeModal';
import { getAllHospitalVisit } from '../entities/HospitalTimeSettingComponent/api/HospitalApi';
import ReservationInfoModal from '../entities/HospitalTimeSettingComponent/ui/ReservationInfoModal';

export default function HospitalTimeSetting() {
  const [buttonStatus, setButtonStatus] = useState("일정 추가 하기");
  const [buttonColor, setButtonColor] = useState("#3C63EC")
  const [isComplete, setIsComplete] = useState(false);
  const [isDayClick, setIsDayClick] = useState(false); //true -> 병원 검색 모달 열림, false -> 병원 시간 설정 모달 열림
  const [isHospitalSelected, setIsHospitalSelected] = useState(false) //true -> 병원 검색 모달 열림, false -> 병원 시간 설정 모달 닫침
  const [isReservedDayClick, setIsReservedDayClick] = useState(false) //예약한 날 클릭 시

  const [hospitalId, setHospitalId] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  const [reservationList, setReservationList] = useState([]);

  const navigation = useNavigation();

  const handleButtonClick = () => {
    if (buttonStatus === "홈으로 가기") {
      navigation.navigate("Main");
    } else if (buttonStatus === "일정 추가 하기") {
      setButtonStatus("저장하기")
      setButtonColor("#E5E5EC")
    } else if (buttonStatus === "저장하기") {
      setIsComplete(true)
      setButtonStatus("홈으로 가기")
      setButtonColor("#3C63EC")
    }
  }

  const loadInfo = () => {
    getAllHospitalVisit().then((res) => {
      const visitTimesArray = res.map((item) => {
        const visitTime = moment(item.visitTime);
        return {
          hospitalName : item.hospitalName,
          hospitalAddress : item.hospitalAddress,
          hospitalPhoneNumber : item.hospitalPhoneNumber,
          year: visitTime.year(),
          month: visitTime.month() + 1,
          day: visitTime.date(),
          hour: visitTime.hour(),
          minute: visitTime.format('mm')
        };
      });
      setReservationList(visitTimesArray); // 추출된 객체 배열을 상태로 설정
    });
  }

  useEffect(() => {
    loadInfo()
  }, []);



  return (
    <MainLayout>

      {/* 툴바 */}
      {!isComplete && <ToolBar page={"병원 일정 설정"} />}

      {/* 캘린더 */}
      {!isComplete && <Calendar 
        setIsDayClick={setIsDayClick} 
        setYear={setYear} 
        setMonth={setMonth} 
        setDay={setDay} 
        reservationList={reservationList}
        setIsReservedDayClick={setIsReservedDayClick}
        />}

      {/* 완료 메시지 */}
      {isComplete && <Complete />}

      {/* 버튼 */}
      <StandardButton text={buttonStatus} marginBottom={"53px"} backgroundColor={buttonColor} onPress={handleButtonClick} />

      {/* 병원 검색 모달 */}
      {isDayClick && <HospitalSearchModal setIsDayClick={setIsDayClick} setIsHospitalSelected={setIsHospitalSelected} setHospitalId={setHospitalId} />}

      {/* 병원 예약 시간 */}
      {isHospitalSelected && !isDayClick &&
        <HospitalReservationTimeModal
          setIsDayClick={setIsDayClick}
          setIsHospitalSelected={setIsHospitalSelected}
          setIsComplete={setIsComplete}
          setButtonStatus={setButtonStatus}
          setButtonColor={setButtonColor}
          hospitalId={hospitalId}
          year={year}
          month={month}
          day={day}
          loadInfo={loadInfo}
        />}

        {isReservedDayClick && <ReservationInfoModal
          year={year}
          month={month}
          day={day}
          setIsReservedDayClick={setIsReservedDayClick}
          reservationList={reservationList}
        />}

    </MainLayout>
  );
}

const MainLayout = styled.View`
  background-color: #f7f7fb;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
