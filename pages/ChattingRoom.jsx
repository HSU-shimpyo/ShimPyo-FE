import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Input from '../entities/ChattingRoom/Input';
import ChattingContent from '../entities/ChattingRoom/ChattingContent';
import TitleBar from '../entities/ChattingRoom/TitleBar';
import Loading from '../entities/ChattingRoom/Loading';

export default function ChattingRoom() {
  const scrollViewRef = useRef();
  const [isUserScrolled, setIsUserScrolled] = useState(false);

  const scrollToBottom = () => {
    if (!isUserScrolled) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  };

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const distanceFromBottom = contentSize.height - contentOffset.y - layoutMeasurement.height;
    setIsUserScrolled(distanceFromBottom > 50);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -20: 0} // iOS에서 키보드 높이 보정
    >
      <MainLayout>
        <TitleBar />
        <ScrollViewContainer>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 0.7, justifyContent: 'flex-end' }}
            onContentSizeChange={scrollToBottom}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <ChattingContent />
          </ScrollView>
        </ScrollViewContainer>
        <InputContainer>
        <Loading/>
          <Input />

        </InputContainer>
      </MainLayout>
    </KeyboardAvoidingView>
  );
}

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  background-color: #F1F1F5;
  bottom:33px;

`;

const ScrollViewContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #F1F1F5;
`;

const InputContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: #f1f1f5;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

`;
