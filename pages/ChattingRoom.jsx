import React from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform } from 'react-native';
import ChattingContent from '../entities/ChattingRoom/ui/ChattingContent';
import TitleBar from '../entities/ChattingRoom/ui/TitleBar';

export default function ChattingRoom({route}) {
  const {roomId,title} = route.params;

  return (
      <MainLayout>

        <TitleBar roomId={roomId} title={title} />

        <ChattingContent roomId={roomId}/>

      </MainLayout>
  
  );
}

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F7F7FB;
`;
