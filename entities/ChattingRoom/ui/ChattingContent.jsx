import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MyChat from './MyChat';
import AiChat from './AiChat'; 
import Input from './Input';
import { getAsk, getChat } from '../api/ChattingRoomAPi';
import DefaultChat from './DefaultChat';
import Loading from './Loading';

export default function ChattingContent({ roomId }) {
  const [messages, setMessages] = useState([]); //메세지 담는 배열
  const [content, setContent] = useState(''); 
  const [loading, setLoading] = useState(false); //로딩 상태

  const scrollViewRef = useRef(null); 

  useEffect(() => {
    getChat(roomId, setMessages);
  }, []);

  const handleSendMessage = () => {
    if (content.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { type: 'user', content }
      ]);
      setLoading(true); 
      getAsk(roomId, content, (newMessages) => {
        setMessages(newMessages);
        setLoading(false);
      });
      setContent('');
    }
  };

  // 메시지가 추가되면 자동으로 스크롤 하단으로 이동
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <MainLayout>

      <ScrollViewContainer
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        showsVerticalScrollIndicator={false}
      >
        <DefaultChat messages={messages} setMessages={setMessages} />
        <Content>
          {messages.map((message, index) => (
            message.type === 'user' ? (
              <MyChat key={index} content={message.content} />
            ) : (
              <AiChat key={index} content={message.content} />
            )
          ))}
          {loading && <Loading/>}
        </Content>
      </ScrollViewContainer>

      <Input
        content={content}
        setContent={setContent}
        onSend={handleSendMessage}
      />

    </MainLayout>
  );
}

const LoadingMessage = styled.Text`
  color: #767676;
  font-size: 14px;
  font-style: italic;
  padding: 10px;
  text-align: center;
`;

const ScrollViewContainer = styled.ScrollView`
  width: 90%;
`;

const Content = styled.View`
  width: 100%;
  padding-bottom: 2%;
`;

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F1F1F5;
  align-items: center;
`;

