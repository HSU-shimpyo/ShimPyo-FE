import React from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import AiChat from './AiChat';
import MyChat from './MyChat';
import DefaultChat from './DefaultChat';

export default function ChattingContent() {
  return (
    <ScrollViewContainer>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
       {/* 인사 */}
       <AiChat /> 

        {/* 기존에 있는 질문 */}
        <DefaultChat />



        {/* <MyChat /> 내가 쓰는 채팅 */}
      </ScrollView>
    </ScrollViewContainer>
  );
}

const ScrollViewContainer = styled.View`
  width: 100%;
  background-color: #F1F1F5; 
`;

const MainLayout = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #F1F1F5; 
  border: #111;
`;
