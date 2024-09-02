import React from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform } from 'react-native';
import ToolBar from '../shared/component/ToolBar';
import Input from '../entities/ChattingRoom/Input';
import ChattingContent from '../entities/ChattingRoom/ChattingContent';
import TitleBar from '../entities/ChattingRoom/TitleBar';

export default function ChattingRoom() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}  // iOS에서 키보드 높이 보정
    >
      <MainLayout>
        {/* 상단바 */}
        <TitleBar />

        {/* 채팅 내용 */}
        <ChattingContent />

        {/* 입력창 */}
        <Input />
      </MainLayout>
    </KeyboardAvoidingView>
  );
}

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
`;

const StyledText = styled.Text`
  /* 필요에 따라 텍스트 스타일링 추가 */
`;
