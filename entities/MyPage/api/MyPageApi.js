import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";
import { myInfo } from "../model/model";
export const getPef = async (setPef) => {    
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');
        
        if (token) {
            const response = await axios.get(`${BASE_URL}/api/breathing/myBreathingRate`, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                }
            );
            //console.log(response.data.data.breathingRate);
            return response.data.data.breathingRate;
        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        console.error('error!', error.response?.data || error.message);
    }
};
