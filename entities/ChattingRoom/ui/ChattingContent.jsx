import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MyChat from './MyChat';
import AiChat from './AiChat'; // AI 응답용 컴포넌트
import Input from './Input';
import { getAsk, getChat } from '../api/ChattingRoomAPi';

export default function ChattingContent({ roomId }) {
  const [messages, setMessages] = useState([]); // 메시지 리스트 관리
  const [content, setContent] = useState(''); // 입력된 내용 관리

  const scrollViewRef = useRef(null); // ScrollView 참조

  useEffect(() => {
    getChat(roomId, setMessages)
  }, [])

  const handleSendMessage = () => {
    if (content.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { type: 'user', content }
      ]);
      getAsk(roomId, content, setMessages);
      setContent('');
    }
  };

  useEffect(() => {
    //컴포넌트가 렌더링된 후 가장 하단으로 스크롤 이동
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <MainLayout>

      <ScrollViewContainer
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        showsVerticalScrollIndicator={false}
      >
        <Content>
          {messages.map((message, index) => (
            message.type === 'user' ? (
              <MyChat key={index} content={message.content} />
            ) : (
              <AiChat key={index} content={message.content} />
            )
          ))}
        </Content>

      </ScrollViewContainer>

      <Input
        content={content}
        setContent={setContent}
        onSend={handleSendMessage} // 메시지 전송 시 호출되는 함수
      />

    </MainLayout>
  );
}

const ScrollViewContainer = styled.ScrollView`
  width: 90%;
`;

const Content = styled.View`
width : 100%;
padding-bottom : 13%;

`;

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F1F1F5;
  align-items: center;
`;
