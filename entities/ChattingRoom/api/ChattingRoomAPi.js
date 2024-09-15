import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";

//메시지 전송 및 AI 응답 처리
export const getAsk = async (roomId, question, setMessages) => {
    console.log("룸아이디", roomId)
    console.log("질문", question)
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.post(`${BASE_URL}/api/chat/ask`, {
                'chatRoomId': roomId,
                'question': question
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // 헤더에 토큰 추가
                    }
                });
            console.log(response.data.data);

            //응답 데이터를 메시지로 추가
            if (response.data?.data) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'ai', content: response.data.data }
                ]);
            }
        } else {
            console.log("토큰이 없습니다.");
        }
    } catch (error) {
        console.error('error!', error);
    }
};

//채팅방 대화 내역 조회
export const getChat = async (roomId, setMessages) => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.get(`${BASE_URL}/api/chat/getChat`, {
                params: {
                    chatRoomId: roomId 
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // 헤더에 토큰 추가
                }
            });
            const content = response.data.data
            content.map((item,index) => {
                console.log(item)
                setMessages(prevMessages => [
                    ...prevMessages,
                    { 
                        type: index%2==0 ? 'user' : 'ai', 
                        content : item.content 
                    }
                  ]);
            });

        } else {
            console.log("토큰이 없습니다.");
        }
    } catch (error) {
        console.error('error!', error);
    }
};

//채팅방 제목 수정 
export const modifyChatRoomTitle = async (roomId, title) => {
    console.log("룸", roomId);
    console.log('제목', title);
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.put(`${BASE_URL}/api/chat/modifyChatRoomTitle`, 
                {
                    chatRoomId: roomId,
                    title: title
                },
                {
                    headers: {  // 헤더는 여기서 정의
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // 헤더에 토큰 추가
                    }
                }
            );
            console.log(response.data);
        } else {
            console.log("토큰이 없습니다.");
        }
    } catch (error) {
        console.error('error!', error);
    }
};


