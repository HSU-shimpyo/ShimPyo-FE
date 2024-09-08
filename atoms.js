import { atom } from 'recoil';

// 사용자 로그인 상태를 관리하는 atom
export const userState = atom({
  key: 'userState',  
  default: {
    login: false,  // 기본값을 false로 설정
  },
});

// 채팅방 데이터를 관리하는 atom
export const chattingcomponent = atom({
  key: 'chattingComponentState',
  default: [
    {
      title: '질문방 제목1',
      content: '동해물과 백두산이 동해물과 백두산이 동해물과 백두산이',
    },
    {
      title: '질문방 제목2',
      content: '동해물과 백두산이 동해물과 백두산이 동해물과 백두산이',
    },
  ],
});
