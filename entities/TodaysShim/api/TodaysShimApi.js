import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../../../shared/config/config'


//호흡 측정 
export const getPef = async (formData) => {    
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');   
        console.log("호흡측정")     
        if (token) {
            const response = await axios.post(`${BASE_URL}/api/breathing/check/getPef`, formData,
                {
                    headers: {
                        'Content-Type' : 'multipart/form-data',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                },
                {
                    transformRequest: (data, headers) => {
                        return data;
                      },
                }
                
            );
            console.log(response.data.data)
        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        console.error('error!', error.response?.data);
    }
};

//호흡 재측정 
export const modifyBreathing = async (formData) => {    
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');        
        if (token) {
            const response = await axios.put(`${BASE_URL}/api/breathing/check/modifyBreathing`, formData,
                {
                    headers: {
                        'Content-Type' : 'multipart/form-data',
                        'Authorization': `Bearer ${token}` //헤더에 토큰 넣어주기
                    }
                },
                {
                    transformRequest: (data, headers) => {
                        return data;
                      },
                }
                
            );
            console.log(response.data.data)
        } else {
            console.log("토큰이 없습니다.");
        }

    } catch (error) {
        console.error('error!', error.response?.data);
    }
};

//오늘의 심 결과 조회
export const getResult = async () => {  
    try {
        //로컬 스토리지에 저장되어 있는 토큰을 가져옴
        const token = await AsyncStorage.getItem('accessToken');      
        console.log("호흡재측정")       
        if (token) {
            const response = await axios.get(`${BASE_URL}/api/breathing/today/result`,
                {
                    headers: {
                        'Content-Type' : 'multipart/form-data',
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