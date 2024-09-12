import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {BASE_URL} from '../../../shared/config/config'

//주간 평균 최대 호기량
export const getWeeklyAverage = async () => {  
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');      
        if (token) {
            const response = await axios.get(`${BASE_URL}/api/breathing/weekly/average`,
                {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                }     
            );
            //console.log(response.data.data.averagePef)
            return response.data.data;
        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        console.error('error!', error.response?.data);
    }
};

//이번주-지난주 비교
export const getDifference = async () => {  
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');      
        if (token) {
            const response = await axios.get(`${BASE_URL}/api/breathing/weekly/difference`,
                {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                }     
            );
            console.log(response.data.data)
            return response.data.data;
        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        console.error('error!', error.response?.data);
    }
};