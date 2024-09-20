import React, { useState, useEffect, useRef } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components';
import MyChat from './MyChat';
import AiChat from './AiChat'; 
import Input from './Input';
import { getAsk, getChat } from '../api/ChattingRoomAPi';
import DefaultChat from './DefaultChat';
import Loading from './Loading';

export default function ChattingContent({ roomId }) {
  const [messages, setMessages] = useState([]); // 메시지 배열
  const [content, setContent] = useState(''); 
  const [loading, setLoading] = useState(false); // 로딩 상태
  const scrollViewRef = useRef(null); // ScrollView 참조

  // 메시지가 추가될 때마다 자동으로 스크롤을 아래로 이동
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

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

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <MainLayout>
        <ScrollViewContainer
          ref={scrollViewRef} // ScrollView 참조
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }} // 'flex-end'로 스크롤뷰 내용 하단 정렬
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })} // 스크롤 자동 이동
          showsVerticalScrollIndicator={false}
        >
          <Content>
            {/* DefaultChat을 일반 메시지 리스트의 맨 위로 배치 */}
            <DefaultChat messages={messages} setMessages={setMessages} />

            {/* 일반 사용자 메시지와 AI 메시지 렌더링 */}
            {messages.map((message, index) => (
              message.type === 'user' ? (
                <MyChat key={index} content={message.content} />
              ) : (
                <AiChat key={index} content={message.content} />
              )
            ))}
            {loading && <Loading />}
          </Content>
        </ScrollViewContainer>

        <Input
          content={content}
          setContent={setContent}
          onSend={handleSendMessage}
        />
      </MainLayout>
    </KeyboardAvoidingView>
  );
}

const ScrollViewContainer = styled.ScrollView`
  width: 100%;
`;

const Content = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F1F1F5;
  align-items: center;
`;
