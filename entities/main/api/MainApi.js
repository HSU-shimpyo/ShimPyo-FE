// API 호출
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";

export const getTimeLeft = async () => {    
  try {
    const token = await AsyncStorage.getItem('accessToken');
    
    if (token) {
      const response = await axios.get(`${BASE_URL}/api/hospital/getTimeLeft`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const { day, hour, minute } = response.data.data;

      if (day > 0) {
        return `${day}일`;
      } else if (hour > 0) {
        return `${hour}시간`;
      } else if (minute >= 0) {
        return `${minute}분`;
      } else {
        return "시간 정보가 없습니다.";
      }
    } else {
      console.log("토큰이 없습니다.");
      return "토큰이 없습니다.";
    }

  } catch (error) {
    console.error('error!', error.response?.data || error.message);
    return "병원 정보를 가져오는 중 오류가 발생했습니다.";
  }
};