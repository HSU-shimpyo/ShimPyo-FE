import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";

//병원 방문 일정 전체 조회 (캘린더 표시)
export const getTimeLeft = async (setHospital) => {    
    try {
        // 로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');
        
        if (token) {
            const response = await axios.get(`${BASE_URL}/api/hospital/getTimeLeft`, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // 헤더에 토큰 넣어주기
                    }
                }
            );

            const { day, hour, minute } = response.data.data;

            //남은 시간을 조건에 따라 반환
            if (day > 0) {
                return setHospital(`${day}일`);
            } else if (hour > 0) {
                return setHospital(`${hour}시간`);
            } else if (minute >= 0) {
                return setHospital(`${minute}분`);
            } else {
                return "시간 정보가 없습니다.";
            }

        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        console.error('error!', error.response?.data || error.message);
    }
};
