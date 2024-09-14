import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";
//채팅방 생성
export const makeChatRoom = async () => {
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.post(`${BASE_URL}/api/chat/makeChatRoom`,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                }
            );
            console.log(response.data.data.chatRoomId)
            return response.data.data.chatRoomId
        } else {
            console.log("토큰이 없습니다.");
        }
    } catch (error) {
        console.error('error!', error);
    }
};

//모든 채팅방 목록 조회
export const getAllChatRoom = async () => {    
    try {
      const token = await AsyncStorage.getItem('accessToken');
      
      if (token) {
        const response = await axios.get(`${BASE_URL}/api/chat/getAllChatRoom`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
  
        //console.log(response.data)
        return response.data.data;
      } else {
        console.log("토큰이 없습니다.");
        return "토큰이 없습니다.";
      }
    } catch (error) {
      console.error('error!', error.response?.data || error.message);
      return "error";
    }
  };