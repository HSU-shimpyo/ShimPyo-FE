import React from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform } from 'react-native';
import ChattingContent from '../entities/ChattingRoom/ui/ChattingContent';
import TitleBar from '../entities/ChattingRoom/ui/TitleBar';

export default function ChattingRoom({route}) {
  const {roomId,title} = route.params;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -22 : 0} // iOS에서 키보드 높이 보정
    >
      <MainLayout>

        <TitleBar roomId={roomId} title={title} />

        <ChattingContent roomId={roomId}/>

      </MainLayout>
    </KeyboardAvoidingView>
  );
}

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F7F7FB;
`;
