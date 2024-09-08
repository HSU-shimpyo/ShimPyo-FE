import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../../../../shared/config/config'

//병원 검색
export const timeSetting = async (mealTiming, intakeTiming, breakfastTime, lunchTime, dinnerTime) => {
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');

        if (token) {
            const response = await axios.post(`${BASE_URL}/api/medicine/timeSetting`,
                {
                    "mealTiming": mealTiming,   
                    "intakeTiming": intakeTiming, 
                    "breakfast": breakfastTime,
                    "lunch": lunchTime,
                    "dinner" : dinnerTime
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                }
            );

            console.log(response.data);
        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        //console.error('error!', error.response?.data);
    }
};